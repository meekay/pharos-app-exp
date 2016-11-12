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
import {
  Components
} from 'exponent';

import { MonoText } from '../components/StyledText';

export default class FeedScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Feed',
    },
  }

  render() {
    return (
      <View style={{flexDirection: 'row', height: 100}}>
        <WebView
          source={require('./feed.html')}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest} />
      </View>
      /*        <Components.Video
                source={require('../video/mahmoud-bombs.mov')}
                fullscreen={false}
                paused={true}
                ref={(ref) => {
                  this.player = ref
                }}
                style={styles.backgroundVideo}
              />
      */    );
  }

  onShouldStartLoadWithRequest = (event) => {
    // Implement any custom loading logic here, don't forget to return!
    let found = event.url.match(/pharos:\/\/video\/(\d+)/);

    if (found) {
      let videoId = found[1];
      console.log("got pharos URL: " + videoId);
//      this.player.presentFullscreenPlayer();
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
