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

const JobList = ({ jobs, handleSelect }) => (
  <List containerStyle={styles.container}>
    {
      jobs.map((item) => {
        const {
          id,
          position,
          logo,
          company,
        } = item;

        return (
          <ListItem
            key={id}
            title={position}
            subtitle={company}
            leftIcon={logo ? null : { name: 'work' }}
            avatar={logo ? { uri: logo } : null}
            onPress={() => handleSelect(item)}
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
