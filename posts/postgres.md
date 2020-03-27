---
title: "Postgres server conf"
description: "traditional post"
date: "2020-01-22"
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
/var/lib/pgsql/data is missing. Use "service postgresql initdb" to initialize the cluster first.
[FAILED]
```