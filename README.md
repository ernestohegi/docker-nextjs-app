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

#### Commands

```bash
kubectl get nodes
```

```bash
kubectl get pods -A
```

```bash
kubectl apply -f docker-nextjs-app-deployment.yaml
```

```bash
