const express = require('express')
const app = express()
const sslRedirect = require('heroku-ssl-redirect');
var path    = require("path");

app.use(sslRedirect());
app.use(express.static(path.join(__dirname+'/public/')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/pages/index.html')))
app.get('/update.xml', (req, res) => res.sendFile(path.join(__dirname+'/pages/update.xml')))

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))
