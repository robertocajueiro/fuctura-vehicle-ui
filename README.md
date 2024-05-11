# VehicleUi - Curso Fuctura Angular Material

## links de pesquisa

https://github.com/nvm-sh/nvm#installing-and-updating
https://github.com/coreybutler/nvm-windows/releases
https://git-scm.com/downloads

## Instalação CLI
```bash
npm install -g @angular/cli@16.2.8
```
## Criando o projeto
``` bash
ng new fuctura-veicular-ui --routing --style scss
ng new fuctura-veicular-ui
```
## Estrutura do projeto

```bash
APP >\
        MODULE >\
                COMPONENTS
        SHARED >\
                COMPONENTS\
                SERVICES\
                GUARDS\
                DIRECTIVES
```
## gerando modulos, componentes e rotas 
``` bash
ng generate module core --routing

ng generate component core/components/login 

ng generate component core/components/register

ng generate component core/components/dashboard

ng generate component core/components/page-not-found

ng g m vehicle --routing

ng g c vehicle/components/vehicle-list
ng g c vehicle/components/vehicle-register
ng g c vehicle/components/vehicle-list
```

## Configuração Guards

link para consulta sweetalert2 
https://sweetalert2.github.io/

```bash
npm install sweetalert2

ng g g shared/guards/authenticator

ng g g shared/guards/access-control
```
