import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Produto from './Produto.js'





export default function Uva({ navigation }) {
  const handleCountrySelection = (Uva) => {
    navigation.navigate('Produto', { Uva });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./Uvas.JPG')}
          style={styles.image}
        />
        <Text style={styles.description}>Tipos de Uva</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleCountrySelection('Produto')}>
          <Text style={styles.buttonText}>Chardonay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCountrySelection('Uva 2')}>
          <Text style={styles.buttonText}>Carenete Sauvignon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCountrySelection('Argentina')}>
          <Text style={styles.buttonText}>Merlot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCountrySelection('Uruguai')}>
          <Text style={styles.buttonText}>Tempranillo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200, // Tamanho da imagem
    height: 200,
    borderRadius: 20, // Cantos arredondados
  },
  description: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    width: 200,
  },
  button: {
    backgroundColor: '#950000', 
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});
