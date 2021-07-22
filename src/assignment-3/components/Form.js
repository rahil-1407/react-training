import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form align="center" onSubmit={this.props.handleSubmit}>
                <br /> <br />
                <label>Enter your Name: </label>
                <input
                    type="name"
                    name="name"
                    placeholder="Enter Your Name"
                    value={this.props.name}
                    onChange={this.props.handleChange}
                />
                <br /> <br />
                <label>Enter your email: </label>
                <input
                    type="email"
                    name="email"
                    value={this.props.email}
                    onChange={this.props.handleChange}
                    placeholder="Enter your email"
                />
                <br /> <br />
                <label>Enter your DOB: </label>
                <input
                    name="dob"
                    value={this.props.dob}
                    onChange={this.props.handleChange}
                    type="date"
                />
                <br /> <br />
                <label>Gender: </label>
                <input
                    checked={this.props.gender === "male"}
                    value="male"
                    type="radio"
                    name="gender"
                    onChange={this.props.handleChange}
                />
                Male
                <input
                    checked={this.props.gender === "female"}
                    value="female"
                    type="radio"
                    name="gender"
                    onChange={this.props.handleChange}
                />
                Female <br /> <br />
                <label>Upload your profile picture: </label>
                <input
                    name="profilePic"
                    value={this.props.profilePic}
                    onChange={this.props.handleChange}
                    type="file"
                />
                <br /> <br />
                <label>Your Highest Education: </label>
                <select
                    name="education"
                    value={this.props.education}
                    onChange={this.props.handleChange}
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
                    value={this.props.password}
                    onChange={this.props.handleChange}
                    type="password"
                />
                <br /> <br />
                <label>Confirm password: </label>
                <input
                    name="confirmPassword"
                    value={this.props.confirmPassword}
                    onChange={this.props.handleChange}
                    type="password"
                />
                <br /> <br />
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;