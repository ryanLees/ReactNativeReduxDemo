import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {getRepoDetail} from '../reducers/requestReducer';

class RepoDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
    }

    static navigationOptions = {
        title: 'RepoDetail'
    };
    componentDidMount() {
        // this.props.getRepoDetail('relferreira', 'react-native-redux')
    }
    render() {
        const {repoInfo, loadingInfo} = this.props;
        if (loadingInfo)
            return <Text>Loading...</Text>;

        const {name, full_name, description, forks_count, stargazers_count} = repoInfo;

        return (<View>
            <Text>{name}</Text>
            <Text>{full_name}</Text>
            <Text>{description}</Text>
            <Text>Forks: {forks_count}</Text>
            <Text>Stars: {stargazers_count}</Text>
        </View>);
    }
}

const mapStateToProps = (state) => ({repoInfo, loadingInfo});

const mapDispatchToProps = {
    getRepoDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail);
