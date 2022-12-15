import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';


export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
            <Text>protegetuempresa.cl</Text>
            <Text variant="displayMedium">Dashboard</Text>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#e265b1',
    


  }
  
});
