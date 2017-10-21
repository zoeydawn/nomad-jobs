import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestJobs } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Layout extends React.Component {
  componentWillMount() {
    this.props.requestJobs();
  }

  render() {
    console.log('this.props.jobs', this.props.jobs.length);
    return (
      <View style={styles.container}>
        <Text>Open up src to start working on your app!!!!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

Layout.propTypes = {
  requestJobs: PropTypes.func.isRequired,
  jobs: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  jobs: state.jobs,
});

const mapDispatchToProps = dispatch => ({
  requestJobs() {
    dispatch(requestJobs());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
