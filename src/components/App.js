import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ajax from '../ajax';
import DealList from './DealList';
import DealDetail from './DealDetail';

class App extends React.Component {
  state = {
    deals: [],
    selectedDealId: null
  }

  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState(() => ({
      deals
    }));
  }

  currentDeal () {
    return this.state.deals.find( (deal) => {
      return deal.key === this.state.selectedDealId;
    });
  } 
  
  setSelectedDeal = (dealId) => {
    this.setState({
      selectedDealId: dealId
    });
  }

  unsetSelectedDeal = () => {
    this.setState({
      selectedDealId: null,
    });
  };

  render() {
    {
      if (this.state.selectedDealId) {
        return (<DealDetail initialDealData={this.currentDeal()} onBack={this.unsetSelectedDeal} />);
      }

      if (this.state.deals.length > 0) {
        return ( <DealList deals={this.state.deals} onItemPress={this.setSelectedDeal} /> );
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