import * as React from 'react';
import { Text, View, StyleSheet, Linking, TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Result } from './Result';

const correctAnswers = [
  { key: '1', value: 'Miguel Gonzalez' },
  { key: '2', value: 'Albert Rincon' },
  { key: '3', value: 'Cesar Blanco' },
  { key: '4', value: 'Ivan Barranco' },
  { key: '5', value: 'Javier Gonzalez' },
  { key: '6', value: 'Laurens' },
  { key: '7', value: 'Marc' },
  { key: '8', value: 'Mikel' },
  { key: '9', value: 'Jordi Muñoz' },
  { key: '10', value: 'muerto' },
  { key: '11', value: 'Javier Quiñones' },
  { key: '12', value: 'Alex Rebolo' },
  { key: '13', value: 'Oriol Alfonso' },
  { key: '14', value: 'Alex Villa' },
  { key: '15', value: 'Juan Carlos y Aitor Pinchos' },
  { key: '16', value: 'Daniel Soto' },
  { key: '17', value: 'Manel Rodriguez' },
  { key: '18', value: 'Jonathan Sierra' },
];


export function ResultQuestionaryScreen({ navigation, route }) {
  const { myVariable } = route.params;
  const [counter, setCounter] = React.useState(0);

  const countGrade = (array) => {
    let grade = parseInt("0");;
    array.forEach((objeto, index) => {
      if (objeto.value === correctAnswers[index].value) {
        grade++;
      }
    });
    setCounter(grade);
  };

  React.useEffect(() => {
    countGrade(myVariable[0]);
  }, []);

  return (

    <View style={styles.content}>
      {counter <= 4.5 ? (
      <Result type_of_user='negative' />
      ) : counter > 4.5 && counter <= 9 ? (
      <Result type_of_user='bronze' />
      ) : counter > 9 && counter <= 13.5 ? (
      <Result type_of_user='silver' />
      ) : (
      <Result type_of_user='gold' />
      )}
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
    color: 'white',
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: '#25D366',
    borderRadius: 5,
  },
});

