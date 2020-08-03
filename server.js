const express = require('express');
const bodyPerser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
const bodyParer = require('body-parser');

app.use(bodyPerser.json());
app.use(bodyPerser.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connecetion = mysql.createConnection({
    host : conf.host,
    user: conf.user,
    password: conf.password,
    port : conf.port,
    database :  conf.database


});
connecetion.connect();



app.get('/api/customers', (req,res) => {
    connecetion.query(
        "SELECT * FROM CUSTOMER",
        (err, rows, feilds) => {
    
    res.send(rows);
        }
    );
});

app.listen(port, () => console.log (`Listening on prot ${port}`));