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
        source={require('./feed.html')}/>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
