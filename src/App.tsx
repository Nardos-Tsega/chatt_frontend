import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { fontFamilies } from './utils/fontFamilies.ts';

function App(): React.JSX.Element {
  return (
  <View style={styles.container}>
    <Text style={styles.regularText}>
      This text uses the regular custom font.
    </Text>
    <Text style={styles.boldText}>
      This text uses the bold custom font.
    </Text>
    <Text>
      This text uses the bold custom font.
    </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  regularText: {
    fontFamily:  fontFamilies.BODONI.medium,
    fontSize: 18,
    marginBottom: 10,
  },
  boldText: {
    fontFamily: fontFamilies.LORA.medium,
    fontSize: 18,
  },
});

export default App;
