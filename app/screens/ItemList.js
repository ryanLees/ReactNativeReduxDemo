'use strict';
import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    StyleSheet,
    Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import { fetchItemsData } from '../actions/items';

const SCREEN_WIDTH = Dimensions.get('window').width;

class ItemList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasErrored: false, //网络请求错误的状态
            isLoading: false   //网络请求中的状态
        };
    }

    static navigationOptions = {
        headerStyle: {
          backgroundColor: 'gray',
      },
      title: '找回密码',
    };

    componentDidMount() {
        console.log('测试');
        // let items = fetchData('http://599167402df2f40011e4929a.mockapi.io/items');
        // this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items');
        this.props.fetchData('https://facebook.github.io/react-native/movies.json');
        console.log('返回参数:',this.props.items);
    }

    //空页面显示
    renderEmptyView = () => {
        return (
           <SafeAreaView style={styles.container}>
               <Text>No data</Text>
           </SafeAreaView>
       );
    }

    renderErrorView(content) {
        return (
           <SafeAreaView style={styles.container}>
               <Text>{content}</Text>
           </SafeAreaView>
       );
    }

    renderItem(data) {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', height: 50, flex: 1}}>
                 <Text>{data.item.title}</Text>
            </View>
        )
    }

    //分割线
    renderSeparator() {
        return(
            <View style={styles.rowdata}/>
        );
    }

    render() {

        if (this.props.hasErrored) {
            return (
               <SafeAreaView style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                   <Text>Sorry! There was an error loading the items</Text>
               </SafeAreaView>
           );
        }

        if (this.props.isLoading) {
            return (
               <SafeAreaView style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                   <Text>Loading…</Text>
               </SafeAreaView>
           );
        }

        return(
            <SafeAreaView style={styles.container} >
                <FlatList
                    style={styles.contentContainer}
                    ref={(flatList)=>this._flatList = flatList}
                    data={this.props.items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.renderEmptyView}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state输出", state.items);
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchItemsData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    contentContainer: {
        width: SCREEN_WIDTH,
        backgroundColor: 'white'
    },
    rowdata: { //下划线的样式
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    }
})
