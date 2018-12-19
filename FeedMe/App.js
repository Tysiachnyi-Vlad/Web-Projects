import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

//---------//

//import modules
import Header from './modules/Header';
import Content from './modules/Content';
import Footer from './modules/Footer';

export default class App extends Component {
  constructor(){
    super();
    this.state = {};
  };

  render(){
    return(
       <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.spacer}></View>
            <Header />
          </View>
          <Content />
          <Footer />
       </View> 
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flex: 1
  },
  spacer: {
    flex: 2,
    backgroundColor: '#f58309'
  }
})

