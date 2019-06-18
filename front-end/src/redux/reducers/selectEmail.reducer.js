import selectEmailActions from "../actions/selectEmail.action";

const initialState = {
  id: null,
  name: "",
  email: "",
  body: "",
  subject: "",
  date: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case selectEmailActions.SELECT_EMAIL:
      return payload;
    default:
      return state;
  }
};