
# Voir le StorageClass
kubectl get storageClass
kubectl describle storageClass [name storageClass]

# Persistent Volume Claim
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: task-pv-claim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi

kubectl apply -f pv-claim.yaml

#Voir le PV créer automatiquement
kubectl get pv

#Creation d'un Pod utilisant le Persistent Volument Claim

kind: Pod
apiVersion: v1
metadata:
  name: task-pv-pod
spec:
  volumes:
    - name: task-pv-storage
      persistentVolumeClaim:
       claimName: task-pv-claim
  containers:
    - name: task-pv-container
      image: nginx
      ports:
        - containerPort: 80
          name: "http-server"
      volumeMounts:
        - mountPath: "/usr/share/nginx/html"
          name: task-pv-storage


kubectl apply -f pv-pod.yaml



