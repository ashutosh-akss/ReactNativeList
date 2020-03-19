import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import RecyclerView from 'react-native-recycler-list';
import data from './data.json';

const formattedData = data.map((row, index) => {
  return {...row, name: index + ' ' + row.name};
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: Date.now(),
      endTime: 0,
      renderTime: 0,
    };
  }

  componentDidMount() {
    const {startTime} = this.state;
    const endTime = Date.now();
    this.setState({
      endTime: endTime,
      renderTime: endTime - startTime,
    });
  }

  render() {
    const {renderTime} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.renderTime}>
          {' '}
          LOAD COMPLETE TIME : {renderTime} ms{' '}
        </Text>
        <RecyclerView
          style={styles.container}
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
  renderTime: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 4,
  },
});
