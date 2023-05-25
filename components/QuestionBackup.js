import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';


export function QuestionBackup( props ) {

  return (
    <View style={styles.askContent}>
      <Text style={styles.ask}><Text style={styles.bold}>Pregunta {props.question_number}.</Text> {props.question} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});