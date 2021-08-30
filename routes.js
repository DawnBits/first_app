const express = require("express");
const router = express.Router();

router.use(express.static('public'));



router.get('/',(req,res)=>{
    res.render('pages/home');
});

router.get('/about',(req,res)=>{
    res.render('pages/about');
});

router.get('/cadastro',(req,res)=>{

    let users = [{name:"Hajime Hinata", address:"Av. Izuru Kamukura, 77",email:"sem_talento@email.com",birthday: "01/01", height: 1.79, vote: true},{name:"Kaeya Alberich", address:"Rua João Barbatos, 34",email:"ficafrio41@email.com",birthday: "30/11", height: 1.82, vote: true},{name:"Nagito Komaeda", address:"Rua da Esperança, 100",email:"garoto_s0rtudo@email.com",birthday: "28/04", height: 1.80, vote: true},{name:"Shinji Ikari", address:"Avenida dos Anjos, 05",email:"terceira_crianca@email.com",birthday: "06/06", height: 1.44, vote: false},{name:"Byakuya Togami", address:"Avenida das Mulheres Ricas, 30",email:"melhorquevc@email.com",birthday: "05/05", height: 1.85, vote: true},{name:"Misato Katsuragi", address:"Avenida dos Anjos, 05",email:"gatinhabraba@email.com",birthday: "08/12", height: 1.62, vote: true}];

    res.render('pages/cadastro', {users:users}); 

});

router.get('/cadastro/remove',(req,res)=>{
    res.send('Remoção realizada com sucesso');
});


router.get('/cadastro/update',(req,res)=>{
    res.send('Atualização realizada com sucesso');
});

router.get('/cadastro/list',(req,res)=>{
    
    console.log("Olha a lista ae: ",users);
    res.send(JSON.stringify(users));

});

router.post('/cadastro/add',(req,res)=>{
    let user={name:"",email:"",address:"",heigth:"",age:"",vote:""};

    user.name = req.body._name;
    user.email = req.body._email;
    user.address = req.body._address;
    user.heigth = req.body._heigth;
    user.age = req.body._age;
    user.vote = req.body._vote;

    users.push(user);
    console.log("Usuário cadastrado: ",user);
    console.log("Lista dos usuários: ",users); //nao use esta linha se tiver muitos elementos em users pois causara lentidao no servidor
    res.sendStatus(200);
    res.status(200).json({
        status:'sucess',
        data: `Usuário ${user} foi adiocionado com sucesso!`
    });

});

module.exports = router;