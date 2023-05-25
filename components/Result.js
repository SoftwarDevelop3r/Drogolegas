import * as React from 'react';
import { Text, View, StyleSheet, Linking, TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export function Result({ type_of_user }) {
  const starIcon = <Ionicons name="md-star-outline" size={24} color="#FFC300" />;

  const runConfigMessage = () => {
    if (type_of_user === 'gold') {
      return '¡Enhorabuena! Tu puntuación muestra que eres un Drogolega de nivel Oro. Sigue disfrutando de la mida o apoyando al Osasuna, fácilmente podrías liderar esta manada y por ello, ¿serias capaz de organizar al grupo para ir a una casa rural?'
    } else if (type_of_user === 'silver') {
      return '¡Bien! Tu puntuación muestra queres un Drogolega de nivel Plata. No está nada mal, acompañas activamente al grupo aunque demuestras perderte en algunos asuntos. Sigue así, continúa cantando el "Cumpleaños feliz" arrítmico y participando a todas las cenas de Can Burgués. ¡Te queremos dentro!'
    } else if (type_of_user === 'bronze') {
      return '¡Suficiente! Tu puntuación muestra que eres un Drogolega de nivel Bronce. Has sacado una nota justa para continuar en el grupo y por ello deberías mejorar en algunos asuntos. Esperamos que te animesa cantar el "cumpleaños feliz" arrítmico o apoyar al Osasuna. ¡Ánimo!'
    } else {
      return '¡Muy mal! Tu puntuación es tan baja que no serías considerado un Drogolega. Te animamos a que abandones el grupo o que comiences activamente a hablar sobre mida, jugar al cargador o cantar cánticos del Osasuna. Te damos otra oportunidad, ¿vamos?'
    }
  }

  const runConfigStars= () => {
    if (type_of_user === 'gold') {
      return 5
    } else if (type_of_user === 'silver') {
      return 4
    } else if (type_of_user === 'bronze') {
      return 3
    } else {
      return 1
    }
  }

 const runConfigWhatsappMessage = () => {
    if (type_of_user === 'gold') {
      return 'Soy un Drogolega nivel Oro'
    } else if (type_of_user === 'silver') {
      return 'Soy un Drogolega nivel Plata'
    } else if (type_of_user === 'bronze') {
      return 'Soy un Drogolega nivel Bronce'
    } else {
      return 'Soy un Drogolega nivel Basura'
    }
  }

  const result = runConfigMessage();
  const starCount = runConfigStars();

  const shareTextOnWhatsApp = () => {
    const text = runConfigWhatsappMessage();
    const url = `whatsapp://send?text=${encodeURIComponent(text)}`;
    Linking.openURL(url)
      .then((data) => {
        console.log('Enlace abierto con éxito en WhatsApp: ', data);
      })
      .catch((err) => {
        console.log('Error al abrir enlace en WhatsApp: ', err);
      });
  }

  const renderStarComponents = () => {
    const components = [];

    for (let i = 0; i < starCount; i++) {
      components.push(<Ionicons name="md-star-outline" size={24} color="#FFC300" key={i} />);
    }

    return components;
  }

  return (
    <View style={styles.box}>
      <View style={styles.stars}>{renderStarComponents()}</View>
      <View style={styles.resultMessage}><Text style={{ textAlign: 'justify'}}>{result}</Text></View>
      <TouchableOpacity onPress={() => {shareTextOnWhatsApp()}}>
        <View style={styles.whatsapp}>
          <Text style={{ color: 'white', fontSize: 15 }}>Compartir <Ionicons name="logo-whatsapp" size={24} color="white" /></Text>
        </View>
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  box: {
    textAlign: 'justify',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 40,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
  },
  resultMessage: {
    paddingBottom: 20,
  },
  stars:{
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  askContent: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  ask: {
    padding: 20,
    textAlign: 'justify',
    borderColor: '#4395e7',
    borderLeftWidth: 3,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
  white: {
    backgroundColor: 'white',
  },
  whatsapp: {
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: '#25D366',
    borderRadius: 5,
  },
});

