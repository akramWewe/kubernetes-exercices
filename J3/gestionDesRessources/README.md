# Création d'un namespace

```
kubectl create namespace default-resources-config
```

# Création des limites cpu et memoire par défaut

```
apiVersion: v1
kind: LimitRange
metadata:
  name: default-requests-and-limits
spec:
  limits:
  - default:
      memory: 512Mi
      cpu: 0.8
    defaultRequest:
      memory: 256Mi
      cpu: 0.4
    type: Container
```
```
kubectl create -f limit-range-1.yaml --namespace=default-resources-config
```

## https://supergiant.io/blog/managing-memory-and-cpu-resources-for-kubernetes-namespaces/


