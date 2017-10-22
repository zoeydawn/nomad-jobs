import {
  StackNavigator,
} from 'react-navigation';

import SearchView from './SearchView';
import PostView from './PostView';
import WebView from './WebView';

const Layout = StackNavigator({
  Home: { screen: SearchView },
  Post: { screen: PostView },
  Web: { screen: WebView },
});

export default Layout;
