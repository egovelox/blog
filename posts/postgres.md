---
title: "Postgres server conf"
description: "traditional post"
date: "2020-03-27"
public: true
---

Here is how to configure a PSQL instance on a **CentOS 8** server.

## Install from repo

```bash
yum install postgresql-server postgresql-contrib
```

## Getting the thing started

The first time you will try to run postgresql, **you'll get an error !!**

```bash
sudo service postgresql start
```

```bash
 Directory "/var/lib/pgsql/data" is missing or empty.
 Use "/usr/bin/postgresql-setup --initdb"
 to initialize the database cluster.
```
The reason for this ? A script was run during the install, and, among other tasks, **it created a directory /var/lib/pgsql owned by the user postgres**.

It did not create a cluster though - a single instance of PSQL allows you to manage multiple databases in a so-called cluster - and that's why the /var/lib/pgsql/data folder is still empty.

So at first, always issue this command as sudo :
```bash
service postgresql initdb
```

You can now switch user and get directly the psql command-line...
```bash
sudo su - postgres psql
```
You can issue the query :
```sql
SELECT version();
```

and this other : 
```sql
SELECT * FROM pg_roles;
```
You're in. Now be safe, just **add a password for the postgres user** :

```sql
ALTER USER postgres PASSWORD 'myPassword';
```

Let's quit psql (issue command \q) and now check the result of **this init process**. Go in /var/lib/pgsql :
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

To start the PGSQL server, now you can either : 

1. as user postgres, run the latter (adding &) 
2. or just prefer, from your normal account :
```bash
sudo systemctl start postgresql && systemctl enable postgresql
```

Fell free to check the "newborn" logfile in /var/lib/pgsql
```bash
[postgres@egovelox ~]$ ls
backups  data  initdb_postgresql.log  logfile
[postgres@egovelox ~]$ cat logfile
2020-03-27 04:07:51.750 CET [16656] LOG:  listening on IPv6 address "::1", port 5432
2020-03-27 04:07:51.750 CET [16656] LOG:  listening on IPv4 address "127.0.0.1", port 5432
2020-03-27 04:07:51.754 CET [16656] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2020-03-27 04:07:51.762 CET [16656] LOG:  listening on Unix socket "/tmp/.s.PGSQL.5432"
2020-03-27 04:07:51.773 CET [16656] LOG:  redirecting log output to logging collector process
2020-03-27 04:07:51.773 CET [16656] HINT:  Future log output will appear in directory "log".
```
## Configure the server

My version of CentOS 8 (but note that it might not always be so) provided **firewalld** by default. So first of all,open PSQL default port (**5432**) : 

```bash
sudo firewalld-cmd --zone=public --permanent --add-port 5432/tcp 
sudo firewall-cmd --reload
```

Now we need to configure how PGSQL allows local or distant connections to databases. Two files are needed here, in the **PGSQL instance directory /var/lib/pgsql/data/** : 

1. **postgresql.conf**
2. **pg_hba.conf** (host-based-authentication)

First in postgresql.conf, change the directive listen_addresses like this :
```bash
listen_addresses = '*'                  # what IP address(es) to listen on;
                                        # comma-separated list of addresses;
                                        # defaults to 'localhost'; use '*' for all
                                        # (change requires restart)
```

Be aware, **here PGSQL needs a restart** : 

```bash
sudo systemctl restart postgresql
```


Let's now assume that our machine runs behind a router, with a static address.
Here, using 0.0.0.0/0, PGSQL instance should be able to get a dialog with any machine from the outside, 

1. on all databases, 
2. as long as the user is postgres 
3. and password is valid (we use md5 to encrypt it along the wire).

```bash
# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     peer
# IPv4 local connections:
host    all             all             127.0.0.1/32            ident
host    all             postgres        0.0.0.0/0               md5
# IPv6 local connections:
host    all             all             ::1/128                 ident
# Allow replication connections from localhost, by a user with the
# replication privilege.
local   replication     all                                     peer
host    replication     all             127.0.0.1/32            md5
host    replication     all             ::1/128                 md5
```

Be aware, **here PGSQL needs a reload** : 
```bash
sudo systemctl reload postgresql
```

**And its'all done** (for the 'basics' of course) ! 

Choose safety, in your router map a different port to 5432. Now you'll get remote access to your databases with the following parameters : 

```bash
user: postgres
passwd : the pass you chose
address : your public IP
port : the port you chose
database : a default one is postgres
```




