const router = require("express").Router();
const fs = require("fs");

let data = "";
const readFile = async (path) => {
    data = await fs.readFile(path, "utf-8", (err, info) => {return info});
    console.log(data);
}

readFile("./data/fruit.cvs");
console.log(data);

router.get("/", (req, res) => {
    res.render("index", {
        title: "Одевайся с ХАЙПОМ!"
    });
});

module.exports = router;
