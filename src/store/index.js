import { createStore, applyMiddleware, compose } from 'redux';
import { mainReducer } from './reducers';

export const appStore = createStore(
    mainReducer
);