import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ajax from '../ajax';
import DealList from './DealList';
import DealDetail from './DealDetail';

class App extends React.Component {
  state = {
    deals: [],
    selectedDeal: null
  }

  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState(() => ({
      deals
    }));
  }
  handlePress(dealId) {
    this.setState(() => ({
      selectedDeal: dealId
    }));
  }

  render() {

    {
      if (this.state.selectedDeal) {
        return (<DealDetail dealID={this.state.selectedDeal} />);
      }

      if (this.state.deals.length > 0) {
        return ( <DealList deals={this.state.deals} onItemPress={this.handlePress} /> );
      }

      return (
        <View style={styles.container}>
          <Text>{'The Bake Sale'}</Text>
        </View>
      );

    }

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