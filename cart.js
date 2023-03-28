const fs=require('fs');
const path=require('path');
const p=path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);
module.exports=class Cart{
    static addProduct(id){
        fs.readFile(p,(err,fileContent)=>{
            let cart={products:[],totalprice:0};
            if(!err){
                cart=JSON.parse(fileContent);
            }
            const existingProduct=cart.products.find(prod=>prod.id===id);
            let updatedproduct;
            if(existingProduct){
                updatedproduct={...existingProduct};
                updatedproduct.qty=updatedproduct.qty+1;
                cart.products={...cart.products,updatedproduct};
            }
            
            else{
                updatedproduct={id:id,qty:1};
                cart.products=[...cart.products,updatedproduct];
            }
            cart.totalprice=cart.totalprice+productPrice;
            fs.writeFile(p,Jsocart)
            

            });
        }
    }
