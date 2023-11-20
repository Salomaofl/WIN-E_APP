// FinalizacaoPedido.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function FinalizacaoPedido({ navigation }) {
  const handleHomePress = () => {
    // Navegar de volta para a tela inicial ou outra tela desejada
    navigation.navigate('TelaPrincipal');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedido Finalizado!</Text>

      <Text style={styles.successText}>
        Obrigado por comprar conosco. Seu pedido foi finalizado com sucesso!
      </Text>

      <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
        <Text style={styles.homeButtonText}>Ir para a Página Inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  successText: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: '#950000',
    padding: 15,
    borderRadius: 10,
    width: 200,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
