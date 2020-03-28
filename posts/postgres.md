---
title: "Postgres server conf"
description: "traditional post"
date: "2020-03-27"
public: true
---

Here is how to configure a PSQL database on a CentOS 8 server.

## Install from repo

```bash
yum install postgresql-server postgresql-contrib
```

## Getting the thing started

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

You can now switch user...
```bash
sudo su - postgres psql
```
and query :
```sql
SELECT version();
```

To check the result of this initdb, go in /var/lib/pgsql :
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

To start the server as it is, now you can run the latter (adding &), as postgres user, or more commonly, as you are
```bash
systemctl start postgresql && systemctl enable postgresql
```
then checking the first logfile
```
[postgres@egovelox ~]$ ls
backups  data  initdb_postgresql.log  logfile
[postgres@egovelox ~]$ cat logfile
2020-03-28 04:07:51.750 CET [16656] LOG:  listening on IPv6 address "::1", port 5432
2020-03-28 04:07:51.750 CET [16656] LOG:  listening on IPv4 address "127.0.0.1", port 5432
2020-03-28 04:07:51.754 CET [16656] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2020-03-28 04:07:51.762 CET [16656] LOG:  listening on Unix socket "/tmp/.s.PGSQL.5432"
2020-03-28 04:07:51.773 CET [16656] LOG:  redirecting log output to logging collector process
2020-03-28 04:07:51.773 CET [16656] HINT:  Future log output will appear in directory "log".
```
## Configure the server

CentOS 8, in my case, provided firewalld by default. So first of all, open PSQL default port (5432) : 

```bash
sudo firewalld-cmd --zone=public --permanent --add-port 5432/tcp 
sudo firewall-cmd --reload
```



