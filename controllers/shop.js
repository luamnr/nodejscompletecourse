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

exports.getCheckout = (req, res, next) =>{
  res.render("shop/checkout", {path: "/checkout", pageTitle: "Checkout"});

};