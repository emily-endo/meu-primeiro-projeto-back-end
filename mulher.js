const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(resquest, response) {
    response.json({
        nome: 'Emily Endo',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQG8kVn5ZjVi5Q/profile-displayphoto-shrink_400_400/0/1614574803282?e=1694044800&v=beta&t=pynG_e8I-evkwafCvJYfn7josWdoUpDAyrz_M8JQyNw',
        minibio: 'Mãe de pet tentando mudar de carreira' 
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)