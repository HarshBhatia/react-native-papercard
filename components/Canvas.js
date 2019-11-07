import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Draggable from 'react-native-draggable';
import update from 'immutability-helper';
import elementTypes from '../helpers/elementTypes';
import TextElement from './canvas-elements/TextElement';

import TextController from './TextController';

const DEFAULT_MIN_FONT_SIZE = 4;
const DEFAULT_MAX_FONT_SIZE = 40;

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSelectedElement: 0,
      // pass elements as serialized object to restore canvas state
      elements: this.props.elements,
    };
  }

  generateElement = e => {
    switch (e.type) {
      case elementTypes.TEXT:
        return (
          <Draggable
            key={e.key}
            reverse={false}
            renderColor="transparent"
            pressInDrag={() => {
              this.setState({ currentSelectedElement: e.key });
            }}
            renderSize={100}
            {...e.position}
          >
            <TextElement {...e.props} />
          </Draggable>
        );
      default:
        return null;
    }
  };

  ContextualController = () => {
    const { elements, currentSelectedElement } = this.state;
    const e = elements[currentSelectedElement];
    switch (e.type) {
      case elementTypes.TEXT: {
        const fontSizeOptions = {
          min: DEFAULT_MIN_FONT_SIZE,
          max: DEFAULT_MAX_FONT_SIZE,
          onChange: v => {
            this.setState({
              elements: update(elements, {
                [currentSelectedElement]: {
                  props: { style: { fontSize: { $set: v[0] } } },
                },
              }),
            });
          },
        };
        return (
          <TextController
            fontSizeValue={e.props.style.fontSize}
            fontSizeOptions={fontSizeOptions}
          />
        );
      }
      default:
        return <>null</>;
    }
  };

  render() {
    const { currentSelectedElement } = this.state;
    return (
      <View>
        {/* canvas view  */}
        <View style={styles.canvasViewContainer}>
          {this.state.elements.map(this.generateElement)}
        </View>
        <View style={styles.controlsContainer}>
          <Text>currentSelectedElement: {currentSelectedElement}</Text>
          {/* contextual controls */}
          <this.ContextualController />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  canvasViewContainer: {
    flex: 0.8,
  },
  controlsContainer: {
    flex: 0.2,
    backgroundColor: '#e3e3e322',
  },
});
