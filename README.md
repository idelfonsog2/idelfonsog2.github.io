<meta property="og:title" content="Curiosity & Learning is the number one skill">
<meta property="og:description" content="Working with software applications and data pipelines.">
<meta property="og:image" content="https://idelfonsog2.github.io/img/circular-shot.png">

### Featured App

## `Stranded`

![](img/stranded.jpg)

[![](img/Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg)](https://apps.apple.com/us/app/stranded-at-an-airport/id1522181739)

## **A trip. New connections. New Culture**

### **Enjoy your time at the airport as you dance with a another human before or after your flight.**

- It will map, filter, reduce common attributes of a person's trip 
- Take different time zones into account for everyones trips and reminders
- It will notify you when people are also waiting and they might enjoy a tanda.
- The rest is **HX**, human experience!


The project is inspired by my curiosity, passion for learning, [dancing](#current-about-me), meeting people, and this [community group](https://www.facebook.com/groups/348726108583892/)

*tech: [Swift](https:www.swift.org), [Vapor](https://vapor.codes), [Push Notifications](), [Database](), [Containers](Docker)*

---

<p align="center">
	<img width="180" height="180" src="/img/circular-shot.png"/>
</p>

## Hola 👋

I'm Idelfonso. I believe some things can be done much better and delightful.

The way I `code` mobile/backend applications is by making them much simpler, intuitive and user friendly.

Whether you are creating a proof of concept, need assitant on an ongoing or a new project – I can help! - [reach out](mailto:idelfonsog2@gmail.com)

- 📱 [Experience](#experience)
- 🛒 [Clients](#clients) 
- 🕺 [About Me](#current-about-me)
- 💾 [PDF version](resources/resume_us.pdf)
- 💬 [@idelfonsoGM]()
<!-- - 💾 [Contact Card](idelfonso.vcf) -->

---

## Writting software asynchronously

With my ongoing project feature at the [top](#featured-app) I have been able to gather all the knowledge I gain into a single application... more like many realated to the same application.

I'm really grateful and content about the excitement there is in the [#SwiftLang]() community. Many people think: _You write iPhone applications_ - __maybe!__ I can relate to this conversation [twitter video](https://twitter.com/davejacobseniOS/status/1453743066137907204)

[Swift](https://www.swift.org) is an open source language which has achieve things like [differential progamming](https://en.wikipedia.org/wiki/Differentiable_programming), [functional programming](https://en.wikipedia.org/wiki/Functional_programming), and [**server-side development**](https://vapor.code). Within the last 2 weeks ago! 🤯, the language gain two new milestones [**Concurrent programming**](https://docs.swift.org/swift-book/LanguageGuide/Concurrency.html) and [**Distributed Computing**](https://github.com/apple/swift-distributed-actors). Amazing 🚀.

For my project, I have been able to combine and use the server-side development, concurrent programming and leverage the use of declarative programming. These were things that I was looking at the progress of, mainly thanks to the [Swift Evolution](https://github.com/apple/swift-evolution) [#iOSApp](https://apps.apple.com/us/app/evolution-app/id1210898168).

I'm not only writting the mobile front end and the backend with the above as I mentioned. I'm also working with another recent feature announced [Swift AWS Lambda](https://github.com/awslabs/aws-sdk-swift), at this point you might wonder:
- _Maybe is overkill? Do you pretend to add everything that you find? When would I ship it?_ 

Valid questions!

### The true is

- Learn cross platform development N time
- Write the app for the mobile N time
- learn go or python N time
- develop your backend in javascript N time
- Deploy to a cloud provider N Time
- Leveraging other people to get those task done N time

Do the above yoursel in Swift... priceless

Nov 4, 2021

--- 

## Open Source Contributions

### Writing BDD + TDD in my current projects

**Github Repo** [Cucumberish - Ahmed-Ali](https://cucumber.io/docs/installation/ios/) 👈🏽👀

- **Who writes TDD?** tricky question🤔😅. Best case, its the output of a conversation between: devs, product owners/managers, stakeholders, and quality assurance testers
- **What is TDD?**  write software that assumes your production software is already built and make it compile/pass.
- **Why use TDD?** In order to avoid introducing bugs as you are adding or changing behavior.
- **When?** Drill down what you want your users to achieve _as concepts_ first _**[capabilities]**_
- **Where?** TextEdit! 📑 honestly!
- **How to?** Gherkin + Cucumber...ish + XCTest

> ### No method is more effective than a good example. - Ingvar Kamprad, IKEA Founder

####  The Problem
A developer could write the following below. But this is missing some context, and only developers _**could!**_ be able to understand what is the system is doing.

<!-- not java, swift -->
```swift
func testSystem_whenReset_isInStarted() {
 sut.setToInProgress()

 sut.restart()

 XCTAssertEqual(sut.state, .blank)
}

```

#### A different approach: Give me an example

```gherkin
Given the application is "in progress"
When a user "restarts" the application
Then the application will set to "default"
```

```swift
func Given("the application is [regex]") { state in
 sut.set(state)
}

func When("a user [regex] the application") { action in
 sut.perform(action)
}

func Then("the application will set to [regex]") { expected in
 XCTAssertEqual(expected, sut.state)
}

```

The result out of it is that developers can make a set of reusable tests and stakeholders, product owners, QA tester can expand the tests into every state of the system.

Developers only need to keep following their TDD approach.

---

## Side-projects
  - [Data Pipelines with Apache Airflow](#data-pipelines-with-apache-airflow) Use Airflow to backfill and schedule the load and analysis of raw data into Redshift data warehouse 
  - [Data Lake with Apache Spark](#data-lakes---with-apache-spark--emr-cluster) Use Spark, Schema-On-Read, and EMR to create an ELT* process
  - [Data Warehouse with AWS S3, Redshift](#data-ware-with-aws-redshift) Create an ETL process to insert OLAP cubes in amazon  redshift
  - [Big Data modeling with Apache Cassandra](#creating-an-etl-process-with-apache-cassandra) Use the partitioned row store for a distributed system. To analyze, clean and aggregate data.
  - [Enterprise data modeling with PostgreSQL](#data-modeling-with-postgresql) Normalize a dataset in order for online analytical processes
  - [Stranded (Side project)](#stranded) Dance with people at the airport, iOS app
  - [mmMapp (Startup Cohort)](#mmMapp) Find the best pathway around Miami, FL and forget about your car, iOS app
  - [Test Driven Development & Behavior Driven Development Library](#writing-bdd--tdd-in-my-current-projects) Use developer and business experience to drive the development of systems. OSS contribution

---

## Mobile Applications 

## `mmMap 🚎`

**The Problem**
- Have you ever had too many events in the same day at different times and different locations?
- Were the events or appointments located close to each other?
- Do you always take into consideration how long will it take you to go from appointment A to appointment B?
- What about lunch? Do you have time to eat in the middle?
- Or where you live? Chicago? Great city transit by the way! 5x_ ⭐️ _Miami?_ ☹️ _Sorry its 1:40 min traffic along the I-95

**But most importantly!**
How happy... or how stress are you? ⛱ 🤯

> The ability to keep learning is an invaluable skill

**The Solution**

`mmMapp` link your calendar with your social media accounts and have mmMapp shows you the events in a sequence with stopping points, happy routes to take, human experience taking int consideration. 

---
### `YellowPepper Talks`

[![](http://img.youtube.com/vi/tImGKXMNiMw/0.jpg)](http://www.youtube.com/watch?v=tImGKXMNiMw)

Introduction to Firebase Database, IAM, and backend for the front end developers.

 I talked about how to start with Firebase, Realtime Database, and its rules. Also about Storage Database and it rules

 Along with it, I developed a small sample iOS project using Swift to send text and image nodes, how they are shown in the firebase console, and which methods I use to retrieve them in the client

**tech:** Swift, UIKit, AutoLayout, Firebase Realtime DB

[GitHub](https://github.com/idelfonsog2/firebase_ios)

---

### `Tubmlr Client`

![](img/tm2.png) ![](img/tm3.png) ![](img/tm4.png)

Created an iOS client in order to search blog users in Tumblr, follow users, and post text blogs.

**tech**: Tumblr API, UIKit

[GitHub](https://github.com/idelfonsog2/tumblr-app)

---
### **`On the Map`**

![](img/map2.png) ![](img/map3.png) ![](img/map4.png)

"On The Map" app allows users to share their location and a URL with their fellow students

**tech**: MapKit, Parse, Udacity API

[GitHub](https://github.com/idelfonsog2/udacity-on-the-map)

---

### **`Virtual Tourist`**

![](img/vir1.png) ![](img/vir2.png)

Wondering what kind of pictures have people taken in a particular place around the world?

Think about Virtual Tourist before Instagram search feature using Flicker

**tech** Flicker API, MapkKit, UIKit

[GitHub](https://www.idelfonso.com/)

---

[back to menu](#menu)

---

# Databases

## Data Pipelines with Apache Airflow

When data analysts and data scientists use data, they rely that is accurate and diverse enough in order to come up with these amazing models that help drive business decisions. Data comes from many places and from different times; a system could start collecting data tomorrow or it was already started 20 years ago; Imagine that 😅

### DAG

This project showcases how to design and schedule a series of jobs/steps using [Apache Airflow](https://airflow.apache.org/) with the following purposes
- Backfill data
- Build a dimensional data model using python
- load data from AWS S3 bucket to AWS Redshift Datawarehouse
- run quality checks on the data
- Use or create custom operators and available hooks to create reusable code

![DAG](img/dag.png)

[Github](https://github.com/idelfonsog2/data-schedu
ler-airflow)
This project was completed under the Data Engineer Udacity Nanodegree [link](https://www.udacity.com/course/data-engineer-nanodegree--nd027)

**tech:** AWS Redshift, Python, Apache Airflow, Docker

***
## Data Lakes 🚤  with Apache Spark + EMR Cluster

You can take a trip to a polluted lake or a clean lake and how the water looks, tastes, or where it comes from matters.

Data lakes is a new analogy to what Data Warehouse was till not too long ago. We are still using the same hardware for Data lakes, but with new tools which makes possible to cover more ground. 

In my previous project [STAR vs 3NF 🥊 SCHEMA](#STAR-vs-3NF-🥊-SCHEMA) I prepared the data to be ready for use by BI applications with the **OLAP cubes**. It's a structure that has been validated and vetted through several implementations and successful cases. When I learned about **Data lakes**: the tools, the language, Serverless (Python, learning Scala) I felt that I save a bit of automation by looking into it. 

Don't get me wrong, like any other technology it's flexible, there are pros and cons, budget, analysis of your workload, and team work.

>  Data is the new oil 🛢 

As I mention, automation, but not really. Instead of creating tables and doing the ETL dance, lets do the **ELT** 💃 dance.

Big Data frameworks like Spark focuses on what, where, and how to what Hadoop couldn't

- What *type* of files you read/write has more variety
- Where the files *reside*; filesystem or databases
- How everything becomes available through `DataFrames` + `SQL`

```python
df = spark.read.csv('s3a://.../file.csv', sep=';', inferSchema=True, header=True)
df.createTempView("log_data")
user_table = df.spark.sql("""
                        SELECT user_id as id', 'year(ts) as year
                        FROM log_data
                        """)
user_table.show(1)
user_table.write.parquet('users', partittionBy='year')
```

[Jupyter Notebook](resources/data_lake.md)

We will perform our transformation and have them save in **S3** for which our BI apps could connect to or we could attached to the **cluster**, but they are expensive 💰. S3 it's cheap and it doesn't get shutdown.

Another step is the **Schema-on-read** for this process to be possible, and if you noticed there is a lot of steps.

[Github](https://github.com/idelfonsog2/spark-music-data-pipeline)

This project was completed under the Data Engineer Udacity Nanodegree [link](https://www.udacity.com/course/data-engineer-nanodegree--nd027)

**tech:** AWS EMR (Spark+HDFS), Python, Notebooks

---

## Data Warehouse with AWS Redshift

> Why would we want to use re-create our table structures for Analytical Procedures?

It happens that performance is much better, we can do fewer joins and access the same information. We still would like to have our 3NF schema for application purposes on the side, think about it like a separate microservice. Besides re-creating our tables, these can be improve... by a lot more with the following!

- Non-Columnar Storage (AWS REDSHIFT)
- Distribution table Style (All, even, key), 
- Distribution Keys 🔑

In the first point, I'm talking about creating an ETL process to load this data, but of course there is some setup that needs to be done

> ### _There is an overcrossing between Infra DevOps 🛠 and Data Engineers 💾_

For this project I utilize AWS web services like `redshift`, `s3 storage buckets`, `user roles`, `policies`, and `cloud watch`

The idea is how can we prepare data to be use by _Business Intelligence_ applications Tableu or even Jupyternotebook! 👍
In order to help the business see an overview of the data in a diagram of what important features of the product their customers might be using. Mainly, how can we improve the performance of these OLAP and OLTP transactions? For that, we use the combination of star schema tables, we build a strategy for a distributed data system, and do grouping for all the features thanks to REDSHIFT.

![](img/dwdiagram.png)


[Jupyter Notebook](resources/data_warehouse.md)

This project was completed under the Data Engineer Udacity Nanodegree [link](https://www.udacity.com/course/data-engineer-nanodegree--nd027)

**tech:** AWS services*, Python, Jupyter

---

## Creating an ETL process with Apache Cassandra

### _Handling BIG DATA and storage now a days is no just feasible, it's a must._

```python
import pandas
import cassandra
``` 

Losing customer it's not an option. Today in the world we have a ton of devices that are gathering and sending data. The benefit of using a document store database #NoSQL, is that developers don't need to maintain and/or adjust entities, migrations and changes on existing products. Companies and product moves in an agile environment, where requirements are constantly changing; NoSQL allows us to spin these requirements in a quick manner.

#### The Business Case 💼

The following application establishes the following case where we have deploy a music app and its collecting data which it's the store to a local text file. From that we known which songs does the user listens to and which membership they are on (at a higher level).

```swift
// "Some of the largest production deployments include Apple's, with over 75,000 nodes storing over 10 PB of data, Netflix (2,500 nodes, 420 TB, over 1 trillion requests per day), Chinese search engine Easou (270 nodes, 300 TB, over 800 million requests per day), and eBay (over 100 nodes, 250 TB)." https://cassandra.apache.org/
```
My job was to extract transform and load this data into the system where business teams could bring their requirements and collect solutions from the data.

[🔗 Jupyter Notebook ETL Process](notebooks/cassandra-etl-pipeline.html)

![](img/image_event_datafile_new.jpg)

[Github](https://github.com/idelfonsog2/cassandra-etl-pipeline)

**tech:** Apache Cassandra, Python, Pandas

This project was completed under the Data Engineer Udacity Nanodegree [link](https://www.udacity.com/course/data-engineer-nanodegree--nd027)

---
## Data Modeling with PostgreSQL

```python
cur.execute("DROP DATABASE IF EXISTS ...")
```

Executing the basic CRUD commands is nothing new when it comes to building a system. A well-thought system it's very agnostic, and concepts are transferable within different lower level products. Some of the most popular RDBMS involve PostgreSQL, OracleSQL, MySQL. But where does the data comes from? How often does the data change? How many files do we have, and how often we get new ones? Can we blame IoT 🛰 devices? 
> To the infinity and beyond... - Buzz Lightyear 1995

In the following application are given directory paths of where the client-side system is storing data files based on a music application product. I analyzed the data, build its entities and form the basic link between them. The analytics team is particularly interested in understanding what songs users are listening to

![](img/diagram.png)

[Github](https://github.com/idelfonsog2/pslq-data-modeling)

This project was completed under the Data Engineer Udacity Nanodegree [link](https://www.udacity.com/course/data-engineer-nanodegree--nd027)

**tech:** PostgreSQL, Python, Pandas

---
### **`Hero World`**

Creating a test case for a new park for The Walt Disney Company in order to track schedules and budgeting for the construction of all the projects.

Our dev team was able to implement a database using normalization, which helps identifies the identities inside the projects. We developed a process of Table Creation, Views, Stored Procedures, Triggers. During the project we learned how the activity relates to a project, how a project can have many employees, and how a firm can own many employees. This is done using the concept of a relational database.

**tech**: MySQL*

[GitHub](https://github.com/idelfonsog2/HeroWorld-SQL)

---

[back to menu](#menu)

---

# Miscellaneous 
## AWS Lambda with Swift Runtime

Many iOS developers don't realize at the beginning that they are actually using a programming language with Functional Paradigm and Principles.
The Swift language became really popular thanks to iOS applications. Today, the language does not only help builds applications across an array of customer-facing hardware (iOS, WatchOS, iPadOS, CarPlay) but also enterprise-level and research level as of backend applications and machine learning models respectively. Most recently I saw a microcontroller dev kit for people to start building projects that exist with Raspberry Pi but with Swift and it's own IDE

> # "a prototype is worth 1000 meetings"

Many people say: "well.... its just a Hello World program" or "it lacks the vote from an enterprise point of view" To them I must say there is not an official council who approves or disapproves what technology lives up to the standards. And newer technology aims to address the issues and lack of current technology, how far we can push it, it's only up to us; developers to run with it an see what we like.

Thank you [Fabbian Fett](https://twitter.com/fabianfett) for given us Swift AWS Lambda

![](img/swift-aws.png)

[Getting started with Swift on AWS Lambda](https://fabianfett.de/getting-started-with-swift-aws-lambda-runtime)

[GitHub](https://github.com/idelfonsog2/swift-aws-lambda-function)

---

## **`Electronic Business Cards`**

![](img/contact.jpg)

#### _The Problem:_

_On a rush??_

_Do you have an Instagram account or.... a business card? it probably has a cool design_ 📇

_Maybe Instagram is not your medium_

_Got it. Give me your whatsapp... -me: Is that the new customer management system/.com? It might be..._

#### _The Solution:_

- _Update your information properly, inside the contacts app_
- [Install Shorcut](https://www.icloud.com/shortcuts/18cf866696df49e69c4e64bbf4a16e7a) 🛠
- _Select your contact card inside the shortcut "add contacts" step, it will show "me" on the right-hand side of the list item_
- _Now everytime you have to leave in a rush have the person use the **built-in! camera app**_ 📲📷 _to scan your contact in one second_

_**Note:** also use "Share sheet" to send it using AirDrop, not too many users allow airdrop from everyone_

![](img/display_vcard.gif) ![](img/sample_qrcode.gif)

tech: Siri shortcut

---

[back to menu](#menu)

---

# Experience

<!-- ![](img/nm-logo.png)

### Mobile Developer | [Northwestern Medicine](https://www.nm.org/) | Chicago, U.S. | Sept. 2021 - Currently

- s
- s
- s
- s

--- -->

![](img/ultabeauty.png)

### Enterprise Mobility Developer | [Ulta Beauty](https://www.ulta.com/) | Chicago, U.S.

- Minimize initial technical debt by introducing test driven development and working with the UX/UI in order to guide them when using the apple platforms.
- Leading story reviews with business stakeholders
- Minimize technical support feedback loop and hardware issues by integrating the IT support system and the hardware's SDK for troubleshooting.
- Develop new applications which include flows, features, and hotfixes utilizing the repository, injection, and modularizing patterns.
- Diagram end-to-end architecture and evaluate technical decisions as the project progress
- Build internal and external business partners relationships to clarify concerns and discuss possible approaches about current and upcoming projects
- Work on legacy project in order to maintain backwards compability for new features
- Assisting on developing hybrid applications projects
- Continuous communication with product manager, product owner about the project's progress
- Work with mobile device management provider to assist internal hardware and software
- Develop backend and frontend applications that improved associates processes

---

![](img/growit.png)

### iOS Software Developer | [GrowIt!](http://growitmobile.com/) | Chicago, U.S.

- Able to lock in 3 customer agreements signups when finalizing our data product. This involved **beacon
technology**, **relational database**, and map data visualization (Mapbopx).
- Through the use of **Apple push notification system** we created an analytics product for our third-party associates that help them oversee returning customers
- Use the **mobile instrumentation tool** to increase the efficiency of compilation time from 5 minutes to 2 minutes
and a half. Additionally, this help catch **data race conditions** between **Swift and Objective-C**
- Implement **Behavior Driven Development**, which is a document base layer for stakeholders to help
understand the situation, requirements, actions and results for every new and legacy feature.
- Automate the unit testing suite, app production submission, and quality assurance builds using continuous
integration and continuous deployment pipeline along with **Fastlane**.
- Help the community team decrease the amount of time reviewing inappropriate content by implementing
an image **machine learning** model based on a plant database to identify things that are not plants.
- **Solo developer** in the project
- Developer's **time is valuable**. As a result, created CI/CD software pipelines to facilitate gradual deployment, automated tests, rollbacks, and feature flags
- Delivered features in the most feasible ways using **refactoring design patterns**
- Find balance and knowledge between the technical vision and the delivery of products when gathering and delivering stakeholders requirements

### tools/frameworks/libraries:

- Fastlane, Circle CI, apple push notifications services, XCUITest, iOS dependency managers(Swift Package Manager, git sub-modules, cocoapods) RealmDB, iBeacon, AutoLayout, Mapbox, ReactiveCocoa/Swift 🛠

Tags: horticulture

---

![](img/kinkarta.png)
### Technical Analyst iOS Mobile Developer | [KIN+KARTA](http://kindandkarta.com/)

- Deliver a total cost reduction of -$10,000.00 by integrating an iPadOS app with IoT devices
- iPadOS app with commands and realtime data visualization analytics to/from IoT devices
- Small talk about machine learning use cases and example with **Apple CoreML Framework**

### tools/frameworks/libraries:
- Jenkins, MongoDB, WebSockets, Protobuf, UI reactive library 🛠

tags: agriculture

---

# Clients

### **Ally's Flower**

Online retail flower shop. The client wanted an easy-to-use platform to manage inventory and customer relationship manager.

[www.allysflower.com](www.allysflower.com)

--- 

### **Proendoscopy**

Proendoscopy is a local company in the city of Sunrise, it specializes in the service and repair of medical equipment, mainly endoscopes.

Inventory management iOS application:
- Keep latest status of items when they were sold, currently in repair, or backlog.
- Keep a record of all the items features
- Filter and sorting of items by brand, category, price range
- Image uploads for the item

**tech**: iOS: Objective-C, CoreData, UIKit

[www.proendoscopy.com](www.proendoscopy.com)

---

# Education

- B.S. Software Developer Florida International University Aug 2012 - May 2016
  - Minor: Social Media and E-marketing Analytics
- Startup Cohort @FIU
- iOS Nanodegree Udacity
- Data Engineer Nanodegree Udacity
- Data Streaming Nanodegree Udacity
- Mobile Device Management (MDM) Workspace One Unified Certification by VMWare

***

![](img/yellowpepper.png)
### Intern  iOS Mobile Developer | [YellowPepper](http://www.yellowpepper.com) | Miami, U.S. | Nov 2016 - May 2017

- Worked with multiple iOS **mobile banking apps** developed with Objective-C and third-party frameworks.
- Worked on production-bugs in collaboration with DevOps and Quality Assurance teams
- Run small proof of concept features in order to validate the demand


### tools/frameworks/libraries:

- PCI APIs, Jenkins, AutoLayout, Objective-C, Alamofire 🛠

tags: financial technology

***

### Coding Mentor | Volunteering | [CoderDojo](https://coderdojo.com/) | Miami, U.S. | Dec 2014 - May 2016

CoderDojo is a non-profit organization aimed to teach introductory coding-skills concepts through hands-on learning for students between 4th grade and 8th grade.

As a mentor, I had a transformative experience by being able to teach and spark joy among the students.

Lessons objectives included working with **scratch.mit.edu** in order to demonstrate the following: 
- iterative loops
- conditional statements
- value assignment 
- functions
- object-oriented programming / classes
- Hardware programming using Arduino boards

Additionally, students are encourage to:
- Expose creativity
- Working with other classmates
- Showcase their achievements
- Ask questions

***

### IT Intern Developer | [Martin Digital Group](https://www.martindigitalgroup.com/) | Miami, U.S. | Jan 2014 - April 2015`

- Strengthen relationships with the clients by integrating my technical experience and expertise.
- Fashioned a blog to look like a fitness site for moms and a subscription program.
- Checked logs and malfunctioning errors to avoid conflict with a purchasing process on the website.
- Maintained the network, installation, and use of new software and process.

Tags: online marketing

*** 
### Java II Learning Assistant | [Florida International University CIS Department](https://www.cis.fiu.edu/) | Miami, U.S. | Dec 2015 - May 2016

- Taught on an ongoing process and/or create new projects for college students using Java programming language in a class of twenty students
- Explained Object Oriented Programming concepts during in and out sessions
- Used pair programming with students in order to practice and review material

tags: education

***

# Current about me

## Recommended readings

- [Domain Driven-Design](https://www.amazon.com/gp/product/0321125215?ie=UTF8&tag=martinfowlerc-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0321125215)
- [Working With Legacy Code](https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052)
- [Designing Data-Intensive Applications](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=sr_1_1?crid=393J1ET1HBZB8&dchild=1&keywords=designing+data+intensive+applications&qid=1601994325&s=books&sprefix=designing+data+i%2Cstripbooks%2C162&sr=1-1)
- [Functional Programming - with Swift](https://www.objc.io/books/functional-swift/) 
- [Behavior Driven Development in Action](https://www.amazon.com/BDD-Action-Behavior-driven-development-lifecycle/dp/161729165X/ref=sr_1_1?crid=1QMU5POSX4VUP&dchild=1&keywords=behavior+driven+development&qid=1601994363&s=books&sprefix=behavior+Driven+Deve%2Cstripbooks%2C167&sr=1-1)
- [Server-Side Swift](https://www.google.com/search?client=safari&rls=en&q=vapor.code&ie=UTF-8&oe=UTF-8)
- [A metabolic approach to cancer 📚](https://www.amazon.com/Metabolic-Approach-Cancer-Integrating-Bio-Individualized/dp/1603586865/ref=sr_1_2?crid=K25WDL26D9QF&dchild=1&keywords=a+metabolic+approach+to+cancer&qid=1601994411&sprefix=a+metabolic%2Cstripbooks%2C158&sr=8-2)
- [Geopolitics](https://www.amazon.com/Next-100-Years-Forecast-Century-ebook/dp/B001NLL946/ref=sr_1_1?crid=2DE719JVUJ0NJ&dchild=1&keywords=the+next+100+years+george+friedman&qid=1601994579&sprefix=the+next+100%2Caps%2C160&sr=8-1)
- Urban planning
- [How to Think for yourself](http://paulgraham.com/think.html)
- [Why Books Don't Work](https://andymatuschak.org/books/)
- [Quantum Country](https://quantum.country)

## Lección para tu vida

<blockquote class="twitter-tweet"><p lang="et" dir="ltr">que bueno 🤣🙌🏾 Actitud | Victor Küppers | TEDxAndorralaVella <a href="https://t.co/orerUgfhpo">https://t.co/orerUgfhpo</a> via <a href="https://twitter.com/YouTube?ref_src=twsrc%5Etfw">@YouTube</a></p>&mdash; Idelfonso (@idelfonsoGM) <a href="https://twitter.com/idelfonsoGM/status/1197903846305140738?ref_src=twsrc%5Etfw">November 22, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

***

> From Venezuela 🇻🇪 Bailando 🕺

![Charapin](img/tango_small.jpg)

Photograph by Charapin 🙌🏾

2020, Github Pages