import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import WorkoutCard from '../components/WorkoutCard';
import { COLORS, LAYOUT } from '../constants/Theme';

const CATEGORIES = ['Yoga', 'Gym', 'Cardio', 'Stretch'];

const WORKOUTS = [
  { id: '1', title: 'Full Body Sculpting', duration: '24 Min', calories: '185 Kcal', image: require('../../assets/images/workout1.png') },
  { id: '2', title: 'Lower Body Isolation', duration: '35 Min', calories: '290 Kcal', image: require('../../assets/images/workout2.png') },
  { id: '3', title: 'Core Crusher Circuit', duration: '18 Min', calories: '140 Kcal', image: require('../../assets/images/workout3.png') },
  { id: '4', title: 'Upper Body Blast', duration: '30 Min', calories: '240 Kcal', image: require('../../assets/images/workout4.png') },
  { id: '5', title: 'High Intensity HIIT', duration: '20 Min', calories: '310 Kcal', image: require('../../assets/images/workout5.png') },
  { id: '6', title: 'Chest & Back Split', duration: '45 Min', calories: '380 Kcal', image: require('../../assets/images/workout6.png') },
];

export default function WorkoutListScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('Gym');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Find Your</Text>
        <Text style={styles.heading}>Workout Course</Text>
      </View>
      <View style={styles.categories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryContent}>
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return <TouchableOpacity key={category} style={[styles.category, isSelected && styles.categorySelected]} onPress={() => setSelectedCategory(category)}><Text style={[styles.categoryText, isSelected && styles.categoryTextSelected]}>{category}</Text></TouchableOpacity>;
          })}
        </ScrollView>
      </View>
      <FlatList
        data={WORKOUTS}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <WorkoutCard image={item.image} title={item.title} duration={item.duration} calories={item.calories} onPress={() => navigation.navigate('WorkoutDetails', { workout: item })} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { paddingHorizontal: LAYOUT.paddingHorizontal, paddingTop: 16, paddingBottom: 8 },
  eyebrow: { fontSize: 24, fontWeight: '500', color: COLORS.textMuted },
  heading: { marginTop: 2, fontSize: 28, fontWeight: '800', color: COLORS.textDark, letterSpacing: -0.5 },
  categories: { height: 50, marginVertical: 12 },
  categoryContent: { alignItems: 'center', paddingHorizontal: LAYOUT.paddingHorizontal },
  category: { marginRight: 10, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, backgroundColor: COLORS.cardBg },
  categorySelected: { backgroundColor: COLORS.primary },
  categoryText: { fontSize: 14, fontWeight: '600', color: COLORS.textMuted },
  categoryTextSelected: { color: '#FFFFFF' },
  list: { paddingHorizontal: LAYOUT.paddingHorizontal, paddingBottom: 24 },
});
