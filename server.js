const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.get('/api/products', async(req, res) => {
    // try{
    //     const response = await fetch('http://localhost/karma-master/api/react-front/posts.php');
    //     const data = wait 
    //     response.json();
    //     res.json(data);
    // }catch(error){
    //     console.error('erreur dans la recuperation des produits :', error);
    //     res.status(500).json({ error : 'error server'});
    // }
    
});


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/details', (req, res)=>{
    res.sendFile(__dirname + '/public/product-detail.html');
}); 
app.get('/product', (req, res)=>{
    res.sendFile(__dirname + '/public/product.html');
}); 
app.get('/cart', (req, res)=>{
    res.sendFile(__dirname + '/public/shoping-cart.html');
}); 

app.get('/blog', (req, res)=>{
    res.sendFile(__dirname + '/public/blog.html');
}); 

app.get('/blog/detail', (req, res)=>{
    res.sendFile(__dirname + '/public/blog-detail.html');
}); 

app.get('/contact', (req, res)=>{
    res.sendFile(__dirname + '/public/contact.html');
}); 
app.get('/contact', (req, res)=>{
    res.sendFile(__dirname + '/public/contact.html');
}); 
app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/public/about.html');
}); 

app.get('/404', (req, res)=>{
    res.sendFile(__dirname + '/public/404.html');
}); 

app.listen(port, ()=> {
    console.log(`Serveur démarré sur http:localhost:${port}`);
});