# Sample API Apps
## Introduction    
This repository contains several applications that behave as simple API servers. The goal is to have these applications containerised (e.g. inside a _Dockerfile_). These container images will then be stored in a registry (private or public) and then tested inside Kubernetes pods. The ultimate goal is to test if the endpoints of these applications can be reached from outside the Kubernetes cluster.

### fastify-api-app
A **Fastify** application that has a few CRUD endpoints involving book objects. Error validation is at a minimum. This application is only to be used for testing the api endpoints after the application is up and running inside a Kubernetes cluster.   
