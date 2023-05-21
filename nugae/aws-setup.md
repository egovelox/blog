---
title: "AWS connection with AWS-vault"
description: "traditional post"
date: "2021-05-22"
public: true
---

Usually we use ```aws configure``` to connect to Amazon via aws-CLI. But entering Access Key Id and Secret key, or storing them in bash variable or file, is not completely safe nore handy. 

That's why we want to connect to AWS using another CLI tool: ```aws-vault```.

### Requirements

an AWS IAM user, with programmatic access and with Admin permissions and MFA custom policy.
[https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html)

### Install and set up

Install aws-vault (with brew on MacOS), and then :

```bash
aws-vault --version
aws-vault add [AWS-iam-user]  // will let you enter you AcessKey params
```

You then have to set up your aws config file :
```bash
vim ~/.aws/config
[profile myIamUser]
region=use-west-3
mfa_serial=arn... // if MFA, this can be found via the AWS console.
```

### Connect with aws-vault

The following command should log you in AWS (duration is set up to the maximum)
```bash
aws-vault exec myIamUser --duration=12h
```

Once we are done, we can test AWS-CLI
```bash
aws s3 ls
```

### Monitor and Log out

```bash
aws-vault list

aws-vault clear [myIamUser]
```
