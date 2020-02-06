import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CategoryMealsScreen = props => {
  const { navigation, route } = props;
  const meal = route.params.meal;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Category Meals Screen</Text>
      <Text>Now viewing: {meal} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  }
});

export default CategoryMealsScreen;
