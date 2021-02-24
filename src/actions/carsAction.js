import { CARS } from "./types";

export const setCar = (cars) => async (dispatch) => {
    console.log("Carsssss",cars);
    dispatch({
        type: CARS,
        payload: cars
    });
}
