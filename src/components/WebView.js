import React from 'react';
import { WebView } from 'react-native';
import PropTypes from 'prop-types';

const Web = ({ navigation }) => (
  <WebView
    source={{ uri: navigation.state.params.url }}
    style={{ marginTop: 20 }}
  />
);

Web.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Web;
