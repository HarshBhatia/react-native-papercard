import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import elementTypes from '../helpers/elementTypes';
import Canvas from '../components/Canvas';
import elements from '../helpers/sampleCanvasElementsObject';

export default class EditorScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Canvas elements={elements} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
