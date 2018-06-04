
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { StyleSheet, Image } from 'react-native';

import itemList from '../screens/ItemList';
import RepoList from '../screens/RepoList';
import Profile from '../screens/Profile';

import RepoDetail from '../screens/RepoDetail';

//TabNavigator
export const AppNavigator = TabNavigator({
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
	tabBarComponent: TabBarBottom,
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


//StackNavigator
export const Navigator = StackNavigator(
  {
	Tab:{screen: AppNavigator},
  },
  {
    navigationOptions:{
		header: null,
		headerBackTitle:null,
		headerTintColor:'#333333',
		showIcon:true,
		swipeEnabled:false,
		animationEnabled:false,
		initialRouteName: 'Tab'
	},
    	mode:'card',
	}
);


let style = StyleSheet.create({
	footImage: {
		width: 25,
		height: 25
	},
});
