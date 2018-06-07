import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView, Dimensions, Button} from 'react-native';
import {connect} from 'react-redux';
import {listRepos} from '../reducers/requestReducer';
import { NavigationActions } from 'react-navigation';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class RepoList extends Component {

    static navigationOptions = {
      title: 'Repositories'
    };

    componentDidMount() {
        this.props.listRepos('movies')
        .then((response) => {
            console.log("请求返回", response)
        }).catch((error) => {
            console.log("请求错误", error)
        });
    }

    renderItem = (item) => {
        return (
            <View style={styles.item}>
                <Button title={item.item.title}/>
            </View>
        );
    }

    //空页面显示
    renderEmptyView = () => {
        return (
           <SafeAreaView style={styles.container}>
               <Text>No data</Text>
           </SafeAreaView>
       );
    }

    render() {
        return (
            <SafeAreaView style={styles.container} >
                <FlatList
                    style={styles.contentContainer}
                    ref={(flatList)=>this._flatList = flatList}
                    data={this.props.repos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.renderEmptyView}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentContainer: {
        width: SCREEN_WIDTH,
        backgroundColor: 'white'
    },
    item: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});


const mapStateToProps = state => {

  let storedRepositories = state.request.repos.movies;
  console.log("repoList:", storedRepositories)
  return {
    repos: storedRepositories
  };
};

const navigationAction = NavigationActions.navigate({
  action: NavigationActions.navigate({ routeName: 'RepoDetail'})
})

const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
