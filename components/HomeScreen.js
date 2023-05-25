import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

import { ListOfMembers } from './ListOfMembers';

import { Aclonica_400Regular } from '@expo-google-fonts/aclonica';



export function HomeScreen() {
  return (

  <ScrollView>
    <View style={styles.content}>
      <Card style={styles.white} >
        <Card.Cover source={require('../assets/drogos.jpg')}/>
        <Card.Content>
          <Text></Text>
          <Text style={styles.welcome}>Grupo formado por hombres con la sexualidad
          muy bien definida, són lufos nacidos entre 1988 y 1991 ,en sus ratos libres les gusta divertirse jugando al "Cargador" o comiendo animales muertos. </Text>
          <Text></Text>
          <Text style={styles.h1}>Miembros</Text>
          <ListOfMembers></ListOfMembers>
        </Card.Content>
      </Card>
    </View>
  </ScrollView>
  );
}


const styles = StyleSheet.create({
  content: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },

  welcome: {
    padding: 20,
    textAlign: 'justify',
    borderColor: '#4395e7',
    borderLeftWidth: 3,
    borderRadius: 5,
    backgroundColor: '#f3f3f3',
  },
  white: {
    backgroundColor: 'white',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
    paddingTop: 20,
  },
});