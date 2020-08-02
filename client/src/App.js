import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { render } from '@testing-library/react';
import Customer from './components/Customer'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CirucularPrograss from '@material-ui/core/CircularProgress';



const styles = theme => ({

  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
     overflowX : "auto"
    
  },
  table : {
    minWidth : 1080
  },
  progress : {
    margin : theme.spacing.unit * 2
  }
})

class App extends Component{

  state = {
    customers : "",
    completed: 0
  }
  
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then( res => this.setState({customers : res}))
      .catch( err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  progress = () => {
    const {completed} = this.state;
    this. setState ({completed : completed >=100 ? 0 : completed + 1});
  }

 render(){
   const {classes} =  this.props;
  return (
    <Paper className ={classes.root}>
    <Table className = {classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>학원명</TableCell>
          <TableCell>형태</TableCell>
          <TableCell>분야</TableCell>
          <TableCell>주소</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {this.state.customers ? this.state.customers.map(c=> {
    return (  <Customer  key ={c.id} id = {c.id} name = {c.name} day ={c.day} age = {c.age} job={c.job}/> );
      }) :
      <TableRow>
        <TableCell colSpan = "6" align= "center">
          <CirucularPrograss className={classes.progress} variant="determinate" value ={ this.state.completed}/>

        </TableCell>
      </TableRow>
      
      }
</TableBody> 
 </Table>
</Paper>
  );
   }
  }


export default withStyles(styles)(App);
