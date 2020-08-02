import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Appbar, Divider, Snackbar } from 'react-native-paper';

import UserInput from './components/UserInput';
import TextTransformer from './components/TextTransformer';
import Transformations from './components/Transformations';
import Footer from './components/Footer';

export default function App() {
  const [text, setText] = React.useState('');
  const [visibleSnackbar, setVisibleSnackbar] = React.useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Appbar.Header>
          <Appbar.Content title="Unicorne text converter" />
        </Appbar.Header>
        <UserInput updateText={setText} />
        <Transformations
          setVisibleSnackbar={() => {
            setVisibleSnackbar(true);
          }}
          targetText={text}
        />
      </ScrollView>
      <Footer />
      <Snackbar
        duration={2000}
        visible={visibleSnackbar}
        onDismiss={() => setVisibleSnackbar(false)}
        action={{
          label: 'OK',
          onPress: () => {
            setVisibleSnackbar(false);
          },
        }}>
        Text has been copied to clipboard!
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
