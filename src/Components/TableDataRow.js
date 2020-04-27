import React, { Component } from 'react';

class TableDataRow extends Component {
  showPermission = () => {
    if(this.props.permission === 1){
      return "Admin";
    }else if(this.props.permission === 2){
      return "Moderator";
    }else{
      return "User";
    }
  }

  editClick = () => {
    this.props.editFunctionClick();
    this.props.changeEditUserStatus();
  }

  deleteClick = (idUser) => {
    this.props.deleteClick(idUser);
    
  }

  render() {
    return (
      <tr>                                    
        <td >{ this.props.stt }</td>
        <td> { this.props.userName } </td>
    
        <td>{ this.props.tel }</td>
        <td>{ this.showPermission() }</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning edit" onClick={() => this.editClick() }>
              <i className="fa fa-edit" />
              Edit
            </div>
            <div className="btn btn-danger delete" onClick={(idUser) => this.deleteClick(this.props.id)} >
              <i className="fa fa-remove" />
              Delete                                            
            </div>
          </div>                        
        </td>
        <td>
        </td>
      </tr>
    );
  }
}

export default TableDataRow;