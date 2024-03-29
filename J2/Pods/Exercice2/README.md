## Description
In this hands-on lab, you will be presented with a three worker node. 
You will be responsible for splitting up the three worker nodes and making: one of the worker nodes a production (prod) environment node.
The purpose of identifying the production type is to not accidentally deploy pods into the production environment. You will use taints and tolerations to achieve this, and then you will deploy two pods: One pod will be scheduled to the dev environment, and one pod will be scheduled to the prod environment.

## Taint one of the worker nodes to repel work.

# Get list nodes
```
kubectl get node
```
# Choose one node and taint it
```
kubectl taint node <node_name> node-type=prod:NoSchedule
```

# Verify the taint is ok 
```
kubectl describe nodes <node_name>
```
## Schedule a pod to the dev environment.

# Create a yaml file containing the pod spec and a DEV Taint Tolerance
```
apiVersion: v1
kind: Pod
metadata:
 name: dev-pod
 labels:
   app: busybox
spec:
 containers:
 - name: dev
   image: busybox
   command: ['sh', '-c', 'echo Hello Kubernetes! && sleep 3600']
 tolerations:
 - key: node-type
   operator: Equal
   value: dev
   effect: NoSchedule
```

# Create the pod
```
kubectl create -f dev-pod-busybox.yml
```
# Verify
```
kubectl get pod -o wide
```
## Allow a pod to be scheduled to the prod environment.
# Create a yaml file containing the pod spec and a Production Taint Tolerance
```
apiVersion: v1
kind: Pod
metadata:
 name: prod-pod
 labels:
   app: busybox
spec:
 containers:
 - name: prod
   image: busybox
   args:
    - sleep
    - "3600"
   command: ['sh', '-c', 'echo Hello Kubernetes! && sleep 3600']
 tolerations:
    - key: node-type
       operator: Equal
       value: prod
       effect: NoSchedule
```

## Create a yaml file containing the pod spec 
```
kubectl create -f prod-deployment.yml
```
## Verify each pod has been scheduled and verify the toleration.
```
kubectl get pods -o wide
kubectl get pods <pod_name> -o yaml
```
## Remove Taint
```
kubectl taint nodes <node_name> node-type-
```
