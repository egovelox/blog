---
title: "Postgres server conf"
description: "traditional post"
date: "2020-03-27"
public: true
---

Here is how to configure a PSQL database on a CentOS server.

## Install from repo

```bash
yum install postgresql-server postgresql-contrib
```

## Start configuration

The first time you will try to run postgresql, you'll get an error !!

```bash
sudo service postgresql start
```

```bash
 Directory "/var/lib/pgsql/data" is missing or empty.
 Use "/usr/bin/postgresql-setup --initdb"
 to initialize the database cluster.
```
This can be explained : a script was run during the install, and, among other tasks created a /var/lib/pgsql owned by the user postgres.

Though it did not create a cluster - an instance of PSQL allows you to manage multiple databases in a so-called cluster - and that's why the /var/lib/pgsql/data folder is still empty.

So first issue the command as sudo :
```bash
service postgresql initdb
```

You will then have to switch user...
```bash
sudo su - postgres
```

to be able to check the result in /var/lib/pgsql :
```bash
[postgres@egovelox ~]$ ls
backups  data  initdb_postgresql.log

[postgres@egovelox ~]$ cat initdb_postgresql.log
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
