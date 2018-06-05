
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { StyleSheet, Image } from 'react-native';

import itemList from '../screens/ItemList';
import RepoList from '../screens/RepoList';
import Profile from '../screens/Profile';

import RepoDetail from '../screens/RepoDetail';

//TabNavigator
export const AppNavigator = createBottomTabNavigator({
	HomeScreen: {screen: itemList, navigationOptions: {
		tabBarLabel: 'Home',
		tabBarIcon: ({ tintColor, focused }) => (
			<Image resizeMode='contain'
				style={[style.footImage, {tintColor: tintColor}]}
			/>
		)
	}},
	RepoScreen: {screen: RepoList, navigationOptions: {
		tabBarLabel: 'Repo',
		tabBarIcon: ({ tintColor, focused }) => (
				<Image style={[style.footImage, {tintColor: tintColor}]}
					resizeMode='contain'
				/>
		)
	}},
    ProfileScreen: {screen: Profile, navigationOptions: {
		tabBarLabel: 'Profile',
		tabBarIcon: ({ tintColor, focused }) => (
			<Image resizeMode='contain'
				style={[style.footImage, {tintColor: tintColor}]}
			/>
		)
	}}
},{
	tabBarPosition: 'bottom', // 设置tabbar的位置
	swipeEnabled: false, // 是否允许在标签之间进行滑动
	animationEnabled: false, // 是否在更改标签时显示动画
	indicatorStyle: {backgroundColor: 'transparent'},
	tabBarOptions: {
		showIcon: true, // 是否显示图标，安卓默认关闭
		style: {
			height: 49,
			backgroundColor: '#fff',
		},
		activeTintColor:'red', // label和icon的前景色 活跃状态下（选中）
		inactiveTintColor: 'gray', // label和icon的前景色 不活跃状态下(未选中)
		activeBackgroundColor: 'white', // label和icon的背景色 活跃状态下
		inactiveBackgroundColor: 'white', // label和icon的背景色 不活跃状态下
	},
});



const StackOptions = ({navigation}) => {
    console.log(navigation);
    let {state, goBack} = navigation;

    // 用来判断是否隐藏或显示header
    const visible = state.params.isVisible;
    let header;
    if (visible === true) {
        header = null;
    }
    const headerStyle = {
        backgroundColor: '#4ECBFC'
    };
    const headerTitle = state.params.title;
    const headerTitleStyle = {
        fontSize: FONT_SIZE(20),
        color: 'white',
        fontWeight: '500'
    }
    const headerBackTitle = false;
    const headerLeft = (<Button isCustom={true} customView={
		<Icon
        name = 'ios-arrow-back'
        size = { 30 }
        color = 'white'
        style = {{marginLeft:13}}
        />}
		onPress={() => {
            goBack()
        }}/>);
    return {
        headerStyle,
        headerTitle,
        headerTitleStyle,
        headerBackTitle,
        headerLeft,
        header
    }
};


//StackNavigator
let routes = {
	Tab:{
		screen: AppNavigator,
	},
	RepoDetail:{
		screen: RepoDetail,
		navigationOptions: ({navigation}) => StackOptions({navigation})
	},
};

export const Navigator = createStackNavigator(
	routes
);


let style = StyleSheet.create({
	footImage: {
		width: 25,
		height: 25
	},
});
