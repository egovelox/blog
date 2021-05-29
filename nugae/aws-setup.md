---
title: "AWS basics"
description: "traditional post"
date: "2021-05-22"
public: false
---

## Use AWS-vault
Requirements : 
1. an AWS IAM user, wit programmatic access and with Admin permissions and MFA custom policy.
https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html

2. Set up an Access Key

    
    Install aws-vault (with brew on MacOS).

    ```bash
    aws-vault --version
    aws-vault add [AWS-iam-user]  // will let you enter you AcessKey params

    vim ~/.aws/config
    [profile myIamUser]
    region=use-east-1 // this is the AWS most basic region, you can change it.
    mfa_serial=arn... // found via the AWS console.

    ```

3. Test your aws-vault

    ```bash
    aws-vault exec myIamUSer --duration=12h
    ```