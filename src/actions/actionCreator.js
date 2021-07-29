import { Types } from "./actionTypes";

export const ActionCreators = {
  alterUser: (formData) => {
    return {
      type: Types.ALTER,
      payload: formData,
    };
  },
  deleteUser: (formData) => {
    return {
      type: Types.DELETE,
      payload: formData,
    };
  },
};
