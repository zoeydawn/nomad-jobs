import {
  StackNavigator,
} from 'react-navigation';

import SearchView from './SearchView';
import PostView from './PostView';

const Layout = StackNavigator({
  Home: { screen: SearchView },
  Post: { screen: PostView },
});

export default Layout;
