import React from 'react';
import {
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';

import SearchView from './SearchView';
import PostView from './PostView';
import WebView from './WebView';
import SideMenu from './SideMenu';

// class DrawerNav extends React.Component {
//   render() {
//     return (
//       DrawerNavigator({
//         Home: { screen: SearchView },
//         Menu: { screen: SideMenu },
//       })
//     );
//   }
// }

const DrawerNav = DrawerNavigator({
  Search: { screen: SearchView, path: '/search' },
  Menu: { screen: SideMenu, path: '/' },
  // initialRouteName: 'Search',
  // contentOptions: {
  //   activeTintColor: '#e91e63',
  // },
});

const Layout = StackNavigator({
  Home: { screen: DrawerNav },
  Post: { screen: PostView },
  Web: { screen: WebView },
});

export default Layout;
