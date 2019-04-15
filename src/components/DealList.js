import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class DealList extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <View>
        <Text>{this.deals}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  header: {

  }
});
