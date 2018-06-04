import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {getUser} from '../reducers/requestReducer';

class Profile extends Component {

    static navigationOptions = {
        title: 'Profile'
    };

    componentDidMount() {
        this.props.getUser('relferreira')
        .then((response) => {
            console.log("请求返回", response)
        }).catch((error) => {
            console.log("请求错误", error)
        });
    }

    render() {
        const {user, loadingProfile} = this.props;

        if (loadingProfile)
            return <Text>Loading...</Text>;

        const {name, login} = user;
        return (<View>
            <Text>Name: {name}</Text>
            <Text>Login: {login}</Text>
        </View>);
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.request.user,
        loadingProfile: state.request.loadingProfile
    }
}

const mapDispatchToProps = {
    getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
