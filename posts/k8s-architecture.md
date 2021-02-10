---
title: "k8s architecture"
description: "devops post"
date: "2021-02-04"
public: false
---

```yaml

apiVersion:
kind:
metadata:
    name: event-bus-depl
spec:
    replicas: 1
    selector: # selector entry. 
              # Get a memo: 
              #  SPEC ? Robin Se met Tres mal le soir
              # for replicas/selector/template
        matchLabels:
            app: event-bus
    template:
        metadata:
            labels:
                app: event-bus # key: value
        spec:
            containers:
                - name: event-bus
                  image: egovelox/event-bus # latest

---
# From another pod, you will request the above pod, at http://event-bus-srv:4005
apiVersion: v1
kind: Service
metadata:
    name: event-bus-srv
spec:
    selector:
        app: event-bus
    ports: 
        - name: event-bus
          protocol: TCP
          port: 4005
          targetPort: 4005

```








