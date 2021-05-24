const  express = require('express');
const app = express();

const  cors = require('cors');
const  axios = require('axios');

app.use(cors());
app.get('/', async(req,res)=>{
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');
    console.log(data);
    return data;

})

// app.get('/',(rer, res)=>{
//     return res.json([
//         {nome: 'Hailton',idade:19},
//         {nome: 'lucas',idade:26},
//         {nome: 'Lisberto',idade:36},
//         {nome: 'Thiago',idade:50}
//     ])
// })
app.listen('1234');