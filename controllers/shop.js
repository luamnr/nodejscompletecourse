const Product  = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
    .then( ([rows]) => {
      res.render("shop/product-list", {
        pageTitle: "All products",
        products: rows, 
        path: "/products"
      }
    )})
    .catch(
      err => {console.log(err)}
    )
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(id)
  .then(
    ([product])=>{
      res.render("shop/product-detail", {
        pageTitle: product[0].title, 
        path: "/products",
        product: product[0]
      });
    }
  )
  .catch(
    err => {console.log(err)}
  )
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
  .then(([rows])=>{
    res.render("shop/index", {
      pageTitle: "Shop", 
      products: rows, 
      path: "/"
    });
  })
  .catch(
    err => {console.log(err)}
  );
  

};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart=> {
    Product.fetchAll((products)=>{
      const cartProducts = [];
      for (let product of products){
        const cartProductData = cart.products.find(prod=> prod.id == product.id);
        if (cart.products.find(prod => prod.id == product.id)){
          cartProducts.push({productData: product, qty: cartProductData.qty});
        }
      }

      res.render("shop/cart", {
        pageTitle: "Cart",
        products: products, 
        path: "/cart",
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product)=>{
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart")
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product=>{
    Cart.deleteProduct(prodId, product.price);
    res.redirect("/cart");
  })
}

exports.getOrders = (req, res, next) => {
  Product.fetchAll((products)=>{
      res.render("shop/orders", {
        pageTitle: "Orders",
        products: products, 
        path: "/orders"
      });
  });

};

exports.getCheckout = (req, res, next) =>{
  res.render("shop/checkout", {path: "/checkout", pageTitle: "Checkout"});

};