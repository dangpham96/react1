import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      temValue: '',
      userObj: {}
    }
  }

  getUserEditInfo = (info) => {
    this.setState({
      userObj: info
    });

    this.props.getUserEditInfoApp(info);
  }
  
  isShowEditForm = () => {
    if(this.props.editUserStatus === true){
      return <EditUser changeEditUserStatus = { () => this.props.changeEditUserStatus() } 
        userEditObject = { this.props.userEditObject }
        getUserEditInfo = { (info) => {this.getUserEditInfo(info)} }
        />
    }
  } 

  displayButtom = () => {
    if(this.props.displayForm === true){
      return <div className="btn btn-block btn-outline-secondary" onClick= { () => this.props.connect_app() }>Close</div>      
    }else {
      return <div className="btn btn-block btn-outline-info" onClick= { () => this.props.connect_app() }>Add User</div>
    }
  }

  isChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      temValue: event.target.value
    });
    this.props.checkConnectProps(this.state.temValue);
  }
  render() {
    return (
      <div className="col-12">
        <div className="row">
          { this.isShowEditForm() }
        </div>
        <div className="form-group">
          <div className="btn-group">
            <input type="text" className="form-control" placeholder="Search" onChange={ (event) => this.isChange(event)} />
            <div className="btn btn-info" onClick= {(dl) => this.props.checkConnectProps(this.state.temValue)}>Search</div>
          </div>
          <div className="btn-group1"> 
             { this.displayButtom() }            
          </div>
        </div>
        <hr />
      </div>   
    );
  }
}

export default Search;