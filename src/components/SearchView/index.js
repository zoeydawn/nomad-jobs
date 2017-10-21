import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';
import GiftedSpinner from 'react-native-gifted-spinner';

import JobList from './JobList';

import { requestJobs } from '../../actions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 500,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Layout extends React.Component {
  componentWillMount() {
    this.props.requestJobs();
  }

  handleSelect = (post) => {
    this.props.navigation.navigate('Post', { post });
  }

  render() {
    const { jobs } = this.props;

    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
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
            <JobList jobs={jobs} handleSelect={this.handleSelect} /> :
            <View style={styles.spinnerContainer}>
              <GiftedSpinner />
            </View>
        }
      </ScrollView>
    );
  }
}

Layout.propTypes = {
  requestJobs: PropTypes.func.isRequired,
  jobs: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
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
