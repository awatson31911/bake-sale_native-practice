import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ajax from '../ajax';
import SearchBar from './SearchBar';
import DealList from './DealList';
import DealDetail from './DealDetail';

class App extends React.Component {
  state = {
    deals: [],
    dealsFromSearch: [],
    selectedDealId: null
  }

  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState({ deals });
  }

  currentDeal() {
    return this.state.deals.find((deal) => {
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

  getDealsFromSearch = async (searchTerm) => {
    let dealsFromSearch = []
    if(searchTerm){
      dealsFromSearch = await ajax.fetchQueryDeals(searchTerm);
    }
    this.setState({ dealsFromSearch });
  }

  render() {
    {
      if (this.state.selectedDealId) {
        return (<DealDetail initialDealData={this.currentDeal()} onBack={this.unsetSelectedDeal} />);
      }

      let currentDeals = this.state.dealsFromSearch.length > 0 
      ? this.state.dealsFromSearch
      : this.state.deals

      if (currentDeals.length > 0) {
        return (
          <View style={styles.main}>
            <SearchBar getDealsFromSearch={this.getDealsFromSearch}/>
            <DealList deals={currentDeals} onItemPress={this.setSelectedDeal}
            />
          </View>
        );
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
    alignItems: 'center',
  },
  main: {
    marginTop: 30,
  },
  header: {
    fontSize: 40,
  },
});


export default App;