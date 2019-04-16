import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, StyleSheet } from 'react-native';

import { priceDisplay } from '../utils';
import ajax from '../ajax';


export default class DealDetail extends React.Component {
  static propTypes = {
    initialDealData: PropTypes.object.isRequired
  }

  state = {
    deal: this.props.initialDealData
  }
  
  async componentDidMount() {
    const fullDeal = await ajax.fetchDealDetail(this.state.deal.key);
    this.setState({
      deal: fullDeal
    });
  }

  render() {
    const { deal } = this.state;
    return (
      <View style={styles.deal}>
        <Image style={styles.image} source={{ uri: deal.media[0] }} />
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.footer}>
            <Text style={styles.cause}>{priceDisplay(deal.price)}</Text>
            <Text style={styles.name}>{deal.cause.name}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 50,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
});
