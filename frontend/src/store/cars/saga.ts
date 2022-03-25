import { AxiosResponse } from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import { request } from "../../utils/store";
import { GET_CARS } from "./action-types";
import { getCardsAsync } from "./actions";

function* getCards() {
  try {
    console.log("aqui?");
    const data: AxiosResponse = yield call(request, "/", "GET");
    yield put(
      getCardsAsync({
        data: data.data,
      })
    );
  } catch (error) {
    console.log("error", error);
  }
}

export function* watchGetCards() {
  yield takeLatest(GET_CARS, getCards);
}

