# MaDe

per il development environment: (NB: npm install va soltanto eseguito la prima volta che si apre su un pc)
- terminale 1:
```bash
cd my-project/
npm install
npm run develop
```
- terminale 2:
```bash
cd MaDe/
npm install
npm install -g @angular/cli
ng serve
```

se si esegue da codespace:
- mettere la porta 1337 con visibilità pubblica
- inserire il link della porta 1337 nel file /MaDe/src/app/common/data.service.ts nella variabile baseUrl 

se si esegue da locale:
- inserire il link 127.0.0.1:1337 nel file /MaDe/src/app/common/data.service.ts nella variabile baseUrl