import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ScrollView, Dimensions, Text } from 'react-native';
import { Avatar, Title } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const PostView = ({ navigation }) => {
  // console.log('props:', props);
  console.log('props.navigation.state.params.post:', navigation.state.params.post);
  if (!navigation.state.params.post) {
    return (
      <Text>error</Text>
    );
  }

  const {
    company,
    date,
    description,
    logo,
    position,
    tags,
    url
  } = navigation.state.params.post;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <Text>{description}</Text>

    </ScrollView>
  );
};

PostView.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default PostView;
