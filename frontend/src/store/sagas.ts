import { all, fork } from 'redux-saga/effects'
import {watchGetCards} from './cars/saga'

export default function* rootSaga(){
    yield all([
        fork(watchGetCards)
    ])
}