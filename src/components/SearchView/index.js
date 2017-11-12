import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import SideMenu from 'react-native-side-menu';

import SearchView from './SearchView';

export default class Menu extends React.Component {
  state = {
    isOpen: false,
  }

  onSideMenuChange = (isOpen) => {
    this.setState({
      isOpen,
    });
  }

  toggleSideMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { navigation } = this.props;

    const MenuComponent = (
      <View style={{ flex: 1, backgroundColor: '#ededed', paddingTop: 50 }}>
        <Text>menu</Text>
      </View>
    );

    return (
      <SideMenu
        isOpen={this.state.isOpen}
        onChange={this.onSideMenuChange}
        menu={MenuComponent}
      >
        <SearchView navigation={navigation} toggleSideMenu={this.toggleSideMenu} />
      </SideMenu>
    );
  }
}

Menu.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Menu.navigationOptions = {
  title: 'Nomad Jobs',
};
