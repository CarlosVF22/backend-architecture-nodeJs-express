const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json()); //middleware
app.use(express.urlencoded({extended:false}));

routerApi(app)

//endpoint para recibir parametros tipo query
//paginación
// app.get('/users', (req,res) =>{
//     const {limit,offset} = req.query;
//     if (limit && offset){
//         res.json({
//             limit,
//             offset
//         });
//     } else{
//         res.send('No hay parametros')
//     }
// });

app.listen(port, ()=>{
    console.log('My port' + port);
});