Simplest Next.js 15 and Docker implementation.

## Prerequisites

- Install [Docker](https://docs.docker.com/get-docker/)
- Install [Kubectl](https://kubernetes.io/docs/tasks/tools/) 
- Install [Minikube](https://minikube.sigs.k8s.io/docs/start/)

## Commands

### Docker

#### Build, tag and push Docker image

```bash
docker build -t docker-nextjs-app .
```

```bash
docker tag docker-nextjs-app yourusername/docker-nextjs-app:1.0
```

```bash
docker push yourusername/docker-nextjs-app:latest
```

#### Run Docker container

```bash
docker run -p 3000:3000 yourusername/docker-nextjs-app:latest
```

### Kubernetes

#### Start local cluster with Minikube

```bash
minikube start
```

#### Check the status of the Minikube cluster

```bash
kubectl get nodes
```

```bash
kubectl get pods -A
```

#### Create a deployment for the Next.js app

```bash
kubectl apply -f docker-nextjs-app-deployment.yaml
```

```bash
kubectl get deployments
```

#### Logs

```bash
kubectl logs -l app=docker-nextjs-app
```

#### Delete pod

```bash
kubectl delete pod docker-nextjs-app
```

#### Expose the deployment

```bash
kubectl port-forward deployment/docker-nextjs-app-deployment 3000:3000
```

#### Pull image after changes

```bash
kubectl rollout restart deployment/docker-nextjs-app-deployment
```

#### Run the app

```bash
kubectl run docker-nextjs-app --image=yourusername/docker-nextjs-app:latest --port=3000
```

#### Access the app locally with load balancer

```bash
minikube tunnel
```

#### Get IP address of the service

```bash
kubectl get svc
```
