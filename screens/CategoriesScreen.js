import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Categories Screen</Text>
      <Button
        title='Go to Meals'
        onPress={() =>
          props.navigation.navigate('Meals', { meal: 'Finger Lickin Good' })
        }
      />
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

export default CategoriesScreen;
