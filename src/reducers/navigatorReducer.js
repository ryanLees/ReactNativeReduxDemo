import { NavigationActions } from 'react-navigation';
import { Navigator } from '../navigators/navigator';

export const nav = (state, action) => {
    return Navigator.router.getStateForAction(action, state) || state;
}
