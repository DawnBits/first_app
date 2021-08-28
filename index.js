const express = require("express");
const app = express();
const routes = require("./routes");

const port = 3030;
const address="localhost";

app.use('/',routes);

const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`)
});