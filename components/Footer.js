import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Linking from 'expo-linking';


const openTwitter = (): void => {
  Linking.openURL(
    'https://twitter.com/intent/tweet?text=%40xnt%20re:%20unicorne%20-%20'
  );
};

const Footer = () => (
  <View style={styles.footerContainer}>
    <Text style={styles.footerParagraph}>Feedback? Reach out!</Text>
    <TouchableOpacity onPress={openTwitter}>
      <Text style={styles.tweet}>🐦 Tweet: @xnt</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  footerContainer: {
    marginHorizontal: 24,
    marginVertical: 10,
  },
  footerParagraph: {
    fontSize: 16,
    textAlign: 'left',
  },
  tweet: {
    color: 'navy',
    fontWeight: 'bold',
    marginTop: 5,
    textDecorationLine: 'underline',
    textShadowOffset: 1,
    textShadowRadius: 1,
    textShadowColor: '#333',
  },
});

export default React.memo(Footer);
