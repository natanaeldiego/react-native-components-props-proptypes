/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const NomeUser = (props) => {
  return (
    <View style={style.row}>
      <Text>{props.firstName}</Text>
      <Text>{props.lastName}</Text>
      <Text>{props.idade}</Text>
    </View>
  );
};

NomeUser.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  idade: PropTypes.number.isRequired,
};

const App = () => {
  return (
    <View style={style.container}>
      <NomeUser firstName="Natanael" lastName="Diego" idade={30} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  row: {flexDirection: 'row'},
});

export default App;
