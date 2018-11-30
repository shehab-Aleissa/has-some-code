import React from "react";
import PostsPage from "./components/postsPage";
import DetailPage from "./components/detailPage";
import FirstPage from "./components/firstPage";
import ChooseBrand from "./components/chooseBrand";
import RegisterPage from "./components/registerPage";
import { createStackNavigator } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  View
} from "react-native";
import { Spinner } from "native-base";

export default class App extends React.Component {
  // static navigationOptions = {
  //   headerStyle: { backgroundColor: "#f4511e" },
  //   headerTintColor: "#fff",
  //   headerTitleStyle: { fontWeight: "bold" }
  // };
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentDidMount() {
    try {
      await Expo.Font.loadAsync({
        "GTWalsheim-Medium": require("./assets/fonts/GT-Walsheim-Medium.ttf"),
        "GTWalsheim-Black": require("./assets/fonts/GT-Walsheim-Black.ttf")
      });
      this.setState({ fontLoaded: true });
      console.log("fonts are loaded");
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    if (this.state.fontLoaded) {
      console.log("fonts loaded: ", this.state.fontLoaded);
      return <AppDrawerNavigatior />;
    } else {
      return <Spinner />;
    }
  }
}
const AppStackNavigatior = createStackNavigator(
  {
    PostPage: PostsPage,
    ChooseBrand: ChooseBrand,
    DetailPage: DetailPage,
    FirstPage: FirstPage
  },

  {
    navigationOptions: {
      headerTintColor: "rgb(108, 218, 219)",
      headerStyle: {
        backgroundColor: "rgb(14, 23, 32)"
      },
      headerTextStyle: {
        fontFamily: "GTWalsheim-Medium",
        fontWeight: "bold"
      }
    }
  }
);
const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);
const AppDrawerNavigatior = createDrawerNavigator(
  {
    FirstPage: FirstPage,

    RegisterPage: RegisterPage,
    ChooseBrand: ChooseBrand,
    PostPage: PostsPage,
    DetailPage: DetailPage
  },
  {
    contentComponent: CustomDrawerComponent
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
