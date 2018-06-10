import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'native-base';
import { Starter, Login, Register } from '.';

var UnauthNav = TabNavigator (
  {
    Starter: {screen: Starter},
  	Login: {screen: Login},
    Register: {screen: Register},
    },
    {
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
    }),
  }
);

export { UnauthNav };
