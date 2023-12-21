import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SkillScreen = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const skills = [
    { iconName: 'language-javascript', skillName: 'JavaScript' },
    { iconName: 'language-typescript', skillName: 'TypeScript' },
    { iconName: 'language-html5', skillName: 'HTML' },
    { iconName: 'language-css3', skillName: 'CSS' },
    { iconName: 'react', skillName: 'React' },
    { iconName: 'cellphone', skillName: 'React Native' },
    { iconName: 'nodejs', skillName: 'Express' },
    { iconName: 'rocket', skillName: 'Jest' },
    { iconName: 'api', skillName: 'APIs' },
  ];

  const renderSkill = ({ item }: { item: { iconName: string; skillName: string } }) => {
    return (
      <View style={styles.skillContainer}>
        <Icon name={item.iconName} size={20} color="#3498db" style={styles.icon} />
        <Text style={styles.skillText}>{item.skillName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Perfil_Daniel_Gehlen.jpeg')} style={styles.photo} />
      <Text style={styles.name}>Daniel Gehlen</Text>

      <TouchableOpacity onPress={toggleAccordion} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>
          {accordionOpen ? 'Close Skills' : 'See Skills'}
        </Text>
      </TouchableOpacity>

      {accordionOpen && (
        <FlatList
          data={skills}
          renderItem={renderSkill}
          keyExtractor={(item) => item.iconName}
          numColumns={2}
          contentContainerStyle={styles.skillsContainer}
        />
      )}
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
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  toggleButton: {
    backgroundColor: '#3498db',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 350
  },
  toggleButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  skillsContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },

  skillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '45%', // Configurado para 50% para ter duas colunas
  },
  icon: {
    marginRight: 10,
  },
  skillText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SkillScreen;
