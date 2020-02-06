import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CategoriesScreen, CategoryMealsScreen } from './../screens';

const Stack = createStackNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={CategoriesScreen} />
        <Stack.Screen name='Meals' component={CategoryMealsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
