import React from "react";

class Table extends React.Component {
  render() {
    const items = this.props.items;
    if (items.length) {
      return (
        <div align="center">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Education</th>
              </tr>
              {items.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.dob}</td>
                    <td>{item.gender}</td>
                    <td>{item.education}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <p>.</p>
    }
  }
}

export default Table;
