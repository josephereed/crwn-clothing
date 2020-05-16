import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const middleware = [];

if (process.env.NODE_ENV === 'develoment') {
  middleware.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

export default store;