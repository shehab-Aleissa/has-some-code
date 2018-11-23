import React, { Component } from "react";
import { Image } from "react-native";
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
import { observer } from "mobx-react";

class DetailPage extends Component {
  render() {
    // console.log(this.props.navigation.state.params.id);
    return (
      <View>
        <Text>???ffff</Text>
      </View>
    );

    // <Content>
    //   <Card>
    //     <CardItem />
    //     <CardItem cardBody>
    //       <Image
    //         source={{ uri: "Image URL" }}
    //         style={{ height: 200, width: null, flex: 1 }}
    //       />
    //     </CardItem>
    //     <CardItem>
    //       <Left>
    //         <Button transparent>
    //           <Icon active name="thumbs-up" />
    //           <Text>12 Likes</Text>
    //         </Button>
    //       </Left>
    //       <Body>
    //         <Button transparent>
    //           <Icon active name="chatbubbles" />
    //           <Text>4 Comments</Text>
    //         </Button>
    //       </Body>
    //       <Right>
    //         <Text>11h ago</Text>
    //       </Right>
    //     </CardItem>
    //   </Card>
    // </Content>
  }
}
export default observer(DetailPage);
