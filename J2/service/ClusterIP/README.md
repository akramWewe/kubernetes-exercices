# Créer un deployment hello-app
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
spec:
  selector:
    matchLabels:
      app: metrics
      department: sales
  replicas: 3
  template:
    metadata:
      labels:
        app: metrics
        department: sales
    spec:
      containers:
      - name: hello
        image: "gcr.io/google-samples/hello-app:2.0"
```

# Créer un service de type ClusterIP
```
apiVersion: v1
kind: Service
metadata:
  name: my-cip-service
spec:
  type: ClusterIP
  selector:
    app: metrics
    department: sales
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
```

# Vérifier la création du deployment et le service

# Determiner le CLUSTER IP ( attendre un certain temps )
```
kubectl get service my-cip-service --output yaml
```
# Accéder au service
```
curl [CLUSTER_IP]:80
```
