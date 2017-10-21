import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';
import GiftedSpinner from 'react-native-gifted-spinner';

import { requestJobs } from '../actions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  searchInput: {
    width: width - 15,
  },
  searchContainer: {
    paddingTop: 35,
    paddingBottom: 5,
  },
  searchIcon: {
    paddingTop: 35,
  },
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Layout extends React.Component {
  componentWillMount() {
    this.props.requestJobs();
  }

  render() {
    const { jobs } = this.props;
    // if (!jobs.length) {
    //   return (
    //     <View style={styles.spinnerContainer}>
    //       <GiftedSpinner />
    //     </View>
    //   )
    // }
    return (
      <View style={styles.container}>
        <SearchBar
          round
          icon={{ style: styles.searchIcon }}
          containerStyle={styles.searchContainer}
          inputStyle={styles.searchInput}
          onChangeText={() => {}}
          placeholder="Search remote jobs..."
        />
        {
          jobs.length ?
            <Text>jobs</Text> :
            <View style={styles.spinnerContainer}>
              <GiftedSpinner />
            </View>
        }
        {/* <View style={styles.spinnerContainer}>
          <GiftedSpinner />
        </View> */}

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
