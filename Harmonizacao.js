import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Produto from './Produto.js'





export default function Harmonizacao({ navigation }) {
  const handleCountrySelection = (Harmonizacao) => {
    // Use the navigation prop to navigate to the next screen, passing the selected country as a parameter
    navigation.navigate('Produto', { Harmonizacao });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./Queijos.JPG')}
          style={styles.image}
        />
        <Text style={styles.description}>Harmonização</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleCountrySelection('Produto')}>
          <Text style={styles.buttonText}>Carne Vermelha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCountrySelection('Uva 2')}>
          <Text style={styles.buttonText}>Frutos do Mar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCountrySelection('Argentina')}>
          <Text style={styles.buttonText}>Queijos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCountrySelection('Uruguai')}>
          <Text style={styles.buttonText}>Sobremesas</Text>
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
    backgroundColor: '#950000', // Cor de fundo do botão
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Alinhamento ao centro
  },
});
