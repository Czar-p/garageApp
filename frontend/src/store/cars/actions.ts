import { actionObject } from "../../utils/store";
import { FAVORITE, GET_CARS, GET_CARS_ASYNC } from "./action-types";

export const getCars = () => actionObject(GET_CARS);
export const getCardsAsync = (payload:{[key:string]:string}) => actionObject(GET_CARS_ASYNC,payload);
export const onFavorite = (payload:string) => actionObject(FAVORITE, payload)