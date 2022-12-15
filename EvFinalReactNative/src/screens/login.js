import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './layout/navbar';
import { TextInput } from 'react-native-paper';
import { Button, Appbar, Card } from 'react-native-paper';






class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        usuario:"",
        password:"",
        respuestaLogin:""
    };

  }
handleChangeUsuario = async (text) => {
  await this.setState({usuario: text});
  // console.log(this.state.usuario)
}
handleChangePassword = async (text) => {
  await this.setState({password: text});
  // console.log(this.state.password)
}
handleLogin = async () =>{
  console.log(this.state)
  var url = 'http://cftvalpo.ddns.net/user/login';
  var data = this.state;
  var init = {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers:{
          'Content-Type': 'application/json'
      }
  }
  fetch(url, init ).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then( async response => {
      console.log('Success:', response)
      this.setState({
          respuestaLogin:response
      })
      if(response.state){
          console.log(response)
         

      }
  }
  );
}
  render() {
    console.log(this.props)
    return (
      
      <View>
        
      <NavBar title = "protegetuempresa.cl" navigation = {this.props.navigation}></NavBar>

      <Appbar.Header>
      <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>

      <TextInput
        label="Usuario"
        value={this.state.usuario}
        onChangeText={text => this.handleChangeUsuario(text)}
      />
     <TextInput
        label="Password"
        value={this.state.password}
        type='password'
        onChangeText={text => this.handleChangePassword(text)}
      />
    <Button icon="human" mode="contained" onPress={this.handleLogin}>
      Login
    </Button>

    <Card>
    <Card.Actions>
      <Button>¿Olvidó su contraseña?</Button>
      <Button>Registrese</Button>
    </Card.Actions>
  </Card>


      </View>
    );
  }
}

export default Login;