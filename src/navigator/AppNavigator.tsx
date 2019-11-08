/**
|--------------------------------------------------
| Main imports
|--------------------------------------------------
*/
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon } from "native-base";
// screens
import Screens from "../screens";
import { colors } from "../constants/stylesMain";

interface InavOptionHelperProps {
  isFocused: boolean;
  title: string;
  iconType: string | any;
  iconName: string;
}

interface InavOptionHelper {
  title: string;
  tabBarIcon: JSX.Element;
}

const navOptionHelper: Function = ({
  isFocused,
  title,
  iconType,
  iconName
}: InavOptionHelperProps): InavOptionHelper => {
  const color: string = isFocused ? colors.primary : colors.textColor;
  const fontSize: number = isFocused ? 25 : 22;
  return {
    title,
    tabBarIcon: (
      <Icon type={iconType} name={iconName} style={{ fontSize, color }} />
    )
  };
};

const CounterStackNavigator = createStackNavigator(
  {
    Counter: {
      screen: Screens.CounterScreen,
      navigationOptions: {
        header: null
      }
    },
    Submit: {
      screen: Screens.SubmitScoreScreen,
      navigationOptions: {
        title: "Submit score!",
        headerStyle: { backgroundColor: colors.primary },
        headerTitleStyle: { color: colors.whiteSmoke }
      }
    }
  },
  { initialRouteName: "Counter" }
);

const CounterStackBottomNav = createMaterialBottomTabNavigator(
  {
    CounterStack: {
      screen: CounterStackNavigator,
      navigationOptions: navigation => {
        return navOptionHelper({
          isFocused: navigation.navigation.isFocused(),
          title: "Counter",
          iconType: "MaterialIcons",
          iconName: "add-circle-outline"
        });
      }
    },
    LowestScoreStack: {
      screen: Screens.LowestScoreScreen,
      navigationOptions: navigation => {
        return navOptionHelper({
          isFocused: navigation.navigation.isFocused(),
          title: "Lowest scores",
          iconType: "FontAwesome5",
          iconName: "sad-cry"
        });
      }
    },
    HighestScoreStack: {
      screen: Screens.HighestScoreScreen,
      navigationOptions: navigation => {
        return navOptionHelper({
          isFocused: navigation.navigation.isFocused(),
          title: "Highest scores",
          iconType: "FontAwesome5",
          iconName: "smile-wink"
        });
      }
    },
    SupportStack: {
      screen: Screens.SupportScreen,
      navigationOptions: navigation => {
        return navOptionHelper({
          isFocused: navigation.navigation.isFocused(),
          title: "Support",
          iconType: "MaterialIcons",
          iconName: "attach-money"
        });
      }
    }
  },
  {
    initialRouteName: "CounterStack",
    activeColor: colors.primary,
    inactiveColor: colors.textColor,
    barStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: CounterStackBottomNav
    },
    {
      initialRouteName: "Home"
    }
  )
);
