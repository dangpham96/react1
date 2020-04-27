import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

  deleteClick = (idUser) => {
    this.props.deleteUser(idUser);
  }

  mapingDataUSer = () => this.props.dataUserProps.map((value, key) => (
    <TableDataRow userName={value.name} key={key}
      stt={key+1}
      tel={value.tel}
      id = {value.id}
      permission={value.permission}
      editFunctionClick = { (user) => this.props.editFunction(value) }
      changeEditUserStatus = { () => this.props.changeEditUserStatus() }
      deleteClick = {(idUser) => this.deleteClick(idUser) }
      
      />
    ))
  render() {
    
    return (
      <div className="col">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { this.mapingDataUSer() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableData;