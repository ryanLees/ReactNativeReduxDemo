import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './fetchReducer';
import { nav } from './navigatorReducer';
import request from './requestReducer';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    nav,
    request
});
