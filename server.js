const express = require('express');
const bodyPerser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyPerser.json());
app.use(bodyPerser.urlencoded({ extended: true}));


app.get('/api/hello', (req,res) => {
    res.send({massege : "rorkxspwlswk"});
});

app.listen(port, () => console.log (`Listening on prot ${port}`));