import {
  createRouter,
} from '@exponent/ex-navigation';

import AlertsScreen from '../screens/AlertsScreen';
import AnswerScreen from '../screens/AnswerScreen';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  feed: () => FeedScreen,
  alerts: () => AlertsScreen,
  answer: () => AnswerScreen,
  profile: () => ProfileScreen,
  resources: () => ResourcesScreen,
  rootNavigation: () => RootNavigation,
}));
