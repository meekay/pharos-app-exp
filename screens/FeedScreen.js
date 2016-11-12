import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class FeedScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Feed',
    },
  }

  render() {
    return (
      <WebView
        source={require('./feed.html')}
        onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest} />
    );
  }

  onShouldStartLoadWithRequest = (event) => {
    // Implement any custom loading logic here, don't forget to return!
    let found = event.url.match(/pharos:\/\/video\/(\d+)/);

    if (found) {
      let videoId = found[1];
      console.log("got pharos URL: " + videoId);
      return false;
    } else {
      return true;
    }
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
