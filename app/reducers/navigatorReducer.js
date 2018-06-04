import { NavigationActions } from 'react-navigation';
import { AppNavigator, Navigator } from '../navigators/navigator';
// import DtlWebView from '../../containers/webview/dtl-webview';

const initialNavState = {
    index: 0,
    routes: [{
        key: 'HomeScreen',
        routeName: 'HomeScreen',
    }, {
        key: 'RepoScreen',
        routeName: 'RepoScreen',
    }, {
        key: 'Soonshow',
        routeName: 'Soonshow',
    }, {
        key: 'ProfileScreen',
        routeName: 'ProfileScreen',

    }, {
        key: 'RepoDetail',
        routeName: 'RepoDetail',
    }],
};

export const nav = (state, action) => {
    return Navigator.router.getStateForAction(action, state) || state;
}
