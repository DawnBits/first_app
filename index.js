/*
* Exemplo de aplicação Node.js com MongoDB
* Autor: Wellington Wagner F. Sarmento
* 
*
* Este exemplo foi baseado no código escrito em:
* Utilizando a engine EJS para aplicações em NodeJS 
* (https://www.codementor.io/@nulldreams/utilizando-a-engine-ejs-para-aplicacoes-em-nodejs-dok81l3si)
*
*
*/

const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");


const port=3030;
const address = "localhost";

const utils = require("./utils");

let toggleBol=true;


// a palavra reservada "global" cria uma variável ou objeto global para o sistemas. Ele pode ser visto em qualquer parte do código ou dos módulos do projeto. Assim, Users podem ser vistos tanto aqui no index.js quanto em routes.js
// global.users =[
//     {name:"Wellington W. F. Sarmento",address:"Rua Dom Jeronimo, 666",email:"wwagner@virtual.ufc.br",age:46,heigth:1.70,vote:true},
//     {name:"Patricia S. Paula",address:"Rua Dom Jeronimo, 666",email:"patricia@virtual.ufc.br",age:46,heigth:1.70,vote:true},ß
//     {name:"Henrique Sérgio L. Pequeno",address:"Rua do Henrique, 666",email:"henrique@virtual.ufc.br",age:46,heigth:1.70,vote:true}];
global.users =[
    {name:"Hajime Hinata", address:"Av. Izuru Kamukura, 77",email:"sem_talento@email.com",birthday: "01/01", height: 1.79, vote: true},
    {name:"Kaeya Alberich", address:"Rua João Barbatos, 34",email:"ficafrio41@email.com",birthday: "30/11", height: 1.82, vote: true},
    {name:"Nagito Komaeda", address:"Rua da Esperança, 100",email:"garoto_s0rtudo@email.com",birthday: "28/04", height: "1.80", vote: true},
    {name:"Shinji Ikari", address:"Avenida dos Anjos, 05",email:"terceira_crianca@email.com",birthday: "06/06", height: 1.44, vote: false},
    {name:"Byakuya Togami", address:"Avenida das Mulheres Ricas, 30",email:"melhorquevc@email.com",birthday: "05/05", height: 1.85, vote: true},
    {name:"Misato Katsuragi", address:"Avenida dos Anjos, 05",email:"gatinhabraba@email.com",birthday: "08/12", height: 1.62, vote: true}
];

//ativa uso do EJS e do Express-ejs-layouts
app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false})); //prepara a aplicacao para receber dados na forma de query string
app.use(express.json()); //prepara a aplicacao para receber dados no formato JSON

//esse codigo abaixo foi criado para testar variacoes de tempo de resposta do servidor, simulando problemas de lentidao na conexcao e/ou retardos no tempo de resposta do computador onde esta a aplicacao (servidor)
//espera um tempo de 2 segundos (2000 milissegundos) para responder a qualquer requisicao do cliente. Isso gera um delay (espera) proposital para testes do codigo e condicoes de erro.
//app.use(utils.delay(2000));



//Criando usando rotas simples que estão no arquivo routes.js
app.use('/',routes);

//Criando um servidor simples com o Node.js e o Express
const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});
