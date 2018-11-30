import React from "react";
import { observer } from "mobx-react";
import GridView from "react-native-super-grid";

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

  componentDidMount() {
    const { navigation } = this.props;

    const brand_id = navigation.getParam("brand_id");

    store.getBrandPost(brand_id);
  }
  render() {
    if (!store.specificBrandPost) {
      return (
        <View>
          <Text> THERE IS NONE OR LOADING </Text>
        </View>
      );
    }
    // console.log(store.specificBrandPost);
    const posts = store.specificBrandPost.map(post => post);

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
        <Row size={8} style={styles.pageStyle}>
          <GridView
            itemDimension={120}
            spacing={5}
            items={posts}
            renderItem={item => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  this.props.navigation.navigate("DetailPage", {
                    post_id: item.id
                  })
                }
              >
                <Card style={styles.cardStyle}>
                  <CardItem cardBody />
                  {item.img ? (
                    <Image style={styles.cardImg} source={{ uri: item.img }} />
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
                        {item.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row"
                        }}
                      >
                        <Left>
                          <Text style={styles.priceStyle}>{item.price} KD</Text>
                        </Left>
                        <Right>
                          <Button style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>Details</Text>
                          </Button>
                        </Right>
                      </View>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            )}
          />
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
    height: 200
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
  buttonStyle: {
    height: 23,
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
  }
});

export default observer(PostsPage);
