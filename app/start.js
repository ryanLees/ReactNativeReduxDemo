"use strict";
import React from "react";
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import LaunchScreen from './common/LaunchScreen';
import AppNavigations from './navigators/navigations';

const store = configureStore({});

function setup(): ReactClass<{}> {

    class Root extends React.Component {

        state: {
            isLoading: boolean,
            store: any
        };

        constructor() {
            super();
            this.state = {
                storeCreated: false,
                storeRehydrated: false,
                store: null
            };
        }

        componentDidMount() {
            // configureStore(
            // // rehydration callback (after async compatibility and persistStore)
            // _ => this.setState({storeRehydrated: true})).then(
            // // creation callback (after async compatibility)
            // store => this.setState({store, storeCreated: true}));
        }

        render() {
            // if (!this.state.storeCreated || !this.state.storeRehydrated) {
            //     return <LaunchScreen/>;
            // }
            return (<Provider store={store}>
                <AppNavigations/>
            </Provider>);
        }
    }

  return Root;
}

module.exports = setup;
