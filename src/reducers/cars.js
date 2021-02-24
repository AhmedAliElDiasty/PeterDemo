import { CARS } from '../actions/types';

const initialState = {
    cars: [],
};

const reducer = (state = initialState, action) => {
    console.log("stateeeee",state);
    console.log("Actionnnnn",action);
  switch (action.type) {
    case CARS:
      return { ...state, cars:[...state.cars,action.payload]};

    default:
      return state;
  }
};

export default reducer;