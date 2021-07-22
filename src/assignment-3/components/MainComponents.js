import React from "react";

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
      console.log(this.state);
    } else {
      alert("You have entered some invalid data!");
    }
  }

  render() {
    return (
      <form align="center" onSubmit={this.handleSubmit}>
        <br /> <br />
        <label>Enter your Name: </label>
        <input
          type="name"
          name="name"
          placeholder="Enter Your Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br /> <br />
        <label>Enter your email: </label>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Enter your email"
        />
        <br /> <br />
        <label>Enter your DOB: </label>
        <input
          name="dob"
          value={this.state.dob}
          onChange={this.handleChange}
          type="date"
        />
        <br /> <br />
        <label>Gender: </label>
        <input
          checked={this.state.gender === "male"}
          value="male"
          type="radio"
          name="gender"
          onChange={this.handleChange}
        />
        Male
        <input
          checked={this.state.gender === "female"}
          value="female"
          type="radio"
          name="gender"
          onChange={this.handleChange}
        />
        Female <br /> <br />
        <label>Upload your profile picture: </label>
        <input
          name="profilePic"
          value={this.state.profilePic}
          onChange={this.handleChange}
          type="file"
        />
        <br /> <br />
        <label>Your Highest Education: </label>
        <select
          name="education"
          value={this.state.education}
          onChange={this.handleChange}
        >
          <option value="M.tech">MTech</option>
          <option value="B.tech">BTech</option>
          <option value="diploma">Diploma</option>
          <option value="high-school">High-School</option>
        </select>
        <br /> <br />
        <label>Enter your password: </label>
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          type="password"
        />
        <br /> <br />
        <label>Confirm password: </label>
        <input
          name="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.handleChange}
          type="password"
        />
        <br /> <br />
        <button>Submit</button>
      </form>
    );
  }
}

export default MainComponents;
