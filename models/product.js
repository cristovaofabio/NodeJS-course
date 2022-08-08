const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    saveProduct() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}