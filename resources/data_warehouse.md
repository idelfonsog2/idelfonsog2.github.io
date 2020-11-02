```python
import pandas as pd
import boto3
import json
import configparser
```


```python
config = configparser.ConfigParser()
config.read_file(open('dwh.cfg'))
KEY                    = config.get('AWS','KEY')
SECRET                 = config.get('AWS','SECRET')
DWH_IAM_ROLE_NAME      = config.get('CLUSTER', 'DWH_IAM_ROLE_NAME')

DWH_CLUSTER_TYPE       = config.get('CLUSTER', 'DWH_CLUSTER_TYPE')
DWH_NUM_NODES          = config.get('CLUSTER', 'DWH_NUM_NODES')
DWH_NODE_TYPE          = config.get('CLUSTER', 'DWH_NODE_TYPE')

DWH_CLUSTER_IDENTIFIER = config.get('CLUSTER', 'DWH_CLUSTER_IDENTIFIER')
DB_NAME                = config.get('CLUSTER', 'DB_NAME')
DB_USER                = config.get('CLUSTER', 'DB_USER')
DB_PASSWORD            = config.get('CLUSTER', 'DB_PASSWORD')
DB_PORT                = config.get('CLUSTER', 'DB_PORT')
ARN                = config.get('IAM_ROLE', 'ARN')
```


```python
ec2 = boto3.resource('ec2',
                       region_name="us-west-2",
                       aws_access_key_id=KEY,
                       aws_secret_access_key=SECRET
                    )

s3 = boto3.resource('s3',
                       region_name="us-west-2",
                       aws_access_key_id=KEY,
                       aws_secret_access_key=SECRET
                   )

iam = boto3.client('iam',aws_access_key_id=KEY,
                     aws_secret_access_key=SECRET,
                       region_name="us-west-2"
                  )

redshift = boto3.client('redshift',
                       region_name="us-west-2",
                       aws_access_key_id=KEY,
                       aws_secret_access_key=SECRET
                       )
```


```python
from botocore.exceptions import ClientError

#1.1 Create the role, 
try:
    print("1.1 Creating a new IAM Role") 
    dwhRole = iam.create_role(
        Path='/',
        RoleName=DWH_IAM_ROLE_NAME,
        Description = "Allows Redshift clusters to call AWS services on your behalf.",
        AssumeRolePolicyDocument=json.dumps(
            {'Statement': [{'Action': 'sts:AssumeRole',
               'Effect': 'Allow',
               'Principal': {'Service': 'redshift.amazonaws.com'}}],
             'Version': '2012-10-17'})
    )    
except Exception as e:
    print(e)
    
    
print("1.2 Attaching Policy")

iam.attach_role_policy(RoleName=DWH_IAM_ROLE_NAME,
                       PolicyArn="arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess"
                      )['ResponseMetadata']['HTTPStatusCode']

print("1.3 Get the IAM role ARN")
roleArn = iam.get_role(RoleName=DWH_IAM_ROLE_NAME)['Role']['Arn']

print(roleArn)
```


```python
try:
    response = redshift.create_cluster(        
        #HW
        ClusterType=DWH_CLUSTER_TYPE,
        NodeType=DWH_NODE_TYPE,
        NumberOfNodes=int(DWH_NUM_NODES),

        #Identifiers & Credentials
        DBName=DB_NAME,
        ClusterIdentifier=DWH_CLUSTER_IDENTIFIER,
        MasterUsername=DB_USER,
        MasterUserPassword=DB_PASSWORD,
        
        #Roles (for s3 access)
        IamRoles=[roleArn]  
    )
except Exception as e:
    print(e)
```


```python
def prettyRedshiftProps(props):
    pd.set_option('display.max_colwidth', -1)
    keysToShow = ["ClusterIdentifier", "NodeType", "ClusterStatus", "MasterUsername", "DBName", "Endpoint", "NumberOfNodes", 'VpcId']
    x = [(k, v) for k,v in props.items() if k in keysToShow]
    return pd.DataFrame(data=x, columns=["Key", "Value"])

myClusterProps = redshift.describe_clusters(ClusterIdentifier=DWH_CLUSTER_IDENTIFIER)['Clusters'][0]
prettyRedshiftProps(myClusterProps)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Key</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>ClusterIdentifier</td>
      <td>dwhcluster</td>
    </tr>
    <tr>
      <th>1</th>
      <td>NodeType</td>
      <td>dc2.large</td>
    </tr>
    <tr>
      <th>2</th>
      <td>ClusterStatus</td>
      <td>available</td>
    </tr>
    <tr>
      <th>3</th>
      <td>MasterUsername</td>
      <td>idelfonso</td>
    </tr>
    <tr>
      <th>4</th>
      <td>DBName</td>
      <td>sparkifydb</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Endpoint</td>
      <td>{'Address': 'dwhcluster.cnaqoizhiv4v.us-west-2.redshift.amazonaws.com', 'Port': 5439}</td>
    </tr>
    <tr>
      <th>6</th>
      <td>VpcId</td>
      <td>vpc-b2a48cd7</td>
    </tr>
    <tr>
      <th>7</th>
      <td>NumberOfNodes</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>




```python
DWH_ENDPOINT = myClusterProps['Endpoint']['Address']
DWH_ROLE_ARN = myClusterProps['IamRoles'][0]['IamRoleArn']
print("DWH_ENDPOINT :: ", DWH_ENDPOINT)
print("DWH_ROLE_ARN :: ", DWH_ROLE_ARN)
```

    DWH_ENDPOINT ::  dwhcluster.cnaqoizhiv4v.us-west-2.redshift.amazonaws.com
    DWH_ROLE_ARN ::  arn:aws:iam::783882260760:role/dwhRole



```python
try:
    vpc = ec2.Vpc(id=myClusterProps['VpcId'])
    defaultSg = list(vpc.security_groups.all())[0]

    defaultSg.authorize_ingress(
        GroupName=defaultSg.group_name,
        CidrIp='0.0.0.0/0',
        IpProtocol='TCP',
        FromPort=int(DB_PORT),
        ToPort=int(DB_PORT))
except Exception as e:
    print(e)
```

    An error occurred (InvalidPermission.Duplicate) when calling the AuthorizeSecurityGroupIngress operation: the specified rule "peer: 0.0.0.0/0, TCP, from port: 5439, to port: 5439, ALLOW" already exists


# Clean Resources in AWS


```python
redshift.delete_cluster( ClusterIdentifier=DWH_CLUSTER_IDENTIFIER,  SkipFinalClusterSnapshot=True)
iam.detach_role_policy(RoleName=DWH_IAM_ROLE_NAME, PolicyArn="arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess")
iam.delete_role(RoleName=DWH_IAM_ROLE_NAME)
```




    {'ResponseMetadata': {'RequestId': 'd17000e5-e7d6-4237-8331-adba620db8ae',
      'HTTPStatusCode': 200,
      'HTTPHeaders': {'x-amzn-requestid': 'd17000e5-e7d6-4237-8331-adba620db8ae',
       'content-type': 'text/xml',
       'content-length': '200',
       'date': 'Sun, 19 Jul 2020 20:39:48 GMT'},
      'RetryAttempts': 0}}



# db Connection


```python
import os 
import configparser
import psycopg2
from sql_queries import create_table_queries, drop_table_queries

conn_string="postgresql://{}:{}@{}:{}/{}".format(*config['CLUSTER'].values())
conn = psycopg2.connect(conn_string)
cur = conn.cursor()
```


```python
%load_ext sql
%sql $conn_string
```




    'Connected: idelfonso@sparkifydb'




```python
%%sql
SELECT *
FROM staging_songs
limit 4;
```

     * postgresql://idelfonso:***@dwhcluster.cnaqoizhiv4v.us-west-2.redshift.amazonaws.com:5439/sparkifydb
    0 rows affected.





<table>
    <tr>
        <th>num_songs</th>
        <th>artist_id</th>
        <th>artist_latitude</th>
        <th>artist_longitude</th>
        <th>artitst_location</th>
        <th>artitst_name</th>
        <th>song_id</th>
        <th>title</th>
        <th>duration</th>
        <th>year</th>
    </tr>
</table>




```python
%sql select * from stl_load_errors;
```

     * postgresql://idelfonso:***@dwhcluster.cnaqoizhiv4v.us-west-2.redshift.amazonaws.com:5439/sparkifydb
       postgresql://idelfonso:***@dwhcluster.cxna1iqaysmu.us-east-2.redshift.amazonaws.com:5439/sparkifydb
    0 rows affected.





<table>
    <tr>
        <th>userid</th>
        <th>slice</th>
        <th>tbl</th>
        <th>starttime</th>
        <th>session</th>
        <th>query</th>
        <th>filename</th>
        <th>line_number</th>
        <th>colname</th>
        <th>type</th>
        <th>col_length</th>
        <th>position</th>
        <th>raw_line</th>
        <th>raw_field_value</th>
        <th>err_code</th>
        <th>err_reason</th>
    </tr>
</table>


