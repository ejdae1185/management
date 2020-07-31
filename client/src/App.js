import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Customer from './components/Customer'


const customers =[{ 
  'id' : 1,
  'image' : 'https://placeimg.com/120/120/1',
  'name': '김동민',
  'age': '22',
  'day': '980212',
  'gender' : '남자',
  'job' : '학생'
},
{ 
  'id' : 2,
  'image' : 'https://placeimg.com/120/120/2',
  'name': '김동민2',
  'age': '222',
  'day': '9844512',
  'gender' : '남자',
  'job' : '학생'
} ,
{ 
  'id' : 3,
  'image' : 'https://placeimg.com/120/120/3',
  'name': '김동민3',
  'age': '232',
  'day': '9802232',
  'gender' : '남자',
  'job' : '학생'
}  
]
class App extends Component{
  
 render(){
  return (
    <div>
      {
        customers.map (c=>{
          return(
            <Customer
            key = {c.id}
            id = {c.id}
            image = {c.image}
            name ={ c.name}
            age ={ c.age}
            day ={ c.day}
            gender ={ c.gender}
            job ={ c.job}
      
        
              />
          )
        })
      }
    </div>
  );
}
}

export default App;
