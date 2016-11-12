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
} from 'react-native';
import {
  Components
} from 'exponent';

import { MonoText } from '../components/StyledText';

export default class AlertsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Video',
    },
  }

  render() {
    return (
      <Components.Video
        source={require('../video/mahmoud-bombs.mov')}
        fullscreen={false}
        paused={true}
        ref={(ref) => {
          this.player = ref
        }}
        style={styles.backgroundVideo}
      />
    );
  }

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
