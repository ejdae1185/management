const express = require('express');
const bodyPerser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyPerser.json());
app.use(bodyPerser.urlencoded({ extended: true}));


app.get('/api/customers', (req,res) => {
    res.send([{ 
        'id' : 1,
        'image' : 'https://placeimg.com/120/120/any',
        'name': '김동민',
        'age': '22',
        'day': '980212',
        'gender' : '남자',
        'job' : '학생'
      },
      { 
        'id' : 2,
        'image' : 'https://placeimg.com/64/64/5',
        'name': '김동민2',
        'age': '222',
        'day': '9844512',
        'gender' : '남자',
        'job' : '학생'
      } ,
      { 
        'id' : 3,
        'image' : 'https://i.pinimg.com/474x/33/d7/2f/33d72fd5129f6dc849b6ef2bc4c325f0.jpg',
        'name': '김동민3',
        'age': '232',
        'day': '9802232',
        'gender' : '남자',
        'job' : '학생'
      }  
      ]);
});

app.listen(port, () => console.log (`Listening on prot ${port}`));