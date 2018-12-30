import React from "react";
import PostingPage from "./components/postingPage";
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
import postingPage from "./components/postingPage";
import choosingOffers from "./components/choosingOffers";

import RootStack, { Tabs, Drawer } from "./router/router";

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
        "GTWalsheim-Black": require("./assets/fonts/GT-Walsheim-Black.ttf"),
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
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
      return <RootStack />;
    } else {
      return <Spinner />;
    }
  }
}
// const AppStackNavigatior = createStackNavigator(
//   {
//     FirstPage: FirstPage,
//     PostPage: postingPage,
//     ChooseBrand: ChooseBrand,
//     DetailPage: DetailPage
//   },

//   {
//     navigationOptions: {
//       headerTintColor: "rgb(108, 218, 219)",
//       headerStyle: {
//         backgroundColor: "rgb(14, 23, 32)"
//       },
//       headerTextStyle: {
//         fontFamily: "GTWalsheim-Medium",
//         fontWeight: "bold"
//       }
//     }
//   }
// );
// const CustomDrawerComponent = props => (
//   <SafeAreaView style={{ flex: 1 }}>
//     <ScrollView>
//       <DrawerItems {...props} />
//     </ScrollView>
//   </SafeAreaView>
// );
// const AppDrawerNavigatior = createDrawerNavigator(
//   {
//     FirstPage: FirstPage,
//     PostingPage: PostingPage,
//     ChoosingOffers: choosingOffers,

//     ChooseBrand: ChooseBrand,

//     RegisterPage: RegisterPage,
//     PostsPage: PostsPage,
//     DetailPage: DetailPage
//   },
//   {
//     contentComponent: CustomDrawerComponent
//   }
// );
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
