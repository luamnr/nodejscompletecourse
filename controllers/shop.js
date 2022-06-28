const Product  = require("../models/product")

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products)=>{
        res.render("shop/product-list", {pageTitle: "All products", layout: false,
        products: products, 
        path: "/products"
        // layout: "main-layout.hbs"
      });
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render("shop/product-detail", {pageTitle: product.title, path: "/products" ,product: product});
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products)=>{
      res.render("shop/index", {pageTitle: "Shop", layout: false,
      products: products, 
      path: "/"
    });
  });

};

exports.getCart = (req, res, next) => {
  Product.fetchAll((products)=>{
      res.render("shop/cart", {pageTitle: "Cart", layout: false,
      products: products, 
      path: "/cart"
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  res.redirect("/cart")
};

exports.getOrders = (req, res, next) => {
  Product.fetchAll((products)=>{
      res.render("shop/orders", {
        pageTitle: "Orders", layout: false,
        products: products, 
        path: "/orders"
      });
  });

};

exports.getCheckout = (req, res, next) =>{
  res.render("shop/checkout", {path: "/checkout", pageTitle: "Checkout"});

};