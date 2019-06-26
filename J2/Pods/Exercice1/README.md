# Créer un fichier yaml permettant de créer un pod nginx:

```
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    env: development

spec:
  containers:
  - name: nginx
    image: nginx
    command: ["nginx"]
    args: ["-g", "daemon off;", "-q"]
    ports:
    - containerPort: 80
```

# Création d'un pod.
```
kubectl create -f nginx.yml
```

# Lister les pods lancés et voir les états des pods
kubectl get pods

# Se mettre au niveau du conteneur nginx:
kubectl exec -it nginx -- /bin/bash

# Au niveau du shell, lister les dossiers au niveau du dossier root:
ls -l

# Créer un fichier.html contenant un texte "Hello shell demo" et le copier au niveau du /usr/share/nginx/html/
echo Hello shell demo > /usr/share/nginx/html/index.html

# Installer Curl
apt-get update
apt-get install -Y curl

# Tester nginx et hello page
curl localhost

# Quitter le conteneur et supprimer le pod:
kubectl delete pod nginx
