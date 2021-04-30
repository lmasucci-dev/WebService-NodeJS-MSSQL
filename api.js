const dboproducto = require('./dbproducto');
var Producto = require('./producto');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);//ruta principal

router.route('/producto').get((request, response)=>{
    dboproducto.getProducto().then(result => {
        response.json(result[0]);
    })
})

var port = process.env.PORT || 5000;
app.listen(port);
console.log('Producto API Iniciado en el puerto : ' + port);