const router = require("express").Router();
const fs = require("fs");

let data = "";
const readFile = (path) => {
    return fs.readFileSync(path, "utf-8");
}

data = readFile("./data/fruit.cvs");
data = data.split("\s\c")
console.log(data);

const Product = (prArr) => {
    let names = data[0].split(";");
    names.forEach((name, idx) => {this[name] = prArr[idx]})   
}

let first = new Product(data[1].split(";"));
console.log(first);
const products = [];
for(let i = 1; i < data.length; i++) {
    products.push(new Product(data[i].split(";")));
}


router.get("/", (req, res) => {
    res.render("index", {
        title: "Одевайся с ХАЙПОМ!",
        products: products
    });
});

module.exports = router;
