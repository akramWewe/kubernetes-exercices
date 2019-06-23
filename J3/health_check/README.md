## Healthcheck Demo Workflow
Nous explorons la haute disponibilité d'un déploiement kubnernetes avec un Readiness/Liveness


### Executer le déploiement du service / healthy déployment  

kubectl apply -f healthcheck/service.yaml
kubectl apply -f healthcheck/healthy-deployment.yaml

### Affichage des pods

kubectl get pods -o wide

You should now see something like this

### Affichage du Site 

kubectl get services

### Utilisé le déploiement qui est en echec
kubectl apply -f examples/healthcheck/broken-deployment.yaml


### Qu'est ce qui s'affit en warning ?


### Raffraichis la webapp 
Toujours "version 1.0 qui s'affiche" 

### Nettoyage
Suppression du service et déploiement

kubectl delete -f examples/healthcheck/service.yaml
kubectl delete -f examples/healthcheck/broken-deployment.yaml