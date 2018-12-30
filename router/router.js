import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  createAppContainer,
  DrawerActions
} from "react-navigation";

import { Icon } from "react-native-elements";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  View,
  Button,
  TouchableHighlight,
  Animated,
  TouchableWithoutFeedback,
  Image
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import FirstPage from "../components/firstPage";
import ChooseBrand from "../components/chooseBrand";
import PostsPage from "../components/postsPage";
import PostingPage from "../components/postingPage";

export const FirstPageStack = createStackNavigator({
  FirstPage: {
    screen: FirstPage,
    navigationOptions: ({ navigation }) => ({
      title: "My Motor",
      headerStyle: {
        backgroundColor: "rgb(14, 23, 32)",
        elevation: 0,
        borderBottomWidth: 0
      },

      headerTintColor: "rgb(136, 215, 218)",
      headerBackTitle: "Back",
      headerTitleStyle: {
        fontSize: 19,
        shadowColor: "transparent"
      },
      headerRight: (
        <TouchableHighlight
          style={{ paddingRight: 10 }}
          onPress={() => navigation.openDrawer()}
        >
          <Image
            source={require("../assets/menu1.png")}
            fadeDuration={0}
            style={{ width: 30, height: 30 }}
          />
        </TouchableHighlight>
      )
    })
  },
  ChooseBrand: {
    screen: ChooseBrand,
    navigationOptions: ({ navigation }) => ({
      title: "Choose a Brand",
      headerStyle: {
        backgroundColor: "rgb(14, 23, 32)",
        elevation: 0,
        borderBottomWidth: 0
      },

      headerTintColor: "rgb(136, 215, 218)",
      headerBackTitle: "Back",
      headerTitleStyle: {
        fontSize: 19,
        shadowColor: "transparent"
      },
      headerRight: (
        <TouchableHighlight
          style={{ paddingRight: 10 }}
          onPress={() => navigation.openDrawer()}
        >
          <Image
            source={require("../assets/menu1.png")}
            fadeDuration={0}
            style={{ width: 30, height: 30 }}
          />
        </TouchableHighlight>
      )
    })
  },
  PostsPage: {
    screen: PostsPage,
    navigationOptions: ({ navigation }) => ({
      title: "CAR BRAND",
      headerBackTitle: "Back",
      headerRight: (
        <TouchableHighlight
          style={{ paddingRight: 10 }}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" />
        </TouchableHighlight>
      )
    })
  }
});

export const Tabs = createBottomTabNavigator(
  {
    FirstPage: {
      screen: FirstPageStack,
      navigationOptions: {
        tabBarLabel: "FirstPage",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={32} color={tintColor} />
        )
      }
    },
    PostingPage: {
      screen: PostingPage,
      navigationOptions: {
        tabBarLabel: "PostingPage",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="add-circle" size={32} color={tintColor} />
        )
      }
    },
    Favourite: {
      screen: PostingPage,
      navigationOptions: {
        tabBarLabel: "Favourite",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="star" size={32} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "rgb(136, 215, 218)",
      labelStyle: {
        fontSize: 11,
        fontFamily: "GTWalsheim-Medium"
      },
      style: {
        backgroundColor: "rgb(37, 49, 66)"
      }
    }
  }
);

export const CustomDrawer = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const Drawer = createDrawerNavigator(
  {
    Tabs: { screen: Tabs }
  },
  {
    contentComponent: CustomDrawer,
    drawerPosition: "right"
  },
  {}
);

const RootStack = createAppContainer(Drawer);
export default RootStack;
