import { useState } from "react";
import Form from "./Form";
import Table from "./Table";

function MainComponent() {
  const [state, setState] = useState({
    id: "",
    name: "",
    email: "",
    dob: "",
    gender: "",
    profilePic: "",
    education: "",
    password: "",
    confirmPassword: "",
    formData: [],
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
      id: Date.now(),
    });
  }

  function validateEmail() {
    let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(state.email)) return true;
    else return false;
  }

  function validateFile() {
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(state.profilePic)) return false;
    else return true;
  }

  function validatePassword() {
    if (state.password.length < 6) return false;
    return true;
  }

  function handleValidation() {
    if (state.name === "") return false;
    else if (!validateEmail()) return false;
    else if (state.dob === "") return false;
    else if (state.gender === "") return false;
    else if (!validateFile()) return false;
    else if (state.education === "") return false;
    else if (!validatePassword() || state.password !== state.confirmPassword)
      return false;
    else return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (handleValidation()) {
      const newUser = {
        id: state.id,
        name: state.name,
        email: state.email,
        dob: state.dob,
        gender: state.gender,
        profilePic: state.profilePic,
        education: state.education,
        password: state.password,
        confirmPassword: state.confirmPassword,
      };

      const formData = [...state.formData, newUser];
      setState({
        id: "",
        name: "",
        email: "",
        dob: "",
        gender: "",
        profilePic: "",
        education: "",
        password: "",
        confirmPassword: "",
        formData: formData,
      });
    } else {
      alert("You have entered some invalid data!");
    }
  }

  function handleDelete(id) {
    const filteredFormData = state.formData.filter((item) => item.id !== id);
    setState({
      ...state,
      formData: filteredFormData,
    });
  }

  function handleEdit(event,id) {
    const { name, value } = event.target;
    console.log(name + " " + value)
    const formData = state.formData;
    formData.map(function(item) {
      if (item.id === id) {
        item.name = value;
      }
      return item;
    });

    setState({
      ...state,
      [name]: value,
      formData: formData
    });
  }

  return (
    <div>
      <Form
        name={state.name}
        email={state.email}
        dob={state.dob}
        gender={state.gender}
        profilePic={state.profilePic}
        education={state.education}
        password={state.password}
        confirmPassword={state.confirmPassword}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <br /> <br />
      <Table
        items={state.formData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default MainComponent;
