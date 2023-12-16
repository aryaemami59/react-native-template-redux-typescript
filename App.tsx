import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { Counter } from './src/features/counter/Counter';

const App: FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
