"use strict";
import React, { Component } from 'react';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import promise from "./promise";
import array from "./array";
import reducers from "../reducers";

//redux与reactNavigator
import { middleware } from '../navigators/redux';

//网络请求
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

//redux数据持久化
import { persistStore, autoRehydrate } from "redux-persist";
import { AsyncStorage } from "react-native";

//axios请求
const client = axios.create({
  baseURL: 'https://facebook.github.io',
  responseType: 'json'
});

//记录redux的actoin
const isDebuggingInChrome = true;
const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true
});

//带本地持久化的store
// const createDemoStore = createStore(reducers, autoRehydrate());

//单纯store
// const createDemoStore = createStore(reducers);

// async function configureStore(onComplete: ?() => void) {
//
//   const store = autoRehydrate()(createDemoStore)(reducers);
//   persistStore(store, { storage: AsyncStorage }, _ => onComplete(didReset));
//   if (isDebuggingInChrome) {
//       window.store = store;
//   }
//   return store;
// }

//带中间件的store
const configureStore = (initialState) => {

  const reduxMiddleware = applyMiddleware(thunk, axiosMiddleware(client));
  return createStore(reducers, initialState, reduxMiddleware);
};

export default configureStore;
