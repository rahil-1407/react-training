import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  table: {
    maxWidth: "80%",
    textAlign: "center",
    margin: "auto",
  },
});

function Usertable({ items, handleDelete, handleEdit }) {
  const classes = useStyles();
  if (items.length) {
    return (
      <TableContainer component={Paper} className={classes.table}>
         <Table className={classes.table} aria-label="simple table">
          <TableHead>
          <TableRow>
            <TableCell>Profile Picture</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Date of Birth</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Education</TableCell>
            <TableCell align="right">Edit Records</TableCell>
            <TableCell align="right">Delete Records</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
              <TableRow>
              <TableCell align="left"><img src={item.profilePic} height="80" width="80" alt="img" /></TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.dob}</TableCell>
              <TableCell align="right">{item.gender}</TableCell>
              <TableCell align="right">{item.education}</TableCell>
              <TableCell align="right"><Button variant="contained" onClick={() => handleEdit(item.id)}>
                      Edit
                    </Button></TableCell>
              <TableCell align="right"><Button variant="contained" onClick={() => handleDelete(item.id)}>
                Delete
              </Button></TableCell>
              </TableRow>
          ))}
        </TableBody>
          </Table>
        </TableContainer>
    );
  } else {
    return <p>.</p>;
  }
}

export default Usertable;
