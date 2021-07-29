import { Types } from "../actions/actionTypes";

const initialState = {
  formData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ALTER:
      return {
        ...state,
        formData: action.payload,
      };
    case Types.DELETE:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
