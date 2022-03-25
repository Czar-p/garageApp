import { AnyAction } from "redux";
import { CarsState } from "../../interfaces";
import { FAVORITE, GET_CARS_ASYNC } from "./action-types";

const initialState: CarsState = {
  data: [],
  favorites: [],
};

const Cars = (
  state: CarsState = initialState,
  { type, payload }: AnyAction
): CarsState => {
  switch (type) {
    case GET_CARS_ASYNC:
      return { ...state, ...payload };
    case FAVORITE:
      
      const _favorite = state.favorites;
      if (_favorite.includes(payload)) {
        const _index = _favorite.findIndex((e) => e === payload);
        _favorite.splice(_index, _index + 1);
      } else {
      
        _favorite.push(payload);
      }
      return { ...state, favorites: _favorite };
    default:
      return state;
  }
};

export default Cars;
