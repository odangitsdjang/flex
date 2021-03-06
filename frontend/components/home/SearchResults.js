import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// don't change this class unless you are going to test it thoroughly!!! 

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: 0,
      results: [
      
      ]
     };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.results !== this.props.results) {
      this.setState({ results: nextProps.results });
    }
    
  }

  // implement this with backend
  goToRestaurant(restaurantId) { 
    // console.log(this.props.results);
    this.props.redirectRestaurant(restaurantId);
  }
  
  render() {
    if (this.props.searchActive && typeof this.state.results !== "string" ){ 
      // debugger
      return (
        <View style={styles.container}>
            <FlatList
              styles={styles.actualList}
              data={this.state.results}
              keyExtractor={(item, index)=> index}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>{
                    this.goToRestaurant(item._id);
                  }}  style={styles.list}>
                  <Ionicons name="ios-restaurant" style={styles.restaurantIcon} 
                    size={30}/>
                  <View style={{flex: 8, alignSelf: 'stretch', alignItems: 'stretch'}}>
                    <Text style={styles.restaurantName}>{item.name}</Text>
                    <Text style={styles.restaurantAddress}>{item.full_address}</Text>
                  </View>
                  <Ionicons name="ios-arrow-forward" style={styles.goToIcon} size={30}/>
                </TouchableOpacity>
              )}/>
        </View>
      );
      // no restaurants found
    }else if (this.props.searchActive && typeof this.state.results === "string") { 
      const fake={error: "No Results"};
      return (
      <View style={styles.container}>
        <View style={styles.noResult}>
            <MaterialIcons name="not-interested" style={styles.noResultIcon}
              size={20} />
            <Text style={styles.noResultText}>No Results</Text>
        </View>
      </View>
    );
    }
    else return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 110,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
  }, 
  actualList: {
    alignItems: 'stretch'
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    height: 77,
    borderBottomWidth: 1,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderColor: 'rgb(200,200,200)'
  }, 
  noResult: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    height: 100,
  },
  noResultIcon: {
    paddingRight: 10
  },
  noResultText: {
  },
  restaurantIcon: {
    flex: 1,
    paddingLeft: 10,
    alignSelf: 'center'
  },
  restaurantImage: {

  },
  restaurantName: {
    alignSelf: 'center',
    fontSize: 18

  }, 
  restaurantAddress: {
    alignSelf: 'center', 
    fontSize: 12
  },
  goToIcon: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end'
  }
});

export default SearchResults;
