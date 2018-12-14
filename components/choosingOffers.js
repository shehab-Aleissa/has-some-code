import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import Dialog, {
  SlideAnimation,
  ScaleAnimation,
  DialogContent
} from "react-native-popup-dialog";

import { Container, Header, Content, Button, Text, Grid } from "native-base";
import { observer } from "mobx-react";
import { Row } from "react-native-easy-grid";
class ChoosingOffers extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  render() {
    return (
      <Grid>
        <Row size={1} style={{ backgroundColor: "yellow" }} />
        <Row size={1} />

        <Row size={3.5} style={{ alignSelf: "center" }}>
          <Button style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Regular Post</Text>

            <Text style={styles.textStyle}>2 KD</Text>
          </Button>
        </Row>
        <Row size={3.5} style={{ alignSelf: "center" }}>
          <Dialog
            visible={this.state.visible}
            onTouchOutside={() => {
              this.setState({ visible: false });
            }}
            dialogAnimation={
              new ScaleAnimation({
                toValue: 0, // optional
                useNativeDriver: true // optional
              })
            }
          >
            <DialogContent>
              <Text>hey</Text>
            </DialogContent>
          </Dialog>
          <Button
            style={styles.buttonStyle}
            onPress={() => this.setState({ visible: true })}
          >
            <Text style={styles.textStyle}>Regular Post</Text>
            <Text style={styles.textStyle}>2 KD</Text>
          </Button>
        </Row>
        <Row size={1} style={{ backgroundColor: "yellow" }} />
      </Grid>
    );
  }
}
const styles = StyleSheet.create({
  buttonStyle: {
    height: 150,
    width: "75%",
    justifyContent: "center"
  },
  textStyle: {
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center"
  }
});

export default observer(ChoosingOffers);
