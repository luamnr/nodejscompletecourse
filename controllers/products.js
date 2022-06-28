const Product  = require("../models/product")

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {pageTitle: "Add product",
                              layout: "main-layout.hbs",
                              formsCSS: true,
                              productCSS: true,
                              activeAddProduct: true,
                              path: "/admin/add-product"
                            }
                );
}

exports.postAddProduct = (req, res, next) => {
    const product =  new Product(req.body.title)
    product.save()
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products)=>{
        res.render("shop/product-list", {pageTitle: "Shop", layout: false,
        products: products, 
        activeShop : true,
        productCSS: true,
        path: "/"
        // layout: "main-layout.hbs"
      });
    })

}