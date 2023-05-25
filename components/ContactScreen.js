import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput, Button, Linking, Alert } from 'react-native';

import { openInbox } from 'react-native-email-link';
import { Ionicons } from '@expo/vector-icons';

import { Information } from './Information';

export function ContactScreen() {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  const sendEmail = () => {
    try {
      const subject = encodeURIComponent('Opinión de ' + name);
      const body = encodeURIComponent(message);
      const emailLink = `mailto:jona.sierra@gmail.com?subject=${subject}&body=${body}`;
      Linking.openURL(emailLink);
      throw new Error();
    } catch (error){
      Alert.alert(
        'Error',
        'Ha habido un problema al abrir tu cliente de correo predeterminado ' + error,
        [
          { text: 'Ok', onPress: () => console.log('Usuario notificado del error') }
        ],
        { cancelable: false }
      );
    }
  }


return (
  <ScrollView>

    <Information message='Si te gustaría añadir una nueva funcionalidad a la aplicación o te quieres comentar cualquier otra cosa, usa el siguiente formulario.'></Information>

    <View style={styles.content}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputName}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
         />
       </View>
       <View style={styles.inputBox}>
         <TextInput
           style={styles.inputMessage}
           multiline={true}
           placeholder="Mensaje"
           value={message}
           onChangeText={setMessage}
         />
       </View>
    </View>

    <View style={styles.contentButton}>
        <Button
          onPress={() => sendEmail()}
          title="Enviar" />
   </View>

    </ScrollView>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  iconInfo: {
    justifyContent: 'center',
    paddingRight: 10,
  },
  messageInfo: {
    marginRight: 30,
  },
  messageTextInfo: {
    textAlign: 'justify',
    textAlignVertical: 'center',
  },
  contentButton: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  inputName: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5
  },
  inputMessage: {
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 200,
    textAlignVertical: 'top',
  },
  inputBox: {
    paddingBottom: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
});