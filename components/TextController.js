import React from 'react';
import { View } from 'react-native';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import PropTypes from 'prop-types';

export default class TextController extends React.Component {
  static propTypes = {
    fontSizeValue: PropTypes.number,
    fontSizeOptions: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
      onChange: PropTypes.func,
    }),
  };

  static defaultProps = {
    fontSizeValue: 16,
    fontSizeOptions: {
      min: 4,
      max: 40,
      onChange: null,
    },
  };

  render() {
    return (
      <View>
        {/* font size slider  */}
        <MultiSlider
          values={[this.props.fontSizeValue]}
          min={this.props.fontSizeOptions.min}
          max={this.props.fontSizeOptions.max}
          onValuesChange={this.props.fontSizeOptions.onChange}
        />
        {/* text align buttons */}
      </View>
    );
  }
}
