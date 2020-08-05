import React, { Component } from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';


class Customer extends React.Component{
render(){
    return(
        <TableRow>
                <TableCell> {this.props.id} </TableCell>
                <TableCell> <img src ={this.props.image} alt= "profile"></img> </TableCell>
                <TableCell> {this.props.name} </TableCell>
                <TableCell> {this.props.day} </TableCell>
                <TableCell> {this.props.gender} </TableCell>
                <TableCell> {this.props.job} </TableCell>
                <TableCell> {this.props.adress} </TableCell>
        <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>

        </TableRow>
        )
    }
}



export default Customer;


 