import { combineReducers } from "redux";
import cars from './cars/reducer'


const reducers = combineReducers({
    cars
})
export type AppRootState = ReturnType<typeof reducers>;
export default reducers