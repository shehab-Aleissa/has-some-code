import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
// import authStore from "../stores/authStore";

import store from "../store/store";
//

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";

import imageBg from "../assets/registerBackground.jpeg";
import logo from "../assets/logo.jpg";
// import logo from "./logo.png";
import Icon from "react-native-vector-icons/Ionicons";
import { Container } from "native-base";

//
const { width: WIDTH } = Dimensions.get("window");

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPass: true,
      press: false
    };
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  };

  render() {
    return (
      <Container>
        <ImageBackground source={imageBg} style={styles.backgroundContainer}>
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "red",
              opacity: 0.3
            }}
          >
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.logoText}>My Motor</Text>
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name={"ios-person-outline"}
                size={28}
                color={"rgba(255, 255, 255, 0.7)"}
                style={styles.inputIcons}
              />
              <TextInput
                style={styles.input}
                placeholder={"Username"}
                placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
                underlineColorAndroid="transparent"
                onChangeText={username => this.setState({ username })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name={"ios-lock-outline"}
                size={28}
                color={"rgba(255, 255, 255, 0.7)"}
                style={styles.inputIcons}
              />
              <TextInput
                style={styles.input}
                placeholder={"Password"}
                secureTextEntry={this.state.showPass}
                placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
              />
              <TouchableOpacity
                style={styles.btnEye}
                onPress={this.showPass.bind(this)}
              >
                <Icon
                  name={
                    this.state.press == false
                      ? "ios-eye-outline"
                      : "ios-eye-off-outline"
                  }
                  size={26}
                  color={"rgba(255, 255, 255, 0.7)"}
                />
              </TouchableOpacity>
              to="/profile/" component={TouchableOpacity}
              style={styles.btnLogin}
              onPress=
              {() =>
                authStore.loginUser(this.state.username, this.state.password)
              }
              ><Text style={styles.text}>Login</Text>
              to="/profile/" component={TouchableOpacity}
              style={styles.btnLogin}
              onPress=
              {() =>
                authStore.registerUser(this.state.username, this.state.password)
              }
              ><Text style={styles.text}>Register</Text>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50
  },
  logo: {
    width: 120,
    height: 120,
    opacity: 0.8
  },
  logoText: {
    color: "white",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.8
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.7)"
  },
  inputIcons: {
    position: "absolute",
    top: 7,
    left: 19
  },
  btnEye: {
    position: "absolute",
    top: 7,
    right: 19
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    backgroundColor: "#5BB9DF",
    marginTop: 20
  },
  text: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    textAlign: "center"
  }
});

export default observer(RegisterPage);
