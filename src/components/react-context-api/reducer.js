// This is the initial state of the data layer
export const initialState = {
  isModalOpen: false,
};

// This is where we create the reducer which has state and actions which
// are called to check the current value of the data layer and to make
// changes to the data layer/ global variable
const reducer = (state, action) => {
  // this is a switch case to decide what changes to make in the data
  // layer when we fire off a dispatch
  switch (action.type) {
    case "SET_MODAL":
      return {
        ...state,
        isModalOpen: action.isModalOpen,
      };

    default:
      return state;
  }
};

// Anything that we have to use outside of this file, we export it
export default reducer;
