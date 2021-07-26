function Form(props) {
  return (
    <form align="center" onSubmit={props.handleSubmit}>
      <br /> <br />
      <label>Enter your Name: </label>
      <input
        type="name"
        name="name"
        placeholder="Enter Your Name"
        value={props.name}
        onChange={props.handleChange}
      />
      <br /> <br />
      <label>Enter your email: </label>
      <input
        type="email"
        name="email"
        value={props.email}
        onChange={props.handleChange}
        placeholder="Enter your email"
      />
      <br /> <br />
      <label>Enter your DOB: </label>
      <input
        name="dob"
        value={props.dob}
        onChange={props.handleChange}
        type="date"
      />
      <br /> <br />
      <label>Gender: </label>
      <input
        checked={props.gender === "male"}
        value="male"
        type="radio"
        name="gender"
        onChange={props.handleChange}
      />
      Male
      <input
        checked={props.gender === "female"}
        value="female"
        type="radio"
        name="gender"
        onChange={props.handleChange}
      />
      Female <br /> <br />
      <label>Upload your profile picture: </label>
      <input
        name="profilePic"
        value={props.profilePic}
        onChange={props.handleChange}
        type="file"
      />
      <br /> <br />
      <label>Your Highest Education: </label>
      <select
        name="education"
        value={props.education}
        onChange={props.handleChange}
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
        value={props.password}
        onChange={props.handleChange}
        type="password"
      />
      <br /> <br />
      <label>Confirm password: </label>
      <input
        name="confirmPassword"
        value={props.confirmPassword}
        onChange={props.handleChange}
        type="password"
      />
      <br /> <br />
      <button>Submit</button>
    </form>
  );
}

export default Form;
