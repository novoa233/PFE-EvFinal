import React, { Component } from 'react';
import { Text,View, Image, StyleSheet } from 'react-native';
import NavBar from './layout/navbar';

import imagen from './img/dashboard.png'


class Dashboard extends Component {
  render() {contained-tonal"
    return (
      <View>
      <NavBar title = "DASHBOARD" navigation = {this.props.navigation}></NavBar>
      <Text>Soy una pantalla de Dashboard</Text>
      <View style={styles.container}>
        <Image source={imagen} style={styles.logo}/>
      </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});


export default Dashboard;