import React from "react";
import Table from "./Table";
import Form from "./Form";

class MainComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      dob: "",
      gender: "",
      profilePic: "",
      education: "",
      password: "",
      confirmPassword: "",
      formData: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  validateEmail() {
    let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(this.state.email)) return true;
    else return false;
  }

  validateFile() {
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(this.state.profilePic)) return false;
    else return true;
  }

  validatePassword() {
    if (this.state.password.length < 6) return false;
    return true;
  }

  handleValidation() {
    if (this.state.name === "") return false;
    else if (!this.validateEmail()) return false;
    else if (this.state.dob === "") return false;
    else if (this.state.gender === "") return false;
    else if (!this.validateFile()) return false;
    else if (this.state.education === "") return false;
    else if (
      !this.validatePassword() ||
      this.state.password !== this.state.confirmPassword
    )
      return false;
    else return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      let formData = [...this.state.formData];
      formData.push({
        name: this.state.name,
        email: this.state.email,
        dob: this.state.dob,
        gender: this.state.gender,
        education: this.state.education,
      });

      console.log(this.state);
      console.log(formData);

      this.setState({
        formData,
        name: "",
        email: "",
        dob: "",
        gender: "",
        profilePic: "",
        education: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      alert("You have entered some invalid data!");
    }
  }

  render() {
    return (
      <div>
        <Form
          name={this.state.name}
          email={this.state.email}
          dob={this.state.dob}
          gender={this.state.gender}
          profilePic={this.state.profilePic}
          education={this.state.education}
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <br /> <br />
        <Table items={this.state.formData} />
      </div>
    );
  }
}

export default MainComponents;
