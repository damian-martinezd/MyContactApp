/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';



const App: () => React$Node = () => {
  const [value, onChangeText] = React.useState('Name');
  return (
    <ScrollView>
    <Text>Agrega tus Datos en Formulario</Text>
    <View>
      <Text>Tu Foto Reciente</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
    <TextInput
      style={styles.textContainer}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
     <TextInput
        style={styles.textContainer}
        defaultValue="Telefono"
      />
      <TextInput
        style={styles.textContainer}
        defaultValue="Correo"
      />
  </ScrollView>

  );
};

const styles = StyleSheet.create({
 textContainer:{
  height: 40, 
  borderColor: 'gray', 
  borderWidth: 1
 }
});

export default App;
