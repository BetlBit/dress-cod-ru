const express = require('express');
const serverRouter = require("./server/routes/mainRouter");
const stylus = require("stylus");

const port = process.env.PORT || 3000;
const app = express();

app.use(stylus.middleware({
    src: "./public",
    dest: "./public"
}));

app.set("views", "./server/views");
app.set("view engine", "pug");

app.use(express.static("./public"));

app.use("/", serverRouter);

app.get("/", (req, res) => {
    res.send("<h1>Dream Clothes</h1>")
});

app.listen(port);