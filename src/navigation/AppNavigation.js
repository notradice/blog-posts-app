import React from "react";
import { Platform } from "react-native";
import { THEME } from "../theme";

import { createAppContainer, ThemeColors } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";
import { BookedScreen } from "../screens/BookedScreen";

import { Ionicons } from "@expo/vector-icons";

const NavigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
  },
};

const PostNavigation = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen,
  },
  NavigatorOptions
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen,
  },
  NavigatorOptions
);

const bottomTabsConfig = {
  Post: {
    screen: PostNavigation,
    navigationOptions: {
      tabBarLabel: "Все",
      tabBarIcon: (info) => (
        <Ionicons name="ios-albums" size={25} color={info.tintColor} />
      ),
    },
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: "Избранные",
      tabBarIcon: (info) => (
        <Ionicons name="ios-star" size={25} color={info.tintColor} />
      ),
    },
  },
};

const BottomNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(bottomTabsConfig, {
        activeTintColor: "#fff",
        shifting: true,
        barStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
      })
    : createBottomTabNavigator(bottomTabsConfig, {
        tabBarOptions: {
          activeTintColor: THEME.MAIN_COLOR,
        },
      });

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen,
  },
  NavigatorOptions
);

const CreateNavigator = createStackNavigator(
  {
    Create: CreateScreen,
  },
  NavigatorOptions
);

const MainNavigator = createDrawerNavigator(
  {
    Posts: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: "Главная",
        drawerIcon: <Ionicons name="home-outline" size={22} />,
      },
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: "Новый пост",
        drawerIcon: <Ionicons name="create-outline" size={22} />,
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: "О приложении",
        drawerIcon: <Ionicons name="information-circle-outline" size={22} />,
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
        fontFamily: "open-regular",
        fontSize: 18,
        // borderLeftColor: THEME.MAIN_COLOR,
        // borderLeftWidth: 3,
        // paddingLeft: 15,
      },
    },
  }
);

export const AppNavigation = createAppContainer(MainNavigator);
