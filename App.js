import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import RecyclerView from 'react-native-recycler-list';
import data from './data.json';

const formattedData = data.map((row, index) => {
  return {...row, name: index + ' ' + row.name};
});

class ListRow extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    const row = <ListRow name={'Jai Shree Ram'} />;
    console.log('ROW IS : ', row);
    return (
      <View style={styles.container}>
        <RecyclerView
          style={styles.container}
          // row={<ListRow name={'Jai Shree Ram'} />}
          src={formattedData}
          pullToRefresh={true}
          infiniteScroll={false}
          visibleThreshold={6}
          onRefresh={event => {
            console.log('event : ', event.nativeEvent);
            alert('OnRefresh');
          }}
          onScrollThreshold={event => {
            console.info(
              '================= SCROLL THRESHOLD REACH ================== ',
            );
          }}
          onEndReach={event => {
            console.log('ON END REACHED : ', event.nativeEvent);
            alert('END REACHED');
          }}
          onClick={event => {
            console.log('event : ', event.nativeEvent);
            alert('Data Clicked : ');
          }}
          onLongClick={event => {
            console.log('ON LONG CLICK CALLCED : ', event.nativeEvent);
            alert('Loing click');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
