import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
  },
});

function getIcon(tags) {
  return tags.indexOf('dev') > -1 ?
    { name: 'code' } :
    { name: 'work' };
}

const JobList = ({ jobs, handleSelect }) => (
  <List containerStyle={styles.container}>
    {
      jobs.map((post) => {
        const {
          id,
          position,
          logo,
          company,
          tags,
        } = post;

        return (
          <ListItem
            key={id}
            title={position}
            subtitle={company}
            leftIcon={logo ? null : getIcon(tags)}
            avatar={logo ? { uri: logo } : null}
            onPress={() => handleSelect(post)}
          />
        );
      })
    }
  </List>
);

JobList.propTypes = {
  jobs: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default JobList;
