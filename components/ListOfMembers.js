import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function ListOfMembers() {
    const DATA = [
      {
        name: 'Miguel Gonzalez',
      },
      {
        name: 'Albert Rincón',
      },
      {
        name: 'Cesar Blanco',
      },
      {
        name: 'Ivan Barranco',
      },
      {
        name: 'Javier Gonzalez',
      },
      {
        name: 'Laurens',
      },
      {
        name: 'Marc',
      },
      {
        name: 'Mikel ',
      },
      {
        name: 'Jordi Muñoz ',
      },
      {
        name: 'Pedro',
      },
      {
        name: 'Javier Quiñones',
      },
      {
        name: 'Alex Rebolo',
      },
      {
        name: 'Uri Alfonso',
      },
      {
        name: 'Alex Villa',
      },
      {
        name: 'Juan Carlos',
      },
      {
        name: 'Daniel Soto',
      },
      {
        name: 'Jonathan Sierra',
      },
    ];

    type ItemProps = {name: string};

    const Item = ({name}: ItemProps) => (

        <Text style={styles.title}> <Ionicons name="person-circle-outline" size={16} color="black" />  {name} </Text>

    );


  return (
    <FlatList
        data={DATA}
        scrollEnabled={false}
        renderItem={({item}) => <Item name={item.name} />}
      />
  );
}


const styles = StyleSheet.create({
  content: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  welcome: {
    paddingTop: 20,
  },

});