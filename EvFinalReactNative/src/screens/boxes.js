import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Text} from 'react-native-paper';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.box}>
            
            <View style={styles.inner}>
                
                <Text variant="labelLarge">ISO 27001</Text>
  
                <Avatar.Icon size={64} icon="folder" />
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
                
                <Text variant="labelLarge">Mi Cuenta</Text>
                <Avatar.Image size={64} source={require('./img/profile.png')} />
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
                
                <Text variant="labelLarge">Alertas Wazuh</Text>
                <Avatar.Image size={64} source={require('./img/wazuh.png')} />
                

            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
    
                <Text variant="labelLarge">CSIRT</Text>
                <Avatar.Image size={64} source={require('./img/csirt.png')} />
            </View>
        </View>
    
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
      padding: 5,
      backgroundColor: ' #eee',
    },
    inner: {
      flex: 1,
      backgroundColor:'#d7bde2',
      alignItems: 'center',
      justifyContent: 'center',
  
    }
  
});
