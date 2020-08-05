import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
    hidded: {
        display: 'none'
    }
});





class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            Type: '',
            major: '',
            address: '',
            phone:'',
            fileName: '',
            open: false
        
    }
}

    handleFomrSumit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })

        this.setState({
            file: null,
            userName: '',
            Type: '',
            major: '',
            address: '',
            phone:'',
            fileName: ''
        })

    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('Type', this.state.Type);
        formData.append('major', this.state.major);
        formData.append('address', this.state.address);
        formData.append('phone', this.state.phone);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'

            }
        }
        return post(url, formData, config)

    }

    handelOpen = () => {
        this.setState({
            open: true
        });

    }
    handleClose = () => {
        this.setState({
            file: null,
            userName: '',
            Type: '',
            major: '',
            address: '',
            phone:'',
            fileName: '',
            open: false

        });
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
              <Button variant="contained" color="primary" onClick={this.handelOpen}>
                고객 추가하기
              </Button>
              <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>고객 추가</DialogTitle>
                <DialogContent>
                  <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                  <label htmlFor="raised-button-file"> 
                    <Button variant="contained" color="primary" component="span" name="file">
                      {this.state.fileName === ''? "프로필 이미지 선택" : this.state.fileName}
                    </Button>
                  </label><br/><br/>
              <TextField label="학원명" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
              <TextField label="학원종류" type="text" name="Type" value={this.state.Type} onChange={this.handleValueChange} /><br/>
              <TextField label="분야" type="text" name="major" value={this.state.major} onChange={this.handleValueChange} /><br/>
              <TextField label="주소" type="text" name="address" value={this.state.address} onChange={this.handleValueChange} /><br/>
              <TextField label="전화번호" type="text" name="phone" value={this.state.phone} onChange={this.handleValueChange} /><br/>
              </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
              <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
            </DialogActions>
          </Dialog>
        </div>
      )
    }
  }

export default withStyles(styles)(CustomerAdd);