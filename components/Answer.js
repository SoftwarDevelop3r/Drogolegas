import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';


const initialItems = [
  { '1': '' },
  { '2': '' },
  { '3': '' },
  { '4': '' },
  { '5': '' },
  { '6': '' },
  { '7': '' },
  { '8': '' },
  { '9': '' },
  { '10': '' },
  { '11': '' },
  { '12': '' },
  { '13': '' },
  { '14': '' },
  { '15': '' },
  { '16': '' },
  { '17': '' },
];

export function Answer( props ) {

  const [checked, setChecked] = React.useState('');
  const [answers, setAnswers] = React.useState();

  const addElement = (ask, answer) => {
    props.handleSetAnswers(ask, answer);
    setChecked(answer);
  };

  return (

  <View style={styles.answerContent}>
        <View style={{flexDirection:"row",alignItems:'center', backgroundColor: 'white', padding: 10, borderRadius: 5}}>
          <RadioButton
            value={props.answer_possibilities[0]}
            status={ checked === props.answer_possibilities[0] ? 'checked' : 'unchecked' }
            onPress={() => addElement(props.answer_number, props.answer_possibilities[0])}
          />
          <Text>{props.answer_possibilities[0]}</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:'center', backgroundColor: 'white', padding: 10, borderRadius: 5}}>
          <RadioButton
            value={props.answer_possibilities[1]}
            status={ checked === props.answer_possibilities[1] ? 'checked' : 'unchecked' }
            onPress={() => addElement(props.answer_number, props.answer_possibilities[1])}
          />
          <Text>{props.answer_possibilities[1]}</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:'center', backgroundColor: 'white', padding: 10, borderRadius: 5}}>
          <RadioButton
            value={props.answer_possibilities[2]}
            status={ checked === props.answer_possibilities[2] ? 'checked' : 'unchecked' }
            onPress={() => addElement(props.answer_number, props.answer_possibilities[2])}
        />
          <Text>{props.answer_possibilities[2]}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  answerContent: {
    paddingTop: 5,
    paddingRight: 20,
    paddingLeft: 20,
  },
});