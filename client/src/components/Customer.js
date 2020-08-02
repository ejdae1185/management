import React, { Component } from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Customer extends React.Component{
render(){
    return(
        <TableRow>
                <TableCell> {this.props.id} </TableCell>
                <TableCell> <img src src ={this.props.image} alt= "profile"></img> </TableCell>
                <TableCell> {this.props.name} </TableCell>
                <TableCell> {this.props.age} </TableCell>
                <TableCell> {this.props.day} </TableCell>
                <TableCell> {this.props.job} </TableCell>
        

        </TableRow>
        )
    }
}



export default Customer;


 