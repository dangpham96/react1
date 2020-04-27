import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      id : props.userEditObject.id,
      name : props.userEditObject.name,
      permission : props.userEditObject.permission,
      tel : props.userEditObject.tel
    }
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  saveButtom = () => {
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.permission = this.state.permission;
    this.props.getUserEditInfo(info);
    this.props.changeEditUserStatus();
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="col-12">
        <form>
          <div className="card text-white bg-secondary mb-3 mt-2">
            <div className="card-header text-center"> Edit user </div>
            <div className="card-body text-primary">                                
              <div className="form-group">
                <input type="text" className="form-control" name="name" placeholder="User name" defaultValue={ this.props.userEditObject.name }
                  onChange={ (event) => this.isChange(event) } />
              </div>
              <div className="form-group">
                <input onChange={ (event) => this.isChange(event) } type="text" className="form-control" placeholder="Tel" name="tel" defaultValue={ this.props.userEditObject.tel } />
              </div>
              <div className="form-group">
                <select className="custom-select" name="permission" defaultValue={ this.props.userEditObject.permission } onChange={ (event) => this.isChange(event) }  >
                  <option value>Choose role</option>
                  <option value={1}>Admin</option>
                  <option value={2}>User</option>
                </select>
              </div>
              <div className="form-group">
                <input type="button" className="btn btn-block btn-primary" value="Save"
                  onClick = { () => this.saveButtom() } />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditUser;