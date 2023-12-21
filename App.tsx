import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Certifique-se de importar o ícone correto

import MainScreen from './src/components/MainScreen';
import SkillScreen from './src/components/SkillScreen';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db', // Você pode personalizar as cores conforme necessário
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = focused ? 'account' : 'account-outline';
            } else if (route.name === 'Skills') {
              iconName = focused ? 'cog' : 'cog-outline';
            }

            // Renderize o ícone com base no nome
            return iconName ? <Icon name={iconName} size={size} color={color} /> : null;
          },
          tabBarOptions: {
            activeTintColor: '#3498db',
            inactiveTintColor: 'gray',
          },
        })}
      >
        <Tab.Screen name="Profile" component={MainScreen} />
        <Tab.Screen name="Skills" component={SkillScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
