---
title: "Bootstrap K8s env for nodeJS dev"
description: "traditional post"
date: "2021-03-20"
public: false
---

### Intro

Here we want to remember a way to set up a k8s development env for nodeJS, using
1. Kubectl
2. Minikube (with docker driver)
3. Skaffold


### directory tree

```bash
-my_project
    node_modules
    src
        index.ts
        middlewares
        controllers
        services
    _infra
        k8s
            auth-depl.yaml
            auth-srv.yaml
    skaffold.yaml
    Dockerfile
    .dockerignore
    .gitignore
    package.json
    tsconfig.json
```

### kubectl install

We can actually now use kubectl inside minikube (using a bash alias), but it better to follow the old-school way, installing kubectl separately.

Caveat : the version of the k8s cluster installed inside minikube must be at most 1 minor version behind the version of kubectl we now install on ourselves.

Here is an install of kubectl for version 1.20.0:

```bash
curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.20.0/bin/linux/amd64/kubectl

chmod +x ./kubectl

sudo mv ./kubectl /usr/local/bin/kubectl

kubectl version --client

```

On MacOS you can simply ```brew install kubectl```

### minikube install
https://minikube.sigs.k8s.io/docs/start/

This is for Linux : 

```bash
 curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
 sudo install minikube-linux-amd64 /usr/local/bin/minikube

 minikube start
 kubectl get pods -A

 // OR
 minikube kubectl -- get po -A

```

Remember, to enable the NGINX Ingress controller 
(this can take up to a minute)

```bash
minikube addons enable ingress

kubectl get pods -n kube-system
```

### skaffold install
https://skaffold.dev/docs/install/

```bash
curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64 && \
sudo install skaffold /usr/local/bin/

skaffold version
```