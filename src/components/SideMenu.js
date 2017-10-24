import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Text, Image, Button } from 'react-native';

export default class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source="https://d30y9cdsu7xlg0.cloudfront.net/png/5982-200.png"
        // style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}
