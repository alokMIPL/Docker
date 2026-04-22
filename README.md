## what Is Docker?

Virtualization software

Makes developing and deploying applications much easier

Packages application with all the necessary dependencies,
configuration, system tools and runtime

A standardized unit, that has everything the application needs to run.

Potable artifact, easily shared and distributed.

## What problem Docker solves?

### Development process before containers?
Each developer needs to install and configure all services directly on their OS on their local machine.

Installation process different for each OS envirmnment
Many steps, where something can go wrong.

### Developers process with containers?

Own isolated envirenment
Postgres package with all dependencies and configs

Start service as a Docker container using a 1 Docker command

Command same for all OS
Command same for all services
Standardizes process of running any services on any local dev environment
Easy to run different versionds of same app without any conflicts.

### Deployment process before containers?
Artifact and instructions handed over to Ops team
Ops team handles installing and configuring apps and its dependencies

### Problem before containers
Installations and configurations done directly on the server's OS.
Dependency version conflicts etc.

### Deployment process with containers
Instead of textual, everything is packages inside the Dokcer artifact.
No confirgurations needed on the server (except Docker runtime)
Less room for errors.

Install Docker runtime on the server.
Run Docker command to fetch and run the Docker artifacts.

## Virtual Machine vs Docker
1. Why is Docker so widely used?
2. What advantages does it have over Virtual Machines?
3. What is the differences?

#### How does Docker run its containers?
#### How an OS is made up
<img width="761" height="427" alt="image" src="https://github.com/user-attachments/assets/d8cae75f-293d-4b84-98af-0718776fb5b1" />

<img width="788" height="428" alt="image" src="https://github.com/user-attachments/assets/f08cd8e0-3bee-4cdf-a312-8bf6011db54b" />

### What parts of the OS do they virtualize.
#### Docker virtualize OS Applications Layer
#### Virtual Machine virtualize OS Applications Layer and has own OS Kernal
<img width="766" height="425" alt="image" src="https://github.com/user-attachments/assets/257eb7a6-84e7-44e0-9c72-b5290989e251" />

<img width="705" height="441" alt="image" src="https://github.com/user-attachments/assets/a881877c-39da-420c-ae36-c682380adf4d" />

### What affects has this difference?
<img width="814" height="398" alt="image" src="https://github.com/user-attachments/assets/b05d6884-2a0d-4ced-804f-f9c09941932f" />

##### Docker
1. Docker images, couple of MB
2. Containers take seconds to start
3. Compatible only with Linux distros

##### Virtual Machine
1. VM images, couple of GB
2. VMs take minutes to start
3. VM is compatible with all OS

## Docker Images vs Docker Containers
<img width="648" height="315" alt="image" src="https://github.com/user-attachments/assets/75702f23-6076-4d91-9709-23e32b8f924b" />

Can be easily shared and moved
Like a zip or tarfile or jar file
Artifact Repository

The file or Artifact that we produced is called Docker Image.

1. An executable application artifact.
2. Includes app source code, but also complete environment configuration.
3. Add environment variables, create directories, files etc.

<img width="717" height="459" alt="image" src="https://github.com/user-attachments/assets/1c1783f4-76ea-48ff-ac5f-05bfcb4f536c" />

<img width="904" height="346" alt="image" src="https://github.com/user-attachments/assets/83dc6d78-d92b-4d3c-a702-f59bcce01cda" />

We can run multiple containers from 1 image

### Docker Registries

1. A storage and distribution system for Docker images.
2. Official images available from applications like Redis, Mongo, Postgres etc.
3. Official images are maintained by the software authors or in collaboration with the Docker community.
4. Docker hosts one of the biggest DOcker Registry, called "Docker Hub".

### Docker Official Images

1. A dedicated team responsible for reviewing and publishing all content in the Docker Official Images repositories.
2. Works in collaboration with software maintainers, security experts.
3. However anyone can participate as collaboration takes place openly on GitHub.

###  Image Versioning
<img width="811" height="463" alt="image" src="https://github.com/user-attachments/assets/ea8d1a64-c713-4562-b3d4-2095a276266d" />

1. Docker images are versioned.
2. Different versions are identified by tags.

### How to PULL Docker Image
> **Command ```docker pull nginx:1.23```**

<img width="927" height="509" alt="image" src="https://github.com/user-attachments/assets/ee6d0fe1-f663-4052-9c3b-c7482b5b072e" />

Without any specific version it pull latest image
> **command ``` docker pull nginx ```**

<img width="939" height="290" alt="image" src="https://github.com/user-attachments/assets/5205fa94-7dcd-4729-936c-46285048bad2" />

To get all Docker image
> **command** ``` docker images ```
```
PS C:\Users\ALOK> docker images
i Info →   U  In Use
IMAGE                                       ID             DISK USAGE   CONTENT SIZE   EXTRA
fct-support/drupal:prod                     f707ca06a52e       1.31GB          279MB    U
fct-support/nextjs:prod                     cb5199a89b21        276MB         68.5MB    U
gov-report-as-full-nextjs-frontend:latest   edfd5b812c5e       2.21GB          519MB    U
gov-report-as-full-rails-backend:latest     d031dd055ed2          1GB          266MB    U
postgres:16-alpine                          20edbde7749f        395MB          111MB    U
PS C:\Users\ALOK>
```

To get all Docker Container
> **command** ``` docker ps ```

```
PS C:\Users\ALOK> docker ps
CONTAINER ID   IMAGE                     COMMAND                  CREATED          STATUS          PORTS                      NAMES
6aaf01a5df18   fct-support/nextjs:prod   "docker-entrypoint.s…"   15 minutes ago   Up 15 minutes   127.0.0.1:3000->3000/tcp   fct-client-project-full-nextjs-1
39f7966bfc50   fct-support/drupal:prod   "docker-php-entrypoi…"   15 minutes ago   Up 15 minutes   127.0.0.1:8080->80/tcp     fct-client-project-full-drupal-1
```
