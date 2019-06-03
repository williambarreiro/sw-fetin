console.log('Hello World!')
const express = require('express')
const app = express()

app.listen(3000,function() {
    console.log('port 3000')
})

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.send('cadastro_usuario.ejs')
})