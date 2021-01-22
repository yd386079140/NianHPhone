# vue-base

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

docker 本地nginx服务 http://localhost:3005/

```
 docker build -t shopping_web .
 docker run -it -p 3005:80 -v "D:\work\songcw-np-client-mobile\dist":"/usr/share/" shopping_web

```