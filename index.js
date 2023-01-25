// Este código é uma aplicação web simples que usa o framework Express.js 
// para criar um servidor web e gerenciar rotas.
// "const express = require('express');" está importando o framework Express.js.
const express = require('express')
// "const server = express();" está criando uma instância do Express.
const server = express();
const path = require('path');
const dobyParser = require('body-parser')
const database = require('./db');
const Perfil = require('./modelos/perfil');
const alert = require('alert');
//Em seguida, ele importa o módulo "path" para trabalhar com caminhos de arquivos,
// o "body-parser" para lidar com os dados enviados pelo cliente em requisições HTTP
// e o "alert" para mostrar mensagens de alerta.
// Ele também importa os arquivos "./db" e "./modelos/perfil"
// que são arquivos para conexão com banco de dados e modelagem de dados respectivamente.

server.use(express.static(path.join(__dirname, 'public')));

// A seguir, ele configura o Express para usar o diretório "public" como um diretório estático, o que significa que os arquivos dentro dele podem ser acessados diretamente pelo cliente. Ele também configura o body-parser para lidar com dados enviados pelo cliente em JSON e formatos de URL codificados.

server.use(dobyParser.json());
server.use(dobyParser.urlencoded({
    extended: true
}));
// A seguir, ele usa uma função async/await para sincronizar o banco de dados e manipular erros caso ocorram.

(async() => {
    try {
        const resultado = await database.sync();
        console.log(resultado);

    } catch (error) {
        console.log(error);
    }
})();
// Ele cria uma rota "POST" para o endereço "/salvarPerfil" que cria um novo perfil no banco de dados usando o modelo Perfil importado. E cria uma rota "POST" para o endereço "/logar" que busca um usuário no banco de dados de acordo com o login e senha enviadas pelo cliente e retorna a página index.html caso o usuário exista, caso contrário, mostra uma mensagem de alerta e retorna para a página de login.

server.post('/salvarPerfil', async(req, res)=>{
    const createPerfil = await Perfil.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        telefone: req.body.telefone,
        bairro: req.body.bairro,
        rua: req.body.rua,
        cep: req.body.cep,
        estado: req.body.estado,
        email: req.body.email,
        pais: req.body.pais,
        login: req.body.login,
        senha: req.body.senha
    });
    console.log(createPerfil);
    res.sendFile(path.join(__dirname +'/public/pages/index.html'));

})

server.post('/logar', async(req, res)=>{
    const selectUsuario = await Perfil.findOne({
        where: {
            login: req.body.username,
            senha: req.body.password
        }
    });
    if(selectUsuario !== null){
        res.sendFile(path.join(__dirname+'/public/pages/index.html'))

    }else {
        alert("Login ou Senha incorretos");
        res.sendFile(path.join(__dirname+'/public/pages/logindaompra.html'))
    }
    if(selectUsuario == null || selectUsuario == ''){
        alert("Valores nulos encontrados!")
        res.sendFile(path.join(__dirname+'/public/pages/logindaompra.html'))
    }
})
// Ele cria uma rota "GET" para o endereço "/listarUsuarios"

server.get('/listarUsuarios', async(req, res)=>{
    const usuarios = await Perfil.findAll();
    console.log(usuarios);
})

server.get('/', (req, res) => {
    res.sendFile(path.jain(__dirname + '/public/pages/index.html'));
})

server.get('/autores', (req, res) => {
    res.sendFile(path.jain(__dirname + '/public/pages/autores.html'));
})

server.get('/compra', (req, res) => {
    res.sendFile(path.jain(__dirname + '/public/pages/compra.html'));
})

server.get('/logindaompra', (req, res) => {
    res.sendFile(path.jain(__dirname + '/public/pages/logindaompra.html'));
})

server.get('/paginicial', (req, res) => {
    res.sendFile(path.jain(__dirname + '/public/pages/paginicial.html'));
})

server.get('/perfil', (req, res) => {
    res.sendFile(path.jain(__dirname + '/public/pages/perfil'));
})

server.get('/TAREFAS', (req, res) => {
    res.sendFile(path.jain(__dirname + '/public/pages/TAREFAS.html'));
})

server.get('/TCC', (req, res) => {
    res.sendFile(path.jain(__dirname + '/public/pages/TCC.html'));
})

server.listen(3000)