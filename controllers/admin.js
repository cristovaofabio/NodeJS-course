const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add product',
        path: '/admin/add-product',
        productCSS: true,
        editing: false,
        activeAddProduct: true
    })
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, price, description, imageUrl);

    product.save()
        .then(result => {
            //console.log(result);
            console.log('Created product');
            res.redirect('/admin/products');
        }).catch(err => {
            console.log(err);
        });
}

// exports.getEditProduct = (req, res, next) => {
//     const editMode = req.query.edit;
//     if (!editMode) {
//         return res.redirect('/');
//     }

//     const prodId = req.params.productId;
//     req.user
//         .getProducts({ where: { id: prodId } })
//         .then(products => {
//             const product = products[0];

//             if (!product) {
//                 return res.redirect('/');
//             }
//             res.render('admin/edit-product', {
//                 pageTitle: 'Edit product',
//                 path: '/admin/edit-product',
//                 editing: editMode,
//                 product: product,
//                 productCSS: true,
//                 activeAddProduct: true
//             });
//         })
//         .catch(err => console.log(err));
// }

// exports.postEditProduct = (req, res, next) => {
//     const prodId = req.body.productId;
//     const updatedTitle = req.body.title;
//     const updatedImageUrl = req.body.imageUrl;
//     const updatedPrice = req.body.price;
//     const updatedDescription = req.body.description;

//     Product.findByPk(prodId)
//         .then(product => {
//             product.title = updatedTitle;
//             product.imageUrl = updatedImageUrl;
//             product.price = updatedPrice;
//             product.description = updatedDescription;
//             return product.save();
//         })
//         .then(result => {
//             console.log('UPDATED PRODUCT!');
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     res.redirect('/admin/products');
// }

// exports.getProducts = (req, res, next) => {
//     req.user.getProducts()
//         .then(products => {
//             res.render('admin/products', {
//                 prods: products,
//                 pageTitle: 'Admin products',
//                 path: '/admin/products'
//             });
//         })
//         .catch(err => console.log(err));
// }

// exports.postDeleteProduct = (req, res, next) => {
//     const idProd = req.body.productId;
//     Product.findByPk(idProd)
//         .then(product => {
//             return product.destroy();
//         }).then(result => {
//             console.log('DESTROYED PRODUCT');
//             res.redirect('/admin/products');
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }
