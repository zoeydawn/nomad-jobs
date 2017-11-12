import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableHighlight,
  Text as NativeText,
  Linking,
} from 'react-native';
import { Button, Badge, Text } from 'react-native-elements';
import moment from 'moment';
import HTMLView from 'react-native-htmlview';

import Footer from './Footer';

import { requestJobs, toggleLoading } from '../actions';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  companyName: {
    fontSize: 20,
  },
  description: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  tagContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badge: {
    flexWrap: 'wrap',
    marginRight: 3,
    marginTop: 5,
  },
  buttonContainer: {
    paddingBottom: 100,
  },
  link: {
    marginTop: 15,
    marginBottom: 15,
  },
  linkText: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 12,
  },
});

const PostView = ({ navigation, handleSearch }) => {
  if (!navigation.state.params.post) {
    return (
      <Text>error</Text>
    );
  }

  const {
    company,
    date,
    description,
    position,
    tags,
    url,
    id,
  } = navigation.state.params.post;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <Text h4>{position}</Text>
      <Text style={styles.companyName}>{company}</Text>
      <Text>{moment(date).fromNow()}</Text>
      <View style={styles.tagContainer}>
        {
          tags.map((tag, i) => (
            <Badge
              containerStyle={styles.badge}
              value={tag}
              key={`tag-${i}-${tag}`}
              onPress={() => {
                handleSearch(tag);
                navigation.goBack();
              }}
            />
          ))
        }
      </View>

      <View style={styles.description}>
        <HTMLView
          value={description}
          stylesheet={styles}
          onLinkPress={
            (linkAddress) => {
              if (linkAddress.indexOf('@') === -1) {
                navigation.navigate('Web', { url: linkAddress });
              } else {
                Linking.openURL(linkAddress)
                  .catch(err => console.error('An opening email client', err));
              }
            }
          }
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="APPLY NOW"
          onPress={() => navigation.navigate('Web', { url: `https://remoteok.io/l/${id}` })}
        />
        <TouchableHighlight
          style={styles.link}
          onPress={() => navigation.navigate('Web', { url })}
        >
          <NativeText style={styles.linkText}>view on remoteOK.io</NativeText>
        </TouchableHighlight>
        <Footer navigate={navigation.navigate} />
      </View>
    </ScrollView>
  );
};

PostView.propTypes = {
  navigation: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

PostView.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.post.position,
});

const mapDispatchToProps = dispatch => ({
  handleSearch(query) {
    dispatch(toggleLoading(true));
    dispatch(requestJobs(query));
  },
});

export default connect(null, mapDispatchToProps)(PostView);
