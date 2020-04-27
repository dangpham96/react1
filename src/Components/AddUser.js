import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      permission: ""
    };
  }
  
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name);
    // console.log(value);

    this.setState({
      [name]:value
    });
    // dong goi thanh 1 doi tuong
    // var item = {};
    // item.id = this.state.id;
    // item.name = this.state.name;
    // item.tel = this.state.tel;
    // item.permission = this.state.permission;
    // console.log(item);
    
  }

  checkStatusForm = () => {
    if(this.props.displayForm === true){
      return (
        <div className="col">
          <form>
            <div className="card border-primary mb-3 mt-2">
              <div className="card-header"> Add new user </div>
              <div className="card-body text-primary">                                
                <div className="form-group">
                  <input type="text" className="form-control" onChange={(event) => this.isChange(event)} name="name" placeholder="User name"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Tel" name="tel" onChange={(event) => this.isChange(event)} />
                </div>
                <div className="form-group">
                  <select className="custom-select" name="permission" onChange={(event) => this.isChange(event)}  >
                    <option value>Choose role</option>
                    <option value={1}>Admin</option>
                    <option value={2}>User</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,permission) =>
                      this.props.addNewUser(this.state.name, this.state.tel, this.state.permission)} value="Add User" />
                </div>
              </div>
            </div>
            </form>
        </div>
      );
    }
  } 

  render() {   
    // console.log(this.state);
     
    return (
      
      <div className="card text-left">                  
        {/* { this.displayButtom() } */}
        
        { this.checkStatusForm() }
      </div>
    );
  }
}

export default AddUser;