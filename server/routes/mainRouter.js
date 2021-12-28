const router = require("express").Router();
const fs = require("fs");

let data = "";
const readFile = (path) => {
  return fs.readFileSync(__dirname + path, "utf-8");
};

console.log(data);

// const Product = (prArr) => {
//     let names = data[0].split(";");
//     names.forEach((name, idx) => {this[name] = prArr[idx]})
// }

// let first = Product(data[1].split(";"));
// console.log(first);
// const products = [];
// for(let i = 1; i < data.length; i++) {
//     products.push(Product(data[i].split(";")));
// }

const makeProducts = () => {
  return readFile("/../../data/fruit.csv")
    .split("\r\n")
    .slice(1)
    .map((row) => {
      const [name, size, color, category, image, price, brand, id] = row.split(";");
      return {
        name,
        size,
        color,
        category,
        image,
        price,
        brand,
        id
      };
    });
};
console.log(makeProducts())

router.get("/", (req, res) => {
  res.render("index", {
    title: "DRESS-COD",
    products: makeProducts(),
    // tableCaptions
  });
});

router.get("/adddre", (req, res) => {
  res.render("adddre", {
      title: "Добавить товар"
  });
});

// router.get("/", (req, res) => {
//   res.render("t-thirt", {
//       title: "Футболки"
//   });
// });




module.exports = router;

