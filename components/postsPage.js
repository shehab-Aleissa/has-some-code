import React from "react";
import { observer } from "mobx-react";

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
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import store from "../store/store";
import { ScrollView } from "react-native-gesture-handler";

class PostsPage extends React.Component {
  static navigationOptions = {
    title: "My Motor",
    headerTintColor: "rgb(108, 218, 219)",
    headerStyle: {
      backgroundColor: "rgb(14, 23, 32)",
      shadowColor: "transparent",
      elevation: 0,
      borderBottomColor: "transparent",
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      fontFamily: "GTWalsheim-Medium",
      fontSize: 25
    }
  };
  render() {
    const { navigation } = this.props;

    const the_id = navigation.getParam("brand_id");

    store.getBrandPost(the_id);

    if (!store.specificBrandPost)
      return (
        <View>
          <Text> THERE IS NONE OR LOADING </Text>
        </View>
      );
    // console.log(store.specificBrandPost);
    const posts = store.specificBrandPost.map(post => (
      <TouchableOpacity
        key={post.id}
        onPress={() => this.props.navigation.navigate("DetailPage")}
      >
        <Card style={{ height: 300 }}>
          <CardItem cardBody />
          {post.img ? (
            <Image style={styles.cardImg} source={{ uri: post.img }} />
          ) : (
            <Image
              style={styles.cardImg}
              source={require("../assets/mercedes.jpeg")}
            />
          )}
          <CardItem style={{ backgroundColor: "rgb(14, 23, 32)" }}>
            <Body>
              <Text style={styles.textStyle}>
                {post.title}{" "}
                <Text style={styles.yearStyle}>{post.year_of_made}</Text>
              </Text>
              <Text style={styles.priceStyle}>{post.price} KD</Text>
            </Body>
            <Right style={{ paddingLeft: 35 }}>
              <Button
                style={styles.buttonStyle}
                onPress={() => this.props.navigation.navigate("DetailPage")}
              >
                <Text style={styles.buttonTextStyle}>Details</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
    ));

    return (
      <Grid>
        <Header style={{}}>
          <Right>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Right>
        </Header>
        <Row size={9} style={styles.pageStyle}>
          <ScrollView>
            <Col>{posts}</Col>
          </ScrollView>
        </Row>
        <Row size={1} style={{ backgroundColor: "pink" }} />
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  pageStyle: {
    backgroundColor: "rgb(14, 23, 32)"
  },
  cardStyle: {
    backgroundColor: "transparent"
  },
  cardImg: {
    height: "100%",
    width: "100%",
    flex: 1
  },
  textStyle: {
    color: "white",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 20
  },
  priceStyle: {
    color: "rgb(204, 204, 204)",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 20
  },
  buttonStyle: {
    height: 30,
    width: 120,
    backgroundColor: "transparent",
    borderTopLeftRadius: 90,
    borderWidth: 2,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    borderColor: "rgb(108, 218, 219)"
  },
  buttonTextStyle: {
    fontFamily: "GTWalsheim-Medium",
    fontSize: 14,
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
  }
});

export default observer(PostsPage);
