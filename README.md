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
5. Docker Hub registry (docker.io) is used by default.

### Docker Official Images

1. A dedicated team responsible for reviewing and publishing all content in the Docker Official Images repositories
2. Works in collaboration with software maintainers, security experts
3. However anyone can participate as collaboration takes place openly on GitHub

###  Image Versioning
<img width="811" height="463" alt="image" src="https://github.com/user-attachments/assets/ea8d1a64-c713-4562-b3d4-2095a276266d" />

1. Docker images are versioned.
2. Different versions are identified by tags.

### How to PULL Docker Iamge
Command
```docker pull nginx:1.23```
<img width="927" height="509" alt="image" src="https://github.com/user-attachments/assets/ee6d0fe1-f663-4052-9c3b-c7482b5b072e" />

Without any specific version it pull latest image
command ``` docker pull nginx ```
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

In Docker if image is not present in local then it automatically go to DockerHub and download it.
```
C:\Users\ALOK>docker run nginx:1.22-alpine
Unable to find image 'nginx:1.22-alpine' locally
1.22-alpine: Pulling from library/nginx
2dcba36d07e0: Pull complete
```

```
C:\Users\ALOK>docker images
                                                                                                    i Info →   U  In Use
IMAGE                                       ID             DISK USAGE   CONTENT SIZE   EXTRA
fct-support/drupal:prod                     f707ca06a52e       1.31GB          279MB    U
fct-support/nextjs:prod                     cb5199a89b21        276MB         68.5MB    U
gov-report-as-full-nextjs-frontend:latest   b7d878dca027       2.21GB          519MB    U
gov-report-as-full-rails-backend:latest     61e01e575ab8          1GB          266MB    U
nginx:1.22-alpine                           8745c93f1a1c         63MB         16.8MB    U
postgres:16-alpine                          20edbde7749f        395MB          111MB    U

C:\Users\ALOK>
```
## Container Port vs Host Port
<img width="853" height="496" alt="image" src="https://github.com/user-attachments/assets/4348c4e5-5ee4-4792-9f8b-3249186c89e2" />

#### Container runs on a specific port

<img width="699" height="384" alt="image" src="https://github.com/user-attachments/assets/47098607-dc04-4e9e-ae8f-b26d00fc3e11" />

For Example for postgres:16-alpine it run on port 5432
<img width="782" height="508" alt="image" src="https://github.com/user-attachments/assets/101295c4-e889-44ea-85b9-6e8dd4441da1" />


Like NGINX on port 80, Redish on Port 6379
But when we directly browse on these port we get nothing.
We need to bind our local port to the container port.

For Port Binding we use this command
``` docker run -d -p 1200:80 nginx:1.23 ```


<img width="1079" height="331" alt="image" src="https://github.com/user-attachments/assets/b5364969-3026-471f-b43e-58e770dd9bc5" />

<img width="1467" height="625" alt="image" src="https://github.com/user-attachments/assets/04fc2984-c573-438b-b72b-5da9f3af1cb1" />


Now nginx work or run on localHost ```http://localhost:1200```

<img width="1267" height="342" alt="image" src="https://github.com/user-attachments/assets/43434a72-df9f-4e45-bd7c-2170db87d501" />

**For Best practice in PORT BINDING use the same port like MySQL bydefault port is 3306 then on local we need to use PORT 3306**
<img width="481" height="505" alt="image" src="https://github.com/user-attachments/assets/550253c5-8491-4952-99ee-38761cd4edef" />

## Start and Stop Containers

**Docker run command create the new container everytime when we execute the Docker run. Doesn't re-use previous container** ```Docker run```

> ```Docker ps``` show only running containers but ```Docker ps -a or -all``` show all containers.

<img width="1004" height="449" alt="image" src="https://github.com/user-attachments/assets/27dc9172-eac0-4fa9-9bbe-f9c7a8ad4518" />

This command also show the running container and exited container.

### Docker stop
<img width="1018" height="522" alt="image" src="https://github.com/user-attachments/assets/d70f9a62-a23b-43ca-978e-c2f53bbf4a22" />

it need a container ID like ```Docker stop a0787c26320a```

### Docker start
<img width="547" height="109" alt="image" src="https://github.com/user-attachments/assets/86534154-74f5-4dd8-a3cd-e8e1f617579a" />

It need a container ID like ```Docker start a0787c26320a```
> We can start multiple container at same time.

### Giving name to container instead of default name
``` docker run --name web-app -d -p  9000:80 nginx:1.23```

<img width="1010" height="527" alt="image" src="https://github.com/user-attachments/assets/d6a46da5-58f1-40ed-b807-23ac58df7376" />

### Docker logs
``` Docker logs web-app ``` give all information about that container.

<img width="897" height="513" alt="image" src="https://github.com/user-attachments/assets/b7c5556c-19d3-46dc-8c8b-84e728cad091" />

## Public and Private Docker Registries

<img width="819" height="388" alt="image" src="https://github.com/user-attachments/assets/b66eaef3-12c8-404a-a0b6-dda2415c4d0c" />

<img width="817" height="444" alt="image" src="https://github.com/user-attachments/assets/09c33502-7052-4dd8-a4ed-312e2019f0f1" />

## Registry vs Repository

### Docker Registry
A service providing storage.
Can be hosted by a third party, like AWS, or by yourself.
Collection of repositories.

### Docker Repository
Collection of related images with same name but different versions.

<img width="871" height="454" alt="image" src="https://github.com/user-attachments/assets/70ad7a23-8d16-4f18-ab2e-73763f82c389" />

## Dockerfile -
### Create own Images

<img width="686" height="348" alt="image" src="https://github.com/user-attachments/assets/23c5397c-2994-475b-a98f-48c78676b40f" />

Dockerfile is a text documents that contains commands to assemble an image.
Docker can then build an image by reading those instructions.

### Structure of Dockerfile
Docker file start from a parent image or **base image**
It's a Docker image that your image is based on.
**You choose the base image, depending on which tools you need to have available**

<img width="532" height="439" alt="image" src="https://github.com/user-attachments/assets/71e866dd-143f-4a55-9783-f782df7624e4" />

```FROM```
> Dockerfile must begin with a FROM instruction
> Build this image from the specified image

### Multi-Layer Approach
Every image consists of multiple image layers
This makes Docker so efficient, because image layers can be cached.

<img width="786" height="432" alt="image" src="https://github.com/user-attachments/assets/a1308f0e-75a0-4f09-867d-3606205e9aa3" />

## Building our own project Image on Docker.

**Docker has three parts**
**1. Dockerfile**
**2. Image**
**3. Container**

<img width="679" height="282" alt="image" src="https://github.com/user-attachments/assets/0bc7acff-1654-4f44-9df6-c5ba2bb84873" />


### 1. Building Dcokerfile

<img width="723" height="224" alt="image" src="https://github.com/user-attachments/assets/ec81e9d7-9664-4157-93b0-2d49ce4ec538" />

We are building the Docker image for node project so we need to provide the node also in container.

So, we use ```FROM node:19-alpine``` in Dockerfile.

Means, install node in local system and for container we use ```FROM node <version>```

```
FROM : Building the images from the specified image

RUN : Will execute any command in a shell inside the containers environment.

This RUN container also install the node in docker container.

COPY : Copies files or directories from <src> and adds them to the filesystem
of the container at the path <dest>

While "RUN" is executed in the container, "COPY" is exectued on the host.

WORKDIR : Sets the working directory for all following commands.
Like changing into a directory: "cd...."

CMD : The instruction that is to be executed when a Docker container starts.

There can only "CMD" instruction in a Dockerfile.
CMD ["node", "server.js"]
```

<img width="868" height="500" alt="image" src="https://github.com/user-attachments/assets/e80bedcf-6453-43cd-9645-8d1ce9eb6119" />


<img width="737" height="223" alt="image" src="https://github.com/user-attachments/assets/698b777d-366c-46d4-8e42-1f2f3fcaeac5" />

> In 1st COPY, we only copy the package.json file. But in 2nd COPY, we copy the whole src file.

> We use /app/ because it that app/ filder not created then create automatically.

<img width="594" height="214" alt="image" src="https://github.com/user-attachments/assets/36a917cd-c957-4697-804c-d5e5b058d7da" />

<img width="718" height="192" alt="image" src="https://github.com/user-attachments/assets/d294cef3-31a7-40eb-af18-d92d84309d7c" />


#### **FINAL DOCKERFILE CODE**
```
FROM node:25-alpine3.22
COPY package.json /app/
COPY src /app/
WORKDIR /app
RUN npm install
CMD ["node", "server.js"]
```
<img width="592" height="286" alt="image" src="https://github.com/user-attachments/assets/224a97bd-cdaf-4e49-adf5-a2e0fc507512" />

### 2. Now building Docker Image.

```  docker build -t node-app:1.0 . ```

<img width="849" height="664" alt="image" src="https://github.com/user-attachments/assets/84166f8b-0ecb-4e3d-aebf-a90202359268" />

```
PS C:\Users\ALOK\Desktop\DockerRun> docker build -t node-app:1.0 .
[+] Building 8.3s (11/11) FINISHED                                                                                                                                        docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                                                      0.0s
 => => transferring dockerfile: 171B                                                                                                                                                      0.0s
 => [internal] load metadata for docker.io/library/node:25-alpine3.22                                                                                                                     1.8s
 => [auth] library/node:pull token for registry-1.docker.io                                                                                                                               0.0s
 => [internal] load .dockerignore                                                                                                                                                         0.0s
 => => transferring context: 2B                                                                                                                                                           0.0s
 => CACHED [1/5] FROM docker.io/library/node:25-alpine3.22@sha256:d4f742bdaee57b81d8b1a1c78e210e5c3c2b3892b335a30575956819028c804e                                                        0.1s
 => => resolve docker.io/library/node:25-alpine3.22@sha256:d4f742bdaee57b81d8b1a1c78e210e5c3c2b3892b335a30575956819028c804e                                                               0.0s
 => [internal] load build context                                                                                                                                                         0.1s
 => => transferring context: 876B                                                                                                                                                         0.1s
 => [2/5] COPY package.json /app/                                                                                                                                                         0.1s
 => [3/5] COPY src /app/                                                                                                                                                                  0.1s
 => [4/5] WORKDIR /app                                                                                                                                                                    0.1s
 => [5/5] RUN npm install                                                                                                                                                                 3.3s
 => exporting to image                                                                                                                                                                    1.5s
 => => exporting layers                                                                                                                                                                   0.8s
 => => exporting manifest sha256:5cf79202bd9248527a62a17c6cf24beabe7f6fbf96b114a2667233d15f722d42                                                                                         0.0s
 => => exporting config sha256:8d5d67a214223e39eed5615fc2446d4efc471eb91c53a5b1619e97dc115ae777                                                                                           0.1s
 => => exporting attestation manifest sha256:8e8141032e444e3b0fb1a1eada597e89b440354ed35386a2dd8315d326890360                                                                             0.1s
 => => exporting manifest list sha256:fba26fdfed6f61a783489741bdf9528f8464e235891b9a9f89de1de7b749f843                                                                                    0.1s
 => => naming to docker.io/library/node-app:1.0                                                                                                                                           0.0s
 => => unpacking to docker.io/library/node-app:1.0                                                                                                                                        0.4s
View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/pkg5wjnc3j8wob6n58z68z0yc
```

**The New Docker Image is build and the image also shows in DockerDesktop **

<img width="1656" height="466" alt="image" src="https://github.com/user-attachments/assets/d536be78-2a13-445c-a16a-ab4c26d2ea3c" />

In Command lIne it also show the new Created image when we type ```docker images```
<img width="596" height="184" alt="image" src="https://github.com/user-attachments/assets/4413ad8b-8500-426e-89d4-4b1617c9842a" />


**A Docker image consists of layers**

**Each instrunctions in the Dockerfile creates one layer**

**These layers are stacked and each one is a delta of the changes from the previous layer**

### 3. Now running the Docker Container.

``` docker run -d -p 3000:3000 node-app:1.0 ```
1. Running this is terminal
<img width="666" height="236" alt="image" src="https://github.com/user-attachments/assets/990e11ab-5d2f-4baf-985c-aaf3b2aa2a6f" />

2. Show container in Docker-Desktop
<img width="1658" height="344" alt="image" src="https://github.com/user-attachments/assets/98433d06-4fd8-4292-b34e-c8ac03071fcb" />

3. When we check ```docker ps``` so it show the running container in terminal also.
<img width="971" height="100" alt="image" src="https://github.com/user-attachments/assets/5eda3b82-7044-44ea-a6e5-68f8627d5221" />

4. Run the project on localhost:3000
<img width="750" height="247" alt="image" src="https://github.com/user-attachments/assets/6065428a-3031-4f80-8f96-db5af263d4f9" />

5. When we do ```docker logs 7e9a371d078a``` then also show the running port in container.
<img width="956" height="283" alt="image" src="https://github.com/user-attachments/assets/5c859205-1514-4c1d-8dad-6c4d80b25743" />


