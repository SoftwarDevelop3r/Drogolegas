import { createStackNavigator } from '@react-navigation/stack';
import { ResultQuestionaryScreen } from './ResultQuestionaryScreen';
import { MyTabs } from './MyTabs';

const Stack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResultQuestionaryScreen"
        component={ResultQuestionaryScreen}
        options={{
          headerShown: true,
          title: 'Resultado',
          headerStyle: {
            backgroundColor: '#4395e7',
          },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'BrunoAceSC-Regular',
          fontWeight: '200',
        },
        }}
      />
    </Stack.Navigator>
  );
}