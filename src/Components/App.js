import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './data';

const uuidv1 = require('uuid/v1');

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditObject : {}
    }
  }

  
  componentWillMount() {
    // kiem tra xem co localStorage nay chua?
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
  }
  

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  editUser = (user) => {
    console.log(user);
    this.setState({
      userEditObject : user
    });
  }

  getNewUserData = (name,tel,permission ) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);

    this.setState({
      data: items
    });
    localStorage.setItem('userData', JSON.stringify(items));

    console.log(items);
  }

  changeStatusForm = () => {
    this.setState(
      {
        displayForm: !this.state.displayForm
      }
    );
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });    
  }

  deleteUser = (idUser) => {
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser);
    this.setState({
      data: tempData
    });    
   
    // day vao du lieu
    localStorage.setItem('userData', JSON.stringify(tempData));
  }
  

  // notice_connecct_test = () => {
  //   console.log("connect sucess");
    
  // }
  render() {

    // localStorage.setItem('userDate', JSON.stringify(DataUser));
    var search_result = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        search_result.push(item);
      }        
    });
    // console.log(search_result);
      
    return (
      <div>
        <Header></Header>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                 getUserEditInfoApp = { (info) => this.getUserEditInfoApp(info) }
                checkConnectProps= {(dl) => this.getTextSearch(dl)}
                connect_app = { () => this.changeStatusForm() }  displayForm={ this.state.displayForm }
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus = { () => this.changeEditUserStatus() }
                userEditObject = {this.state.userEditObject} />

              <TableData dataUserProps = {search_result}
                editFunction = {(user) => this.editUser(user)}
                changeEditUserStatus = { () => this.changeEditUserStatus() }
                deleteUser = {(idUser) => this.deleteUser(idUser) }
                />

              <AddUser displayForm={ this.state.displayForm }
                addNewUser={ (name,tel,permission) => this.getNewUserData(name,tel,permission)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
