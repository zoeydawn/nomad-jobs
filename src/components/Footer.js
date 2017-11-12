import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 25,
  },
});

const Footer = ({ navigate }) => (
  <Icon
    name="logo-github"
    type="ionicon"
    containerStyle={styles.container}
    onPress={() => navigate('Web', { url: 'https://github.com/donbobvanbirt/nomad-jobs' })}
  />
);

Footer.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default Footer;
