---
title: "Postgres server conf"
description: "traditional post"
date: "2020-03-27"
public: true
---

Here is how to configure a PSQL database on a CentOS server.

```bash
yum install postgresql-server postgresql-contrib
```

The first time you run, you'll get an error

```bash
sudo systemctl start postgresql
```

```bash
 Directory "/var/lib/pgsql/data" is missing or empty.
 Use "/usr/bin/postgresql-setup --initdb"
 to initialize the database cluster.
```
This can be explained : a script was run during the install, and, among other tasks created a /var/lib/pgsql owned by the user postgres.

Though it did not create a cluster (an instance of PSQL allows you to manage multiple databases in a what is called a cluster), and that's why the pgsql/data folder is still empty.

So first run
```bash
sudo service postgresql initdb
```

You can switch user...
```bash
sudo su postgres
```

and check the result in /var/lib/pgsql :
```bash
[postgres@cuncext ~]$ ls
backups  data  initdb_postgresql.log
[postgres@cuncext ~]$ cat initdb_postgresql.log
The files belonging to this database system will be owned by user "postgres".
This user must also own the server process.

The database cluster will be initialized with locale "en_US.UTF-8".
The default database encoding has accordingly been set to "UTF8".
The default text search configuration will be set to "english".

Data page checksums are disabled.

fixing permissions on existing directory /var/lib/pgsql/data ... ok
creating subdirectories ... ok
selecting default max_connections ... 100
selecting default shared_buffers ... 128MB
selecting dynamic shared memory implementation ... posix
creating configuration files ... ok
running bootstrap script ... ok
performing post-bootstrap initialization ... ok
syncing data to disk ... ok

Success. You can now start the database server using:

    /usr/bin/pg_ctl -D /var/lib/pgsql/data -l logfile start

```
