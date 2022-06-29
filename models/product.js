const products = [];
const fs = require("fs")
const path = require("path")

const p = path.join(path.dirname(require.main.filename), "data", "products.json")

function getProductsFromFile(cb){

    fs.readFile(p, (err, fileContent) => {
        if (err ){
            cb([]);
        }else{
            cb(JSON.parse(fileContent))
        }
    })
}

module.exports = class Product {

    static productId = 0;

    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
        // this.id = Math.random().toString();
        this.id = Product.productId ++;
        getProductsFromFile(products =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{console.log(err)})

        });
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }

    static findById(id, cb){
        getProductsFromFile(products=>{
            const product = products.find(p => p.id == id);
            cb(product);
        });
    }

};





