const router1 = require("express").Router();
const mongodb = require('mongodb');
const db = require("./db.js");
router1.post("/add", (req, res) => {
    console.log(req.body); // Получить тело формы
    /* *
    * Добавить в массив новые данные => Перезаписать файл
    * */
    const client = db();
    client.connect(err => {
        if (err) {
            // aaa!!!
        } else {
            const table = client.db("dresscod");
            const col = table.collection("products");
            col.insertOne(req.body, err => {
                if (err) {
                    console.log(err);
                } else {
                    res.send({msg: "done"});
                }
                client.close();
            });
        }
    });
});

// router.get("/vegetables", (req, res) => {
//     const client = db();
//     client.connect(err => {
//         if (err) {
//             res.send({"msg": "Error connection"});
//             client.close();
//         } else {
//             const table = client.db("dresscod");
//             const col = table.collection("products");
//             col.find({"type": "Овощи"}).toArray((error, data) => {
//                 if (error) {
//                     console.log(error);
//                 }
//                 console.log(data);
//                 res.send({"data": data});
//                 client.close();
//             });
//         }
//     });
// });

router1.get("/del/:id", (req, res) => {
    const client = db();
    client.connect((err) => {
        if (err) {
            res.send({"msg": "Error connection"});
            client.close();
        } else {
            const col = client.db("dresscod").collection("products");
            console.log(req.params);
            col.deleteOne({"_id": new mongodb.ObjectId(req.params.id)}, (delErr, result) => {
                if (delErr) {
                    client.close();
                    res.send({"msg": "Все плохо"});
                } else {
                    console.log(result);
                    client.close();
                    res.send({"msg": "ok"});
                }
            });
        }
    });
});

module.exports = router1;