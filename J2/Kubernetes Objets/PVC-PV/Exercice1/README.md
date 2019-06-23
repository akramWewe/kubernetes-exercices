# CREATE A PV

kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: task-pv-claim
spec:
  storageClassName: manual
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 3Gi


# View information about the PersistentVolume:

kubectl get pv task-pv-volume

# Create a PersistentVolumeClaim
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: task-pv-claim
spec:
  storageClassName: manual
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 3Gi

#Look again at the PersistentVolume: // What's the difference ?
kubectl get pv task-pv-volume

#create a Pod that uses your PersistentVolumeClaim as a volume.

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


kubectl apply -f pv-pod.yaml --validate=false

# Get a shell to the Container running in your Pod:

kubectl exec -it task-pv-pod -- /bin/bash

# Install curl and vim
apt-get update
apt-get install curl vim
curl localhost

# Add an index.html with "Hello TRAINING" in /usr/share/nginx/html.
curl localhost

## delete and restart po
index.html will be deleted ?



