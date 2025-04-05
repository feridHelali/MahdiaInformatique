## Bootstrap the system

```bash
    c:> git clone https://github.com/feridHelali/MahdiaInformatique.git
    c:> mkdir data
    c:> cd app
    c:\app> npm install
    c:\webapi> npm install
```

### lunch th mongo server over data directory

```bash
    c:> mongod --dbpath=data
```

### start dev environment for webapi

```bash
  c:> cd webapi
  c:> npm run start:dev
```

### start dev environment for react app

```bash
 c:>npm run dev
```