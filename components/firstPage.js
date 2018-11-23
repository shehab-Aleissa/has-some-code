import React from "react";

import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Icon,
  Right,
  Left
} from "native-base";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import store from "../store/store";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";

class FirstPage extends React.Component {
  render() {
    return (
      <Grid style={styles.pageStyle}>
        <Header
          style={{
            backgroundColor: "rgb(14, 23, 32)",
            borderBottomColor: "transparent"
          }}
        />

        <Row size={1} style={styles.rowContainer}>
          <Button
            transparent
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate("ChooseBrand")}
          >
            <Icon type="FontAwesome" name="car" style={styles.iconStyle} />
            <Text style={styles.iconTextStyle}>Find a Car</Text>
          </Button>{" "}
        </Row>
        <Row size={8} style={{ backgroundColor: "rgb(14, 23, 32)" }} />

        <Row size={1} style={{ backgroundColor: "rgb(14, 23, 32)" }} />
      </Grid>
    );
  }
}
const styles = StyleSheet.create({
  rowContainer: {
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "rgb(14, 23, 32)"
  },
  buttonStyle: {
    justifyContent: "center",
    flexDirection: "column"
  },
  iconStyle: {
    // fontSize: 21,
    color: "white",
    textAlign: "center"
  },
  iconTextStyle: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "GTWalsheim-Medium"
  }
});
export default observer(FirstPage);
