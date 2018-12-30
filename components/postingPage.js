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
  Thumbnail,
  Form,
  Label,
  Picker,
  Textarea
} from "native-base";
import { CheckBox } from "react-native-elements";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import store from "../store/store";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";
import TheSpinner from "./spinner";
import ImagePicker from "./imagePicker";

class PostingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <Grid>
        <Row size={1} />
        <Row size={8}>
          <Content>
            <Form>
              <ImagePicker />
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Select ar Brand"
                  placeholderStyle={{ color: "black" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>
              </Item>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Select a Model"
                  placeholderStyle={{ color: "black" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>
              </Item>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Select a Year"
                  placeholderStyle={{ color: "black" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>
              </Item>
              <Item>
                <Input placeholder="Kilometers" />
              </Item>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Transmission Gear"
                  placeholderStyle={{ color: "black" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                </Picker>
              </Item>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Roof Type"
                  placeholderStyle={{ color: "black" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                </Picker>
              </Item>
              <Item>
                {this.state.checked == false ? (
                  <Input placeholder="Price" />
                ) : null}

                <CheckBox
                  title="Don't want to metion a price"
                  checked={this.state.checked}
                  onPress={() =>
                    this.setState({ checked: !this.state.checked })
                  }
                />
              </Item>
              <Content padder>
                <Form>
                  <Textarea rowSpan={5} bordered placeholder="Description" />
                </Form>
                <Item>
                  <Input placeholder="Contact Number" />
                </Item>
                <Item>
                  <Input placeholder="Whatsapp Number" />
                </Item>
              </Content>
              <Container
                style={{
                  alignSelf: "center"
                }}
              >
                <Button info>
                  <Text> Post </Text>
                </Button>
              </Container>
            </Form>
          </Content>
        </Row>
        <Row size={1} />
      </Grid>
    );
  }
}
export default observer(PostingPage);
