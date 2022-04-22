# friday party - docker-compose 101
### Build client docker image

```
> cd api
> docker build . -t fridayparty/api
```

### Build client docker image

```
> cd client
> docker build . -t fridayparty/client
```

### Build proxy docker image

```
> cd nginx
> docker build . -t fridayparty/proxy
```

### List of running docker-compose
```
> docker-compose ps
```
###

### Build, Create, Start docker-compose
```
> docker-compose up -d
```
