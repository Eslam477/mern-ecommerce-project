import data from "./data.js"
var getProduct = (req, res) => {
    var result = data.products;
    res.json(result)
}
var getSingleProduct = (req, res) => {
    var result = data.products.filter(product => {
        return product.id === req.params.id
    })
    res.json(result)
}
export { getProduct, getSingleProduct };