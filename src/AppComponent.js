// originally based on expo-template-blank

/** @jsx h */
import { createElement as h, Component } from 'react';

import { StyleSheet, Text, View } from 'react-primitives';

import Input from 'react-primitives-input';

const Input2 = require('react-primitives-input')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { textLength: 0 };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Input primitive component test</Text>
        <Input
          type='text'
          style={{ height: 48 }}
          placeholder='Enter text here'
          onChangeText={(text) => this.setState({ textLength:text.length })}
        />
        <Text>First input length: { this.state.textLength }</Text>
        <Input2
          style={{ height: 48 }}
          placeholder='Enter text here'
        />
        <Input
          style={{ height: 48 }}
          placeholder='Enter text here'
        />
        <Input
          type='bogus'
          style={{ height: 48 }}
          placeholder='Enter text here'
        />
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

export default App;
