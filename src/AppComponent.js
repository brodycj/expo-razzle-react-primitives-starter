// originally based on expo-template-blank

/** @jsx h */
import { createElement as h, Component } from 'react';

import { StyleSheet, Text, View } from 'react-universal-xp';

import Input from 'react-primitives-input';

const Input2 = require('react-primitives-input')

const ScrollView = require('react-primitives-scrollview')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { textLength: 0 };
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text>☆ ☆ ☆</Text>
        <Text>☆ ☆ ☆</Text>
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
        {
          // THANKS for GUIDANCE:
          // https://ariya.io/2013/07/sequences-using-javascript-array
          Array(50).fill(1).map((v, index) => (
            <Text key={index}>Extra row number {index+1}</Text>
          ))
        }
      </View>
      </ScrollView>
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
