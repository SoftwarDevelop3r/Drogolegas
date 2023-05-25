import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { Question } from './Question';
import { Answer } from './Answer';
import { Information } from './Information';

const initialAnswersItems = [
  { key: '1', value: '' },
  { key: '2', value: '' },
  { key: '3', value: '' },
  { key: '4', value: '' },
  { key: '5', value: '' },
  { key: '6', value: '' },
  { key: '7', value: '' },
  { key: '8', value: '' },
  { key: '9', value: '' },
  { key: '10', value: '' },
  { key: '11', value: '' },
  { key: '12', value: '' },
  { key: '13', value: '' },
  { key: '14', value: '' },
  { key: '15', value: '' },
  { key: '16', value: '' },
  { key: '17', value: '' },
  { key: '18', value: '' },
];

const questions = [
  { ask:'1', text: '¿Quién fue ayudado mientras se despreció a Aitor Pinchos? Los dos estaban en estado de embriaguez.', possibilities: ['Mikel', 'Miguel Gonzalez', 'Juan Carlos']},
  { ask:'2', text: '¿Qué compañero tiene tendencias al judaísmo?', possibilities: ['Oriol Alfonso', 'Javier Gonzalez', 'Albert Rincon'] },
  { ask:'3', text: '¿Quién bebió cerveza de un cenicero limpio de un bar de Marina?', possibilities: ['Cesar Blanco', 'Ivan Barranco', 'Manel Rodriguez'] },
  { ask:'4', text: '¿Qué elemento ingiere más cantidad de cerveza en un periodo corto de tiempo?', possibilities: ['Ivan Barranco', 'Jordi Muñoz', 'Marc'] },
  { ask:'5', text: '¿Qué drogolega puso de moda la frase ploto o plama?', possibilities: ['Jonathan Sierra', 'Javier Gonzalez', 'Daniel Soto'] },
  { ask:'6', text: '¿Qué ser humano diria la frase "Ahir a la nit va ser una liada tio"?', possibilities: ['Marc', 'Laurens', 'Oriol Alfonso'] },
  { ask:'7', text: '¿Qué ser SIEMPRE saluda con "Buenas"?', possibilities: ['Alex Rebolo', 'Alex Villa', 'Marc'] },
  { ask:'8', text: '¿Qué individuo masturbó levemente a otro individuo?', possibilities: ['Mikel', 'Albert Rincon', 'Miguel Gonzalez'] },
  { ask:'9', text: '¿Qué individuo fue masturbado?', possibilities: ['Pedro', 'Manel Rodriguez', 'Jordi Muñoz'] },
  { ask:'10', text: 'Escoge la opción correcta que complete la siguiente frase: Pedro ...', possibilities: ['sucio', 'muerto', 'gay'] },
  { ask:'11', text: '¿Qué criatura puso de moda la frase "Me piro" seguido de un portazo?', possibilities: ['Juan Carlos', 'Javier Quiñones', 'Miguel Gonzalez'] },
  { ask:'12', text: '¿Qué humanoide conduce autobuses?', possibilities: ['Alex Rebolo', 'Ivan Barranco', 'Cesar Blanco'] },
  { ask:'13', text: '¿Qué usuario ha dado el mayor Ok para chapar la boca de una mujer en Marina?', possibilities: ['Oriol Alfonso', 'Javier Quiñones', 'Jonathan Sierra'] },
  { ask:'14', text: '¿Qué semejante ha organizado las mejores fiestas de la manada?', possibilities: ['Laurens', 'Javier Quiñones', 'Alex Villa'] },
  { ask:'15', text: '¿Qué sujeto dio el mayor mortal hacia delante cayendo en una valla? Y seguidamente, ¿Qué personaje dio el peor?', possibilities: ['Juan Carlos y Aitor Pinchos', 'Albert Rincon e Ivan Barranco', 'Alex Rebolo y Pedro'] },
  { ask:'16', text: '¿Qué hombre dirias que se masturba con Hentai?', possibilities: ['Daniel Soto', 'Cesar Blanco', 'Jordi Muñoz'] },
  { ask:'17', text: '¿Que persona es caracterizado por la frase "Uy que frío"?', possibilities: ['Laurens', 'Manel Rodriguez', 'Javier Gonzalez'] },
  { ask:'18', text: '¿Qué celebridad recibió una escoba en el culo y sirvió para saber que tan gay es?', possibilities: ['Jonathan Sierra', 'Mikel', 'Marc'] },
];

export function QuestionaryScreenBackup({ navigation }) {
  const [answers, setAnswers] = React.useState([initialAnswersItems]);

  const handleSetAnswers = (ask, answer) => {
    const newAnswers = [...answers];
    newAnswers[0][ask-1]["value"] = answer;
    setAnswers(newAnswers);
  };

  React.useEffect(() => {
    console.log("Answers changed: ", answers);
  }, [answers]);

return (
  <ScrollView>

    <Information message='El siguiente cuestionario calcula que tan drogolega eres. Por favor, una vez obtenido tus resulados compartelo con los demás en el grupo de whatsap.'></Information>

    {questions.map((q) => (
      <View key={q.ask}>
          <Question question_number={q.ask} question={q.text} />
          <Answer answer_number={q.ask} answer_possibilities={q.possibilities} handleSetAnswers={handleSetAnswers} />
      </View>
    ))}

    <View style={styles.content}>
      <Button
        title="Finalizar"
        onPress={ () => navigation.navigate('ResultQuestionaryScreen', { myVariable: answers}) }
      />
      </View>

    </ScrollView>
    );
}


const styles = StyleSheet.create({
  content: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
});