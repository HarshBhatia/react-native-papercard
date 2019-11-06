import React from "react";
import { Text } from "react-native";

export default class TextElement extends React.Component {
  render() {
    return <Text style={this.props.style}>{this.props.text}</Text>;
  }
}
