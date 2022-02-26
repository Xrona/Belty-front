# Nuxt belty

### Preparation

1. [install docker](https://docs.docker.com/get-docker/)
2. [install docker-compose](https://docs.docker.com/compose/install/)
3. [install traefik](https://github.com/mediaten/traefik-v2)

## Installation

```bash
make cp-env
```

##### After you must configure your app in .env file

```bash
make install
```

##View docker container logs

```bash
make logs
```

## Up docker container

```bash
make up
```

## Enter docker container environment

```bash
make env
```

## Build Setup

```bash
make
```

### Building for production

To building for production you need to change `COMPOSE_FILE` param in *.env* to *docker-compose.prod.yml* and follow the above steps

## Generate dist and export it to zip-file

```bash
make generate-zip
```

##### For creating zip archieves you need to install *zip* dependency
