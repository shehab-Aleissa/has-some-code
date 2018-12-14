import React, { Component } from "react";
import { Image, TouchableOpacity, Linking } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { ScrollView } from "react-native-gesture-handler";
import call from "react-native-phone-call";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View
} from "native-base";
import store from "../store/store";

import { observer } from "mobx-react";

class DetailPage extends Component {
  render() {
    const args = {
      number: "60644555", // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
    };
    const { navigation } = this.props;

    const post_id = navigation.getParam("post_id");

    const thePost = store.getPostDetail(post_id);

    // console.log(this.props.navigation.state.params.id);
    return (
      <Grid>
        <Row size={1} />

        <Row size={3}>
          <Content>
            <Card>
              <CardItem />
              <CardItem cardBody>
                {thePost.img ? (
                  <Image
                    source={{ uri: thePost.img }}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                ) : (
                  <Image
                    source={require("../assets/mercedes.jpeg")}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                )}
              </CardItem>
            </Card>
          </Content>
        </Row>
        <Row size={0.5} style={{ backgroundColor: "orange" }}>
          <TouchableOpacity
            onPress={() =>
              call({
                number: thePost.extra_phone_number.toString(),
                prompt: false
              }).catch(console.error)
            }
          >
            <View style={{ paddingLeft: 20 }}>
              <Image
                source={require("../assets/phone.png")}
                style={{ height: 35, width: 35 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://wa.me/965" + thePost.extra_phone_number)
            }
          >
            <View
              style={{
                flex: 1,
                alignItems: "center"
              }}
            >
              <Image
                source={require("../assets/whatsapp.png")}
                style={{ height: 40, width: 40 }}
              />
            </View>
          </TouchableOpacity>
          <Right>
            <TouchableOpacity>
              <View style={{ paddingRight: 20 }}>
                <Image
                  source={require("../assets/sms.png")}
                  style={{ height: 35, width: 35 }}
                />
              </View>
            </TouchableOpacity>
          </Right>
        </Row>
        <Row size={0.5} style={{ backgroundColor: "orange" }}>
          {/* <View
            style={{ flexDirection: "row", backgroundColor: "purple", flex: 1 }}
          > */}
          <Left>
            <Text>
              {" " +
                thePost.brand.name +
                " " +
                thePost.brand_class.name +
                " " +
                thePost.year_of_made}
            </Text>
          </Left>
          <Right>
            <Text>{thePost.Kilometer} KM </Text>
          </Right>
          {/* </View> */}
        </Row>
        <Row size={0.5} style={{ backgroundColor: "yellow" }}>
          <Left>
            <Text>{" " + thePost.price} KD</Text>
          </Left>
          <Right>
            <Text>{thePost.viewers} Viewer </Text>
          </Right>
        </Row>
        <Row size={1} style={{ backgroundColor: "purple" }}>
          <View
            style={{
              flex: 1,
              alignItems: "center"
            }}
          >
            <Text>Highlights</Text>
          </View>
        </Row>

        <Row size={2.5} style={{ backgroundColor: "blue" }}>
          <View
            style={{
              flexDirection: "column"
            }}
          >
            <Text>Description</Text>

            <Text>{thePost.description}</Text>
          </View>
        </Row>

        <Row size={1} />
      </Grid>
    );
  }
}

export default observer(DetailPage);
