import React, { Component } from "react";
import { Container, Header, Content, Spinner } from "native-base";

export default class TheSpinner extends Component {
  render() {
    return (
      <Content>
        <Spinner />
        <Spinner color="red" />
        <Spinner color="green" />
        <Spinner color="blue" />
      </Content>
    );
  }
}
