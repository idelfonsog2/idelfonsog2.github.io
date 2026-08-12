# Graph Report - .  (2026-08-12)

## Corpus Check
- Large corpus: 151 files · ~1,572,453 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 170 nodes · 160 edges · 24 communities (18 shown, 6 thin omitted)
- Extraction: 95% EXTRACTED · 4% INFERRED · 1% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.81)
- Token cost: 87,733 input · 0 output

## Community Hubs (Navigation)
- Bio, Employers & Education
- NPM Package Scripts
- TypeScript Config
- Renovate Bot Config
- Frontend Dev Dependencies
- Spark Data Lake ETL
- Cassandra ETL Pipeline
- Vue Portfolio Components
- Redshift Data Warehouse
- Data Engineering Nanodegree Concepts
- Swift AWS Lambda CI/CD
- iOS DevOps Pipeline
- BDD Testing (Cucumberish)
- Swift Concurrency & Sign in with Apple
- Agent-Aware Worker Routing
- Vite SPA Entry Point
- Swift Distributed Actors
- Recent Posts Component
- Hero World Copy
- iOS Cert Install

## God Nodes (most connected - your core abstractions)
1. `Idelfonso Gutierrez` - 14 edges
2. `compilerOptions` - 10 edges
3. `scripts` - 8 edges
4. `Data Warehouse with AWS Redshift (Project)` - 6 edges
5. `SparkSession (sparkify app)` - 6 edges
6. `include` - 5 edges
7. `Udacity Data Engineer Nanodegree` - 5 edges
8. `Data Lakes with Apache Spark + EMR Cluster (Project)` - 5 edges
9. `music_app_history Keyspace` - 5 edges
10. `ignorePaths` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Resume PDF Link` --references--> `Resume US (PDF)`  [EXTRACTED]
  README.md → resources/resume_us.pdf
- `idelfonsog2.github.io Jekyll Site Config` --references--> `Idelfonso Gutierrez`  [EXTRACTED]
  _config.yml → README.md
- `Cassandra ETL Pipeline Notebook (PDF)` --references--> `Cassandra ETL Pipeline Notebook (HTML)`  [INFERRED]
  notebooks/cassandra-etl-pipeline.pdf → notebooks/cassandra-etl-pipeline.html
- `Data Lake Jupyter Notebook Link` --references--> `Data Lake ETL Notebook (data_lake.md)`  [EXTRACTED]
  README.md → resources/data_lake.md
- `Data Warehouse Jupyter Notebook Link` --references--> `Data Warehouse Redshift Provisioning Notebook (data_warehouse.md)`  [EXTRACTED]
  README.md → resources/data_warehouse.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Udacity Data Engineer Nanodegree Capstone Projects** — readme_apache_airflow_dag, readme_data_lakes_spark_emr, readme_data_warehouse_redshift, readme_cassandra_etl_project, readme_postgresql_data_modeling [EXTRACTED 1.00]
- **Cassandra Query-First Denormalized Tables for Music App Analytics** — notebooks_cassandra_etl_pipeline_song_session_table, notebooks_cassandra_etl_pipeline_song_info_session_table, notebooks_cassandra_etl_pipeline_song_playlist_session_table, notebooks_cassandra_etl_pipeline_user_song_history_table [INFERRED 0.85]
- **Data Lake Star-Schema Fact/Dimension Tables (Sparkify)** — resources_data_lake_songs_table, resources_data_lake_artist_table, resources_data_lake_users_table, resources_data_lake_time_table, resources_data_lake_songplay_table [INFERRED 0.85]

## Communities (24 total, 6 thin omitted)

### Community 0 - "Bio, Employers & Education"
Cohesion: 0.08
Nodes (24): Jekyll Remote Theme, idelfonsog2.github.io Jekyll Site Config, Resume US (Public Copy, PDF), Ally's Flower (Client), AWS Lambda with Swift Runtime Article, CoderDojo (Volunteering), Firebase Realtime Database, Florida International University CIS Department (+16 more)

### Community 1 - "NPM Package Scripts"
Cohesion: 0.11
Nodes (17): @mdi/font, dependencies, @mdi/font, vue, vuetify, name, private, scripts (+9 more)

### Community 2 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): DOM, ES2022, src/**/*.ts, src/**/*.vue, vite.config.ts, worker-configuration.d.ts, compilerOptions, jsx (+9 more)

### Community 3 - "Renovate Bot Config"
Cohesion: 0.12
Nodes (15): **/_*/**, before 6am on Monday, config:recommended, dependencies, **/notebooks/**, npm, **/resources/**, enabledManagers (+7 more)

### Community 4 - "Frontend Dev Dependencies"
Cohesion: 0.15
Nodes (13): devDependencies, @playwright/test, typescript, vite, vite-plugin-vuetify, @vitejs/plugin-vue, wrangler, @playwright/test (+5 more)

### Community 5 - "Spark Data Lake ETL"
Cohesion: 0.21
Nodes (12): Data Lake ETL Notebook (Public Copy, data_lake.md), Wrangling Data with Spark Notebook (Public Copy, wrangling_data_spark.html), Data Lake Jupyter Notebook Link, artist_table DataFrame, get_timestamp UDF, Data Lake ETL Notebook (data_lake.md), songplay_table DataFrame, songs_table DataFrame (+4 more)

### Community 6 - "Cassandra ETL Pipeline"
Cohesion: 0.22
Nodes (11): event_datafile_new.csv, music_app_history Keyspace, Cassandra ETL Pipeline Notebook (HTML), Cassandra ETL Pipeline Notebook (PDF), song_info_session Table, song_playlist_session Table, song_session Table, user_song_history Table (+3 more)

### Community 7 - "Vue Portfolio Components"
Cohesion: 0.18
Nodes (5): faqs, pills, superpowers, logos, vuetify

### Community 8 - "Redshift Data Warehouse"
Cohesion: 0.25
Nodes (9): Data Warehouse Redshift Provisioning Notebook (Public Copy, data_warehouse.md), Data Warehouse Jupyter Notebook Link, dwhRole IAM Role, Data Warehouse Redshift Provisioning Notebook (data_warehouse.md), prettyRedshiftProps Function, dwhcluster (Redshift Cluster), sparkifydb Database, sql_queries Module (create_table_queries, drop_table_queries) (+1 more)

### Community 9 - "Data Engineering Nanodegree Concepts"
Cohesion: 0.31
Nodes (9): Data Pipelines with Apache Airflow (DAG Project), Creating an ETL process with Apache Cassandra (Project), Data Lakes with Apache Spark + EMR Cluster (Project), Data Warehouse with AWS Redshift (Project), ELT Pattern, Data Modeling with PostgreSQL (Project), Schema-on-Read, Star Schema (+1 more)

### Community 10 - "Swift AWS Lambda CI/CD"
Cohesion: 0.50
Nodes (4): AWS Serverless Application Model (SAM), GitHub Actions with AWS OIDC, PushNotificationHandler (Lambda), CI/CD for Swift AWS Lambda on M1 SoC

### Community 11 - "iOS DevOps Pipeline"
Cohesion: 0.50
Nodes (4): CI/CD Pipeline, DevOps: YAML & Bash Scripting Article, fastlane, XCode Cloud

### Community 12 - "BDD Testing (Cucumberish)"
Cohesion: 1.00
Nodes (3): Behavior Driven Development, Cucumberish (BDD Library), Gherkin Syntax

### Community 13 - "Swift Concurrency & Sign in with Apple"
Cohesion: 0.67
Nodes (3): Bridging completionHandler(_:) and async/await, SignInWithAppleService, Swift Checked Continuations

## Ambiguous Edges - Review These
- `dwhcluster (Redshift Cluster)` → `prettyRedshiftProps Function`  [AMBIGUOUS]
  resources/data_warehouse.md · relation: calls

## Knowledge Gaps
- **88 isolated node(s):** `name`, `private`, `dev`, `build`, `preview` (+83 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `dwhcluster (Redshift Cluster)` and `prettyRedshiftProps Function`?**
  _Edge tagged AMBIGUOUS (relation: calls) - confidence is low._
- **Why does `Data Warehouse with AWS Redshift (Project)` connect `Data Engineering Nanodegree Concepts` to `Redshift Data Warehouse`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `Data Lakes with Apache Spark + EMR Cluster (Project)` connect `Data Engineering Nanodegree Concepts` to `Spark Data Lake ETL`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Why does `Creating an ETL process with Apache Cassandra (Project)` connect `Data Engineering Nanodegree Concepts` to `Cassandra ETL Pipeline`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Data Warehouse with AWS Redshift (Project)` (e.g. with `Creating an ETL process with Apache Cassandra (Project)` and `Data Modeling with PostgreSQL (Project)`) actually correct?**
  _`Data Warehouse with AWS Redshift (Project)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `private`, `dev` to the rest of the system?**
  _88 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Bio, Employers & Education` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._