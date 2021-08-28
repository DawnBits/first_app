const express = require("express");
const router = express.Router();

let db = require(",/db");

router.get('/',(req,res)=> {
    res.render('pages/home');
});

router.get('/about',(req,res)=>{

    res.render('pages/home');

});

router.get('/cadastro',(req,res)=>{

    res.render('pages/cadastro',{users:users});

});

router.post('/cadastro/remove',(req,res)=>{
 
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

            } else if(cont==users.length-1){
                console.log("Erro ao remover elemento: ",name);
                return res.status(400).json({
                    status:'error',
                    error:`Didn't Remove element: ${name}`
                });
            }
        }
    }
});

module.exports = router;