const express = require('express');
constrepoContext=require('./repository/repository-wrapper');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.listen(3000, function() {
    console.log("Server started. Listening on port 3000.");
 });

app.get('/api/products/:id',(req,res)=>{
    constid=req.params.id;constproduct=repoContext.products.findProductById(id);
    returnres.send(product);
});
app.post('/api/products',(req,res)=>{
    constnewProduct=req.body;
    constaddedProduct=repoContext.products.createProduct(newProduct);
    returnres.send(addedProduct);
});
