import initialState1 from "./initialState/initialState1";

export const reducer = (state = initialState1, action) => {
  switch (action.type) {
    case "SELECT_CARD":
      return {
		...state,
		selected_img: action.payload
	  };

    default:
      return state;
  }
};
