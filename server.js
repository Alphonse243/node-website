const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/details', (req, res)=>{
    res.sendFile(__dirname + '/public/product-detail.html');
}); 
app.get('/product', (req, res)=>{
    res.sendFile(__dirname + '/public/product.html');
}); 

app.listen(port, ()=> {
    console.log(`Serveur démarré sur http:localhost:${port}`);
});