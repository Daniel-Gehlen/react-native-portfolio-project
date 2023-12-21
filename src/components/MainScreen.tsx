import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const MainScreen = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Perfil_Daniel_Gehlen.jpeg')} style={styles.photo} />
      <Text style={styles.name}>Daniel Gehlen</Text>

      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={toggleAccordion} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>
            {accordionOpen ? 'Close Social Media' : 'View social media'}
          </Text>
        </TouchableOpacity>

        {accordionOpen && (
          <View style={styles.socialMediaContainer}>
            <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/daniel-gehlen/')}>
              <Text style={styles.link}> 💼 LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://github.com/Daniel-Gehlen')}>
              <Text style={styles.link}> 🚀 GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://www.behance.net/danielgehlen')}>
              <Text style={styles.link}> 🎨 Behance</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('mailto:harmonia251251@gmail.com')}>
              <Text style={styles.link}> 📩 Email</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  linksContainer: {
    alignItems: 'center',
  },
  toggleButton: {
    backgroundColor: '#3498db',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 350,
  },
  toggleButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  socialMediaContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  link: {
    fontSize: 16,
    color: 'blue',
    marginVertical: 5,
  },
});

export default MainScreen;
