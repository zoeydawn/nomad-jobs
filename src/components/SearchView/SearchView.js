import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SearchBar, ButtonGroup, Badge } from 'react-native-elements';
import GiftedSpinner from 'react-native-gifted-spinner';

import JobList from './JobList';

import { requestJobs, toggleLoading } from '../../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999999',
  },
  searchContainer: {},
  searchIcon: {},
  spinnerContainer: {
    height: 200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingLeft: 12,
    paddingTop: 12,
  },
  badge: {
    flexWrap: 'wrap',
  },
  searchButton: {
    width: 75,
    position: 'absolute',
    right: 5,
    top: -35,
  },
  noMatches: {
    paddingLeft: 12,
    paddingTop: 12,
  },
  results: {
    fontWeight: '500',
  },
});

const searchItems = ['', 'dev', 'design', 'non tech'];

class SearchView extends React.Component {
  state = {
    search: '',
    width: Dimensions.get('window').width,
  }

  componentWillMount() {
    this.props.requestJobs();
  }

  componentWillReceiveProps(nextProps) {
    const { searchResults } = nextProps;
    if (this.props.searchResults !== searchResults) {
      this.props.toggleLoading(false);
    }
  }

  onLayout = () => {
    const { width } = Dimensions.get('window');
    this.setState({ width });
  }

  handleSelect = (post) => {
    this.props.navigation.navigate('Post', { post, search: this.handleSearch });
  }

  handleSearch = (query) => {
    this.props.requestJobs(query);
  }

  handleType = (search) => {
    this.setState({ search });
  }

  render() {
    const { searchResults, loading, toggleSideMenu } = this.props;
    const { jobs, query = '' } = searchResults;
    const { search, width } = this.state;
    const buttons = ['all jobs', 'dev jobs', 'design/UX', 'non-tech'];

    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        onLayout={this.onLayout}
      >
        <SearchBar
          round
          icon={{ style: styles.searchIcon }}
          containerStyle={styles.searchContainer}
          inputStyle={{ width: width - 100 }}
          showLoadingIcon={false}
          onChangeText={this.handleType}
          placeholder="Search remote jobs..."
        />
        <Badge
          value="search"
          containerStyle={styles.searchButton}
          onPress={() => this.handleSearch(search)}
        />
        <ButtonGroup
          onPress={index => this.handleSearch(searchItems[index])}
          selectedIndex={searchItems.indexOf(query)}
          buttons={buttons}
        />
        {
          !loading && !!jobs.length &&
          <View style={styles.resultsContainer}>
            <Text style={styles.results}>{`${jobs.length} remote ${query} jobs:`}</Text>
          </View>
        }
        {
          loading ?
            <View style={styles.spinnerContainer}>
              <GiftedSpinner />
            </View>
            :
            jobs.length ?
              <JobList
                jobs={jobs}
                handleSelect={this.handleSelect}
                width={width}
              /> :
              <Text style={styles.noMatches}>no matches found</Text>
        }
      </ScrollView>
    );
  }
}

SearchView.propTypes = {
  requestJobs: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
  searchResults: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

SearchView.navigationOptions = {
  title: 'Nomad Jobs',
};

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  requestJobs(query) {
    dispatch(toggleLoading(true));
    dispatch(requestJobs(query));
  },
  toggleLoading(bool) {
    dispatch(toggleLoading(bool));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
