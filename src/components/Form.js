import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Input, TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto"
  },
  title: {
    flexGrow: 1,
  },
  textField: {
    width: 300,
    textAlign: "center"
  },
}));

function Form(props) {
  const classes = useStyles();
  const {
    name,
    email,
    dob,
    gender,
    education,
    password,
    confirmPassword,
    handleChange,
    handleSubmit,
    handleFileChange
  } = props;
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title} align="center">
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <form
        align="center"
        margin="10"
        className={classes.root}
        id="form"
      >
        <TextField
          className={classes.textField}
          label="Name"
          type="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <br /> <br />
        <TextField
          className={classes.textField}
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <br /> <br />
        <TextField
          className={classes.textField}
          name="dob"
          value={dob}
          onChange={handleChange}
          type="date"
          label="Date of Birth"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br /> <br />
        <span align="left" className={classes.textField}>
          Gender:
          <Radio
            checked={gender === "male"}
            value="male"
            type="radio"
            name="gender"
            onChange={handleChange}
          />
          Male
          <Radio
            checked={gender === "female"}
            value="female"
            type="radio"
            name="gender"
            onChange={handleChange}
          />
          Female <br />
        </span>
        <Input
          className={classes.textField}
          name="profilePic"
          type="file"
          onChange={handleFileChange}
        />
        <br /> <br />
        <TextField
          className={classes.textField}
          select
          label="Your Highest Education"
          name="education"
          value={education}
          onChange={handleChange}
        >
          <MenuItem align="left" value="M.tech">
            MTech
          </MenuItem>
          <MenuItem value="B.tech">BTech</MenuItem>
          <MenuItem value="diploma">Diploma</MenuItem>
          <MenuItem value="high-school">High-School</MenuItem>
        </TextField>
        <br /> <br />
        <TextField
          className={classes.textField}
          label="Password"
          name="password"
          value={password}
          onChange={handleChange}
          type="password"
        />
        <br /> <br />
        <TextField
          className={classes.textField}
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          type="password"
        />
        <br /> <br />
        <Button type="reset" variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
