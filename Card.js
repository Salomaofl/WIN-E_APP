import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Card({ navigation }) {
  const handleCardPress = (cardNumber) => {
    console.log(`Card ${cardNumber} Pressed`);

    switch (cardNumber) {
      case 1:
        navigation.navigate('Pais');
        break;
      case 2:
        navigation.navigate('Uva');
        break;
      case 3:
        navigation.navigate('PaginaCard3');
        break;
      default:
        break;
    }
  };

  const handleEntrarPress = () => {
    navigation.navigate('TelaPrincipal');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => handleCardPress(1)}>
        <Image source={require('./logo.png')} style={styles.cardImage} />
        <Text style={styles.cardText}>Selecione por Pais</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => handleCardPress(2)}>
        <Image source={require('./logo.png')} style={styles.cardImage} />
        <Text style={styles.cardText}>Selecione por tipo de uva</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => handleCardPress(3)}>
        <Image source={require('./logo.png')} style={styles.cardImage} />
        <Text style={styles.cardText}>Selecione por Harmonização</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleEntrarPress}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  cardImage: {
    width: '80%',
    height: '50%',
    borderRadius: 8,
  },
  cardText: {
    fontSize: 16,
    marginTop: 10,
  },
  footer: {
    backgroundColor: '#950000',
    padding: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#950000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
