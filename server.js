import express from 'express';

const app = express();
const port = 8080;

app.listen( () => console.log( `Express listening on ${ port }` ) );