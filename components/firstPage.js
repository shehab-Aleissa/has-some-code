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
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
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
    const latest = store.latestPosts.map(post => (
      <TouchableOpacity key={post.id}>
        <Card style={styles.cardStyle}>
          <CardItem cardBody />
          {post.img ? (
            <Image style={styles.cardImg} source={{ uri: post.img }} />
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
                {post.brand.name} {post.brand_class.name}
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
          {post.img ? (
            <Image style={styles.cardImg} source={{ uri: post.img }} />
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
                {post.brand.name} {post.brand_class.name}
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
          <Header
            style={{
              backgroundColor: "rgb(14, 23, 32)",
              borderBottomColor: "transparent"
            }}
          />

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
          <Row size={2.5} style={{ backgroundColor: "rgb(14, 23, 32)" }}>
            <Image
              source={require("../assets/mustang-wallpaper.jpeg")}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </Row>

          <Row size={0.5}>
            <Text style={styles.headerStyle}>Latest</Text>
          </Row>
          <Row size={2.5} style={{ backgroundColor: "rgb(14, 23, 32)" }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {latest}
            </ScrollView>
          </Row>
          <Row size={0.5}>
            <Text style={styles.headerStyle}>Top Viewed</Text>
          </Row>
          <Row size={2.5} style={{ backgroundColor: "rgb(14, 23, 32)" }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {mostViewed}
            </ScrollView>
          </Row>

          <Row size={1} style={{ backgroundColor: "rgb(14, 23, 32)" }} />
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
    flex: 1
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
  }
});
export default observer(FirstPage);
