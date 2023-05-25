import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Linking } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export function InformationBackup( props ) {


return (
    <View style={styles.content}>
    <View style={[styles.descriptionScreen, styles.container]} >
      <View style={styles.iconInfo} >
        <Ionicons name="information-circle-outline" size={24} color="black" />
      </View>
      <View style={styles.messageInfo} >
        <Text style={styles.messageTextInfo}>{props.message}</Text>
      </View>
    </View>
    </View>
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

  descriptionScreen: {
    borderColor: '#4395e7',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    backgroundColor: '#d6e0e9',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 10,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 13,
  },

});