import React, {Component} from 'react';
import {render} from 'react-dom';
class login extends Component {
  render() {
    return (
      <div className="container">
      <table className="tableBorder" width="800">
      <thead className="tableheader">
        <tr>
            <th>To Do App</th>
          </tr>
        </thead>
        <tbody>
        <tr>
      <td>
      Write Redux-thunk middleware
      </td>
        </tr>
    </tbody>
      </table>
      </div>
    );
  }
}
export default login;
