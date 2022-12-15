import React, { Component } from 'react';
import { Text,View, Image, StyleSheet } from 'react-native';
import Header from './header';
import Boxes from './boxes';
import { Button, Card } from 'react-native-paper';
import Login from './login'

export default class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Header/>
         <Boxes/>

    
    <Button icon={'label'}
    mode="contained-tonal" 
    onPress={(component={Login}) => console.log('Pressed Logout')}>
    Logout
  </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   width: '100%',
   height: '85%',
   padding:5,
   flexDirection: 'row',
   flexWrap: 'wrap'
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5
  },
  inner: {
    flex: 1,
    backgroundColor:'#eee',
    alignItems: 'center',
    justifyContent: 'center',
    
    

  }
  
});


//export default Dashboard;