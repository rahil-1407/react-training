import { useState } from "react";
import Form from "./Form";
import Usertable from "./Usertable";
import { useDispatch} from 'react-redux';
import { submit } from '../actions/index'

function MainComponent() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    id: Date.now(),
    name: "",
    email: "",
    dob: "",
    gender: "",
    profilePic: null,
    education: "",
    password: "",
    confirmPassword: "",
  });

  const [formData, setFormData] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  function handleFileChange(event) {
    const imgFile = event.target.files[0];
    if (imgFile.type === "image/jpeg" || imgFile.type === "image/jpg") {
      setState({
        ...state,
        profilePic: URL.createObjectURL(event.target.files[0]),
      });
    }
  }

  function validateEmail() {
    let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(state.email)) return true;
    else return false;
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
    else if (state.profilePic === null) return false;
    else if (state.education === "") return false;
    else if (!validatePassword() || state.password !== state.confirmPassword)
      return false;
    else return true;
  }

  function handleSubmit(e) {
    document.getElementById("form").reset();
    e.preventDefault();

    if (handleValidation(e)) {
      dispatch(submit(state))
      const filteredFormData = formData.filter((item) => item.id !== state.id);
      filteredFormData.push(state);
      setFormData(filteredFormData);

      setState({
        id: Date.now(),
        name: "",
        email: "",
        dob: "",
        gender: "",
        profilePic: null,
        education: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      alert("You have entered some invalid data!");
    }
  }

  function handleDelete(id) {
    const filteredFormData = formData.filter((item) => item.id !== id);
    setFormData(filteredFormData);
  }

  function handleEdit(id) {
    const filteredFormData = formData.filter((item) => item.id === id);
    setState(filteredFormData[0]);
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
        handleFileChange={handleFileChange}
      />
      <br /> <br />
      <Usertable
        items={formData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default MainComponent;
