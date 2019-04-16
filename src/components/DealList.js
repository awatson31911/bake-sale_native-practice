import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import DealItem from './DealItem';


class DealList extends React.Component {
  static propTypes = {
    deals: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired
  }

  componentDidMount() {

  }

  render() {
    return (
      <FlatList
        data={this.props.deals}
        renderItem={
          ( {item} ) => <DealItem deal={item} onItemPress={this.props.onItemPress} />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  header: {

  }
});

export default DealList;