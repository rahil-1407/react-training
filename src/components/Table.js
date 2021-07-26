function Table(props) {
  const items = props.items;
  if (items.length) {
    return (
      <div align="center">
        <table>
          <tbody>
            <tr>
              <th>Profile Pic</th>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Education</th>
              <th>Delete</th>
            </tr>
            {items.map((item) => {
              return (
                <tr>
                  <td>
                    <input
                      type="text"
                      value={item.name}
                      name="name"
                      onChange={(e) => props.handleEdit(e,item.id)}
                      style={{ border: 0, textAlign: "center" }}
                    />
                  </td>
                  <td>
                    <input 
                        type="text" 
                        value={item.email}
                        name="email"
                        onChange={(e) => props.handleEdit(e,item.id)}
                        style={{ border: 0, textAlign: "center" }} />
                  </td>
                  <td>
                    <input 
                        type="text" 
                        value={item.dob}
                        name="dob"
                        onChange={(e) => props.handleEdit(e,item.id)}
                        style={{ border: 0, textAlign: "center" }} />
                  </td>
                  <td>
                    <input 
                        type="text" 
                        value={item.gender}
                        name="gender"
                        onChange={(e) => props.handleEdit(e,item.id)}
                        style={{ border: 0, textAlign: "center" }} />
                  </td>
                  <td>
                    <input 
                        type="text" 
                        value={item.education}
                        name="education"
                        onChange={(e) => props.handleEdit(e,item.id)}
                        style={{ border: 0, textAlign: "center" }} />
                  </td>
                  <td>
                    <button onClick={() => props.handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <p>.</p>;
  }
}

export default Table;
