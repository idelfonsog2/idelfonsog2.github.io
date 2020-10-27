```python
import configparser
from datetime import datetime, date
import os
from pyspark import SparkContext, SparkConf
from pyspark.sql import SparkSession
from pyspark.sql.types import *
from pyspark.sql.functions import udf, col, monotonically_increasing_id
from pyspark.sql.functions import year, month, dayofmonth, hour, weekofyear, date_format

import datetime

import numpy as np
import pandas as pd

config = configparser.ConfigParser()
config.read('dl.cfg')


os.environ['AWS_ACCESS_KEY_ID']=config['AWS']['AWS_ACCESS_KEY_ID']
os.environ['AWS_SECRET_ACCESS_KEY']=config['AWS']['AWS_SECRET_ACCESS_KEY']
```


```python
spark = SparkSession \
        .builder \
        .master("local[4]") \
        .appName("sparkify") \
        .config("spark.jars.packages", "org.apache.hadoop:hadoop-aws:2.7.0") \
        .getOrCreate()
```


```python
# read song data file
df = spark.read.json('data/song_data/*/*/*/*.json')
```


```python
df.show(5)
```

    +------------------+---------------+-----------------+----------------+--------------------+---------+---------+------------------+--------------------+----+
    |         artist_id|artist_latitude|  artist_location|artist_longitude|         artist_name| duration|num_songs|           song_id|               title|year|
    +------------------+---------------+-----------------+----------------+--------------------+---------+---------+------------------+--------------------+----+
    |ARDR4AC1187FB371A1|           null|                 |            null|Montserrat Caball...|511.16363|        1|SOBAYLL12A8C138AF9|Sono andati? Fing...|   0|
    |AREBBGV1187FB523D2|           null|      Houston, TX|            null|Mike Jones (Featu...|173.66159|        1|SOOLYAZ12A6701F4A6|Laws Patrolling (...|   0|
    |ARMAC4T1187FB3FA4C|       40.82624|Morris Plains, NJ|       -74.47995|The Dillinger Esc...|207.77751|        1|SOBBUGU12A8C13E95D|Setting Fire to S...|2004|
    |ARPBNLO1187FB3D52F|       40.71455|     New York, NY|       -74.00712|            Tiny Tim| 43.36281|        1|SOAOIBZ12AB01815BE|I Hold Your Hand ...|2000|
    |ARDNS031187B9924F0|       32.67828|          Georgia|       -83.22295|          Tim Wilson|186.48771|        1|SONYPOM12A8C13B2D7|I Think My Wife I...|2005|
    +------------------+---------------+-----------------+----------------+--------------------+---------+---------+------------------+--------------------+----+
    only showing top 5 rows
    



```python
df.printSchema()
```

    root
     |-- artist_id: string (nullable = true)
     |-- artist_latitude: double (nullable = true)
     |-- artist_location: string (nullable = true)
     |-- artist_longitude: double (nullable = true)
     |-- artist_name: string (nullable = true)
     |-- duration: double (nullable = true)
     |-- num_songs: long (nullable = true)
     |-- song_id: string (nullable = true)
     |-- title: string (nullable = true)
     |-- year: long (nullable = true)
    



```python
output_path = "data-lake-project/data/partitioned/"
```

# Processing Song Data file


```python
songs_table = df.select('song_id', 
                        'title', 
                        'artist_id', 
                        'year', 
                        'duration')
```


```python
songs_table.show(1)
```

    +------------------+--------------------+------------------+----+---------+
    |           song_id|               title|         artist_id|year| duration|
    +------------------+--------------------+------------------+----+---------+
    |SOBAYLL12A8C138AF9|Sono andati? Fing...|ARDR4AC1187FB371A1|   0|511.16363|
    +------------------+--------------------+------------------+----+---------+
    only showing top 1 row
    



```python
songs_table.write.parquet(os.path.join(output_path, '/artists'), mode='overwrite', partitionBy=('year', 'artist_id'))
```


```python
df.createTempView('songs')
```


```python
artist_table = df.selectExpr('artist_id as id', 
                            'artist_name as name', 
                            'artist_location as location', 
                            'artist_latitude as latitude', 
                            'artist_longitude as longitude')
```


```python
artist_table.write.parquet(os.path.join(output_path, '/artists'), mode='overwrite')
```

## Song Data Views of the files in Spark SQL


```python
spark.sql("""
    SELECT *
    FROM songs_table
""").show(3)
```

    +------------------+---------------+-----------------+----------------+--------------------+---------+---------+------------------+--------------------+----+
    |         artist_id|artist_latitude|  artist_location|artist_longitude|         artist_name| duration|num_songs|           song_id|               title|year|
    +------------------+---------------+-----------------+----------------+--------------------+---------+---------+------------------+--------------------+----+
    |ARDR4AC1187FB371A1|           null|                 |            null|Montserrat Caball...|511.16363|        1|SOBAYLL12A8C138AF9|Sono andati? Fing...|   0|
    |AREBBGV1187FB523D2|           null|      Houston, TX|            null|Mike Jones (Featu...|173.66159|        1|SOOLYAZ12A6701F4A6|Laws Patrolling (...|   0|
    |ARMAC4T1187FB3FA4C|       40.82624|Morris Plains, NJ|       -74.47995|The Dillinger Esc...|207.77751|        1|SOBBUGU12A8C13E95D|Setting Fire to S...|2004|
    +------------------+---------------+-----------------+----------------+--------------------+---------+---------+------------------+--------------------+----+
    only showing top 3 rows
    


# Processing Log data file


```python
log_data_frame = spark.read.json('data/log-data/*.json')
log_data_frame.show(2)
```

    +-----------+---------+---------+------+-------------+--------+---------+-----+--------------------+------+--------+-----------------+---------+---------------+------+-------------+--------------------+------+
    |     artist|     auth|firstName|gender|itemInSession|lastName|   length|level|            location|method|    page|     registration|sessionId|           song|status|           ts|           userAgent|userId|
    +-----------+---------+---------+------+-------------+--------+---------+-----+--------------------+------+--------+-----------------+---------+---------------+------+-------------+--------------------+------+
    |   Harmonia|Logged In|     Ryan|     M|            0|   Smith|655.77751| free|San Jose-Sunnyval...|   PUT|NextSong|1.541016707796E12|      583|  Sehr kosmisch|   200|1542241826796|"Mozilla/5.0 (X11...|    26|
    |The Prodigy|Logged In|     Ryan|     M|            1|   Smith|260.07465| free|San Jose-Sunnyval...|   PUT|NextSong|1.541016707796E12|      583|The Big Gundown|   200|1542242481796|"Mozilla/5.0 (X11...|    26|
    +-----------+---------+---------+------+-------------+--------+---------+-----+--------------------+------+--------+-----------------+---------+---------------+------+-------------+--------------------+------+
    only showing top 2 rows
    



```python
log_data_frame.createTempView('log_data')
```


```python
new_log_data_frame = spark.sql("""
    SELECT *
    FROM log_data
    WHERE page = 'NextSong'
""")
```


```python
users_table = new_log_data_frame.selectExpr('userId as user_id', 
                                            'firstName as first_name', 
                                            'lastName as last_name', 
                                            'gender', 
                                            'level')
```


```python
users_table.show(1)
```

    +-------+----------+---------+------+-----+
    |user_id|first_name|last_name|gender|level|
    +-------+----------+---------+------+-----+
    |     26|      Ryan|    Smith|     M| free|
    +-------+----------+---------+------+-----+
    only showing top 1 row
    



```python
users_table.write.parquet(os.path.join(output_path, '/users'), mode='overwrite')
```


```python
# create datetime column from original timestamp column
get_timestamp = udf(lambda ts: datetime.datetime.fromtimestamp(ts/1000.0), TimestampType())
new_table_datetime_converted = new_log_data_frame.withColumn('ts', get_timestamp(new_log_data_frame.ts)).fillna(0)
```


```python
spark.udf.register('get_timestamp', get_timestamp)
```




    <function __main__.<lambda>(ts)>




```python
time_table = new_table_datetime_converted.selectExpr('ts as start_time', 
                                                     'extract(hour from ts) as hour',
                                                     'extract(day from ts) as day', 
                                                     'weekofyear(ts) as week', 
                                                     'extract(month from ts) as month', 
                                                     'extract(year from ts) as year', 
                                                     'weekday(ts) as weekday')
```


```python
time_table.write.parquet(os.path.join(output_path, 'times'), partitionBy=('year', 'month'))
```


```python
# songplay_id, start_time, user_id, level, song_id, artist_id, session_id, location, user_agent
songplay_table = spark.sql("""
    SELECT ts as start_time, userId as user_id, level, song, sessionId as session_id, location, userAgent as user_agent, 
    year(get_timestamp(ts)) as year, month(get_timestamp(ts)) as month
    FROM log_data
    JOIN songs_table
    ON log_data.artist == songs_table.artist_name
    AND log_data.song == songs_table.title
    AND log_data.length == songs_table.duration
""").withColumn('songplay_id', monotonically_increasing_id())
# .withColumn('year', year('start_time')).withColumn('month', month('start_time'))
```


```python
songplay_table.show(1)
```

    +-------------+-------+-----+--------------+----------+--------------------+--------------------+----+-----+-----------+
    |   start_time|user_id|level|          song|session_id|            location|          user_agent|year|month|songplay_id|
    +-------------+-------+-----+--------------+----------+--------------------+--------------------+----+-----+-----------+
    |1542837407796|     15| paid|Setanta matins|       818|Chicago-Napervill...|"Mozilla/5.0 (X11...|2018|   11|          0|
    +-------------+-------+-----+--------------+----------+--------------------+--------------------+----+-----+-----------+
    



```python
# write songplays table to parquet files partitioned by year and month
songplay_table.write.parquet(os.path.join(output_path, 'songplay'), mode='overwrite', partitionBy=('year', 'month'))
```
