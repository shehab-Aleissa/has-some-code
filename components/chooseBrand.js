import React from "react";

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
  Left,
  Item,
  Input,
  List,
  ListItem,
  Thumbnail
} from "native-base";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import store from "../store/store";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";
import TheSpinner from "./spinner";
class ChooseBrand extends React.Component {
  render() {
    if (store.filteredBrands) {
      const items = store.filteredBrands
        .slice()
        .sort(function(a, b) {
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        })
        .map(item => item);

      return (
        <Grid>
          <Row size={1} />

          <Row size={1} style={styles.searchRowStyle}>
            <Content style={{ paddingTop: 10 }}>
              <Item rounded>
                <Input
                  style={styles.inputStyle}
                  placeholder="Choose a Brand"
                  placeholderTextColor="white"
                  onChangeText={e => store.changeBrandValue(e)}
                />
              </Item>
            </Content>
          </Row>

          <Row size={7} style={styles.rowStyle}>
            <GridView
              itemDimension={70}
              items={items}
              renderItem={item => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("PostsPage", {
                      brand_id: item.id
                    })
                  }
                >
                  <View style={styles.itemContainer}>
                    <Image
                      style={styles.itemImage}
                      source={{ uri: item.logo }}
                    />
                    <Text style={styles.itemName}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </Row>

          <Row size={1} />
        </Grid>
      );
    } else {
      return <TheSpinner />;
    }
  }
}

const styles = StyleSheet.create({
  searchRowStyle: {
    backgroundColor: "rgb(14, 23, 32)"
  },
  bodyRowStyle: {
    backgroundColor: "rgb(14, 23, 32)",
    justifyContent: "center",
    alignContent: "center"
  },
  textStyle: {
    color: "white"
  },
  inputStyle: {
    color: "white"
  },
  rowStyle: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "rgb(14, 23, 32)"
  },
  gridView: {
    flex: 1,
    paddingTop: 15
  },
  itemContainer: {
    justifyContent: "flex-start",
    borderRadius: 5,
    height: 100,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center"
  },
  itemName: {
    fontSize: 16,
    color: "white",
    fontFamily: "GTWalsheim-Medium",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center"
  },
  itemImage: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignContent: "center"
  }
});

export default observer(ChooseBrand);
