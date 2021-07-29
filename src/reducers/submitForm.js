const initialState = {
  id: Date.now(),
  name: "",
  email: "",
  dob: "",
  gender: "",
  profilePic: null,
  education: "",
  password: "",
  confirmPassword: "",
};

const submitForm = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT":
      return action.payload;
    default:
      return state;
  }
};

export default submitForm;
