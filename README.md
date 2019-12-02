# ACE Seed  

[Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Servidor de desarrollo
`npm start`  

`http://localhost:4200/`  

---
## Prueba concepto  

La prueba concepto se encuentra en la carpeta **public** en la raiz del proyecto.


---
## Creación del componente web customizado

Ejecutar  `npm run build:element` para crear el componente web. El resultado de este comando será un archivo js ubicado en la carpeta `dist/element` en la raíz del proyecto.  
  
El nombre del componente web está compuesto de un PREFIJO y un NOMBRE personalizados `pr-nombre`. Este nombre es importante ya tiene que coincidir con el selector del componente que deseamos registrar.  

Para lograr esto y aprovechar el uso del Angular CLI, podemos modificar el prefijo en el archivo **angular.json** (esto hace que el CLI genere componentes con el prefijo deseado) y en el archivo **compileElement.js** (aquí es necesario cambiar el prefijo como el nombre).  

*angular.json*
```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "ace-seed": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "pr",
      ...
```


*compileElement.js*
```js
const fs = require('fs');
const {execSync} = require('child_process');

const PREFIX = "pr";
const NAME = "nombre";
const componentName = `${PREFIX}-${NAME}`;
```

---
## Tests unitarios

Ejecuta `ng test` para realizar test unitarios via [Karma](https://karma-runner.github.io).

## Tests end-to-end 

Ejecuta `ng e2e` para realizar test end-to-end via [Protractor](http://www.protractortest.org/).

