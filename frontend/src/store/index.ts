import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './reducers'
import rootSaga from './sagas'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'cars'
    ],
    blacklist: [
    ],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const sagaMiddleware = createSagaMiddleware()
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor }