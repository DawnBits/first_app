const express = require("express");
const router = express.Router();


//Especifica a pasta contendo arquivos estáticos. 
//O nome 'public' não precisará ser colocado na rota 
//Para serem alcançados os arquivos e pastas que estão dentro dele. 
//Por isso na imagem que está na página home.ejs só há o indicativo para 'images'
router.use(express.static('public'));

//************* Exemplode Rotas ************* 

/*

http://localhost:3030/css
http://localhost:3030/images
http://localhost:3030/index.html

/ = http://localhost:3030/
/about = http://localhost:3030/about
/cadastro =  http://localhost:3030/cadastro

*/


//Req é um objeto que recebe dados da requisição HTTP feita (request). Res permite enviar uma resposta ao navegador (Response)
router.get('/',(req,res)=>{ //callback - funcao que trata dado evento GET
    res.render('pages/home');
});

router.get('/about',(req,res)=>{ //callback - funcao que trata dado evento  GET

    res.render('pages/about');
});

router.get('/cadastro',(req,res)=>{ //callback - funcao que trata dado evento  GET

    let users = [{name:"Hajime Hinata", address:"Av. Izuru Kamukura, 77",email:"sem_talento@email.com",birthday: "01/01", height: 1.79, vote: true},{name:"Kaeya Alberich", address:"Rua João Barbatos, 34",email:"ficafrio41@email.com",birthday: "30/11", height: 1.82, vote: true},{name:"Nagito Komaeda", address:"Rua da Esperança, 100",email:"garoto_s0rtudo@email.com",birthday: "28/04", height: "1.80", vote: true},{name:"Shinji Ikari", address:"Avenida dos Anjos, 05",email:"terceira_crianca@email.com",birthday: "06/06", height: 1.44, vote: false},{name:"Byakuya Togami", address:"Avenida das Mulheres Ricas, 30",email:"melhorquevc@email.com",birthday: "05/05", height: 1.85, vote: true},{name:"Misato Katsuragi", address:"Avenida dos Anjos, 05",email:"gatinhabraba@email.com",birthday: "08/12", height: 1.62, vote: true}];

    res.render('pages/cadastro',{users:users}); 
});

router.post('/cadastro/remove',(req,res)=>{
    //let item =req.body.id; //pega o valor passado através do parâmetro id e atribui a variável item. 
    let name = req.body.name;

    if(users.length==0){
        console.log("Erro: Não há elemento a ser removido!");
        return res.status(500).json({
            status:'error',
            error:`Removed element: ${name}`
        });

    } else {
        for(let cont=0;cont<users.length;cont++){
            if(users[cont].name==name){
                users.splice(cont,1);
                console.log("Elemento Removido: ",name);
                return res.status(200).json({
                    status:'sucess',
                    data:users
                });
                //res.send(JSON.stringify({sucess:`Elemento removido com sucesso: ${name}`}));
            } else if(cont==users.length-1){
                console.log("Erro ao remover elemento: ",name);
                return res.status(400).json({
                    status:'error',
                    error:`Didn't Remove element: ${name}`
                });
            }
        }
    }
    
    
    //users.splice(item,1); //este método permite adicionar ou remover um item do vetor em uma dada posição. 
    //res.render('pages/cadastro',{users:users});
    //res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
    //res.send(JSON.stringify({sucess:`Elemento removido com sucesso: ${name}`}));
    //console.log("Elemento Removido: ",name);
    
});


router.post('/cadastro/update',(req,res)=>{
    //substitui os valores armazenados no item do vetror dado por id, por valores fornecidos como parametro vindos do navegador.
    //recebe dados do cliente na forma de um objeto JSON

    users[req.body.id].name=req.body.name; //ID do objeto ou Tag: name
    users[req.body.id].email=req.body.email;
    users[req.body.id].address=req.body.address;
    users[req.body.id].birthday=req.body.birthday;
    users[req.body.id].height=req.body.height;
    users[req.body.id].vote=req.body.vote;

    res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
    console.log("Dados recebidos: ",req.body);//mostra no console do servidor os dados recebidos
});

router.get('/cadastro/list',(req,res)=>{

    console.log("Usuário: ",users); //nao use esta linha se tiver muitos elementos em users pois causara lentidao no servidor
    //captura os dados de usuários (users) e transforma o vetor de objetos em uma string JSON, para ser enviada ao cliente
    res.send(JSON.stringify(users));
    // res.status(200).json({
    //     status:'sucess',
    //     data: `Lista foi adiocionado com sucesso!`
    // });
});

router.post('/cadastro/add',(req,res)=>{
    
    let user={name:"",email:"",address:"",height:"",birthday:"",vote:""};

    user.name = req.body.name;
    user.email = req.body.email;
    user.address = req.body.address;
    user.height = req.body.height;
    user.birthday = req.body.birthday;
    user.vote = req.body.vote;

    users.push(user);
    console.log("Usuário cadastrado: ", user);
    console.log("Lista dos usuários: ", users); //nao use esta linha se tiver muitos elementos em users pois causara lentidao no servidor
    res.sendStatus(200);
    res.status(200).json({
        status:'sucess',
        data: `Usuário ${user} foi adiocionado com sucesso!`
    });

});

//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router;