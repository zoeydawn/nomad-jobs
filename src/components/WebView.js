import React from 'react';
import { WebView } from 'react-native';

const Web = ({ navigation }) => {
  console.log('uri:', navigation.state.params.url);
  return (
    <WebView
      source={{ uri: navigation.state.params.url }}
      style={{ marginTop: 20 }}
    />
  );
}


export default Web;
