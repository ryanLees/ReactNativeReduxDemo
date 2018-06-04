import React, {Component} from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {connect} from 'react-redux';
import {StyleSheet, Image, View, Text, SafeAreaView} from 'react-native';

import {addListener} from '../store/configureStore';
import {Navigator} from './navigator';

import { navigationPropConstructor } from './redux';

import { initializeListeners } from 'react-navigation-redux-helpers';

class AppNavigations extends React.Component {

    componentDidMount() {
        initializeListeners('root', this.props.nav);
    }

    render() {
        const {dispatch, nav} = this.props;
        const navigation = navigationPropConstructor(dispatch, nav);
        return <Navigator navigation={navigation}/>;
    }
}

const mapStateToProps = state => ({nav: state.nav});

export default connect(mapStateToProps)(AppNavigations);
