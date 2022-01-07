# tap-challenge-back
_Buscaminas

## Setup del enviroment

Para instalar las dependencias , run
``` bash
npm install
```

## crear base de datos mySql

3) Migrar:
``` bash
npx sequelize-cli db:migrate
```

## Iniciar Server

``` bash
npm start
or 
npm run dev  
```

## Generales: el proyecto no tiene seeders, primero hay que crear una partida nueva y guardarla para puder utilizar todas las funcionalidades pedidas en el challenge.

### Generar partida: 
GET   {{url}}/api

### Guardar partida: 
POST   {{url}}/api

_body:

partidaId: BIGINT
tablero:  [] Json

### Devolver partida guardada:

GET   {{url}}/api/[partidaId]

// el codigo busca las partidas segun partidaId , no id de la fila !!!




