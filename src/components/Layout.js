import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Layout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up src to start working on your app!!!!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
