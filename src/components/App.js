import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ajax from '../ajax';
import DealList from '../DealList';

class App extends React.Component {
  state = {
    deals: []
  }

  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState({
      deals
    });
  }

  render() {
    return (
      <View>
        {this.state.deals.length > 0
          ? (<DealList deals={this.state.deals} />)
          : (<Text>{'The Bake Sale'}</Text>)
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 40
  }
});

export default App;