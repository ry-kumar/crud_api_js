# CRUD API Node.js

A production-ready **CRUD API** built with Node.js, following best practices for **DevOps and Kubernetes deployment**.

---

## Features
- Layered architecture: Controllers → Services → Validators
- Input validation using **Zod**
- Centralized error handling
- RESTful API with consistent responses
- Pagination support
- Containerized with **Docker** (multi-stage build, non-root user)
- Kubernetes-ready:
  - Deployment
  - Service (ClusterIP)
  - Horizontal Pod Autoscaler (HPA)
  - Liveness & readiness probes
- CI/CD ready project structure

---

## API Endpoints

| Method | Endpoint           | Description        |
|--------|------------------|------------------|
| POST   | /api/v1/items     | Create a new item |
| GET    | /api/v1/items     | Get all items (supports `?page=` & `?limit=`) |
| GET    | /api/v1/items/:id | Get single item   |
| PUT    | /api/v1/items/:id | Update item       |
| DELETE | /api/v1/items/:id | Delete item       |
| GET    | /health           | Health check endpoint |

---

## Setup

1. Clone the repository:
```bash
git clone https://github.com/ry-kumar/crud_api_js.git
cd crud_api_js
```

2. Install dependencies:
```
npm install
```

3. Configure environment variables:
```
cp .env.example .env
```

4. Start locally:
```
node server.js
```

# Docker

Build Docker image:
```
docker build -t crud-api .
```

Run container:
```
docker run -p 3000:3000 crud-api
```

# Kubernetes Deployment

Apply manifests:

```
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/hpa.yaml
```

Check pods:

```
kubectl get pods
kubectl get hpa
```
