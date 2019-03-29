kuruo_now
---

### Usage

```
### Edit dotenv
$ vi .env
### Start kuruwo
$ npm i
$ npm run start
```

or with docker,

```
### Edit dotenv
$ vi .env
### Build & Start kuruo
$ docker build -t kuruo:0.1 .
$ docker run --env-file=.env kuruo:0.1
```