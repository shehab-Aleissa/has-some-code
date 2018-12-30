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
  Right,
  Icon,
  Left
} from "native-base";

// import { Icon } from "react-native-elements";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  ImageBackground
  // Icon
} from "react-native";
import store from "../store/store";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";

class FirstPage extends React.Component {
  render() {
    if (!store.latestPosts) {
      return (
        <View>
          <Text>LOADINGGG</Text>
        </View>
      );
    }
    if (!store.mostViewed) {
      return (
        <View>
          <Text>LOADIMGGG</Text>
        </View>
      );
    }

    const more = (
      <TouchableOpacity>
        <Card style={styles.cardStyle}>
          <CardItem cardBody />
          <ImageBackground
            style={styles.cardImg}
            source={require("../assets/mercedes.jpeg")}
          />

          <CardItem style={{ backgroundColor: "rgb(14, 23, 32)" }}>
            <Body>
              <Text style={styles.moreTextStyle}>BMW m5</Text>

              <View style={{ flexDirection: "row" }}>
                <Left>
                  <Text style={styles.morePriceStyle}>18000 KD</Text>
                </Left>
                <Right>
                  <Button style={styles.blueButtonStyle}>
                    <Text style={styles.buttonTextStyle}>Details</Text>
                  </Button>
                </Right>
              </View>
            </Body>
          </CardItem>
          <View style={styles.overlay}>
            <Image
              source={require("../assets/add-rounded.png")}
              style={{
                width: "30%",
                height: "30%",
                tintColor: "white",
                position: "absolute",
                top: 55,
                right: 55,
                bottom: 0,
                left: 55
              }}
              size={150}
            />
          </View>
        </Card>
      </TouchableOpacity>
    );

    const latest = store.latestPosts.map(post => (
      <TouchableOpacity key={post.id}>
        <Card style={styles.cardStyle}>
          <CardItem cardBody />
          {post.img0 ? (
            <Image style={styles.cardImg} source={{ uri: post.img0 }} />
          ) : (
            <Image
              style={styles.cardImg}
              source={require("../assets/mercedes.jpeg")}
            />
          )}
          <CardItem
            style={{
              backgroundColor: "rgb(14, 23, 32)"
            }}
          >
            <Body>
              <Text style={styles.textStyle}>
                {post.brand.name} {post.brand.name}
              </Text>

              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Text style={styles.priceStyle}>{post.price} KD</Text>
                </Left>
                <Right>
                  <Button style={styles.blueButtonStyle}>
                    <Text style={styles.buttonTextStyle}>Details</Text>
                  </Button>
                </Right>
              </View>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    ));

    const mostViewed = store.mostViewed.map(post => (
      <TouchableOpacity key={post.id}>
        <Card style={styles.cardStyle}>
          <CardItem cardBody />
          {post.img0 ? (
            <Image style={styles.cardImg} source={{ uri: post.img0 }} />
          ) : (
            <Image
              style={styles.cardImg}
              source={require("../assets/mercedes.jpeg")}
            />
          )}
          <CardItem
            style={{
              backgroundColor: "rgb(14, 23, 32)"
            }}
          >
            <Body>
              <Text numberOfLines={1} style={styles.textStyle}>
                {post.brand.name} {post.brand.name}
              </Text>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Text style={styles.priceStyle}>{post.price} KD</Text>
                </Left>
                <Right>
                  <Button style={styles.blueButtonStyle}>
                    <Text style={styles.buttonTextStyle}>Details</Text>
                  </Button>
                </Right>
              </View>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    ));

    return (
      <Grid style={styles.pageStyle}>
        <ScrollView>
          <Row size={0.5} style={styles.rowContainer}>
            <Button
              transparent
              style={styles.buttonStyle}
              onPress={() => this.props.navigation.navigate("ChooseBrand")}
            >
              <Icon type="FontAwesome" name="car" style={styles.iconStyle} />
              <Text style={styles.iconTextStyle}>Find a Car</Text>
            </Button>
          </Row>
          <Row size={3} style={{ backgroundColor: "rgb(14, 23, 32)" }}>
            <Image
              source={require("../assets/mustang-wallpaper.jpeg")}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </Row>

          <Row size={0.5}>
            <TouchableHighlight>
              <Text style={styles.headerStyle}>Latest</Text>
            </TouchableHighlight>
          </Row>
          <Row size={3} style={{ backgroundColor: "rgb(14, 23, 32)" }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {latest}
              {more}
            </ScrollView>
          </Row>
          <Row size={0.5}>
            <Text style={styles.headerStyle}>Top Viewed</Text>
          </Row>
          <Row size={3} style={{ backgroundColor: "rgb(14, 23, 32)" }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {mostViewed}
              {more}
            </ScrollView>
          </Row>
        </ScrollView>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "rgb(14, 23, 32)",
    paddingBottom: 10
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
  },

  pageStyle: {
    backgroundColor: "rgb(14, 23, 32)"
  },
  cardStyle: {
    height: 160,
    width: 160
  },
  cardImg: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .9)"
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.7
  },
  textStyle: {
    color: "white",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 15
  },
  priceStyle: {
    color: "rgb(204, 204, 204)",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 13
  },
  blueButtonStyle: {
    height: 24,
    width: 65,
    backgroundColor: "transparent",
    borderTopLeftRadius: 90,
    borderWidth: 1,
    borderColor: "rgb(108, 218, 219)"
  },
  buttonTextStyle: {
    fontFamily: "GTWalsheim-Medium",
    fontSize: 9,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: "rgb(108, 218, 219)"
  },
  yearStyle: {
    fontFamily: "GTWalsheim-Medium",
    fontSize: 12,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: "white"
  },
  headerStyle: {
    color: "white",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 22,
    paddingLeft: 10
  },
  moreCardStyle: {
    height: 100,
    width: 100
  },
  moreCardImg: {
    height: "100%",
    width: "100%",
    flex: 1
  },
  moreTextStyle: {
    color: "grey",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 15
  },
  morePriceStyle: {
    color: "grey",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 13
  }
});
export default observer(FirstPage);
