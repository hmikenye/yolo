//containerization explanation
## 1. base image choice 
use node:14-slim for node.js app beacause of lightweight and optimized for production.
useofficial mongo db for image database.
## 2. Dockerfile Directives
- `FROM`, `WORKDIR`, `COPY`, `RUN`, `EXPOSE`, and `CMD` used to set up the container environment for the backend.
## 3.docker compose networking
define a bridge  network ecommerse-net
used internal container mongo  to establish  service communication.
## 4.volumes
momgodb data is stored in aname volume mongo-data to ensure data persistence.
- Backend source is mounted for live dev updates.
## 5. Git Workflow
- Used feature branching, frequent commits with clear messages.
- Final code pushed to a `main` branch for deployment.

## 6. Debugging Measures
- Logs checked with `docker logs`.
- Used `docker exec -it` for inside-container debugging.

## 7. Docker Tag Naming
- Followed `<username>/<project-name>:<version>` pattern for clarity (e.g., "mikenyehenry/yolo:v3.0.0").
## 8 github push
git add .
git commit "conternirized ecommerce app with mongodb.
pushorigin main
## 9 dockerhub screenshot
screenshot showing image 
## 10 server.js
changed line of code in serverjs to listen to mongodb.