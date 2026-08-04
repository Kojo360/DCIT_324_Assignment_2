import React, { useState } from 'react';
import { SafeAreaView, ScrollView, FlatList, Text, StyleSheet, TouchableOpacity, View } from 'react-native';

import WorkoutCard from '../components/WorkoutCard';
import { COLORS, LAYOUT } from '../constants/Theme';

const HORIZONTAL_TABS = ['Yoga', 'Gym', 'Cardio', 'Stretch'];

const DATASET_WORKOUTS = [
  {
    id: '1',
    title: 'Full Body Sculpting',
    duration: '24 Min',
    calories: '185 Kcal',
    imageSource: require('../../assets/images/expo-logo.png'),
  },
  {
    id: '2',
    title: 'Lower Body Isolation',
    duration: '35 Min',
    calories: '290 Kcal',
    imageSource: require('../../assets/images/react-logo.png'),
  },
  {
    id: '3',
    title: 'Core Crusher Circuit',
    duration: '18 Min',
    calories: '140 Kcal',
    imageSource: require('../../assets/images/logo-glow.png'),
  },
  {
    id: '4',
    title: 'Upper Body Blast',
    duration: '30 Min',
    calories: '240 Kcal',
    imageSource: require('../../assets/images/expo-badge.png'),
  },
  {
    id: '5',
    title: 'High Intensity HIIT',
    duration: '20 Min',
    calories: '310 Kcal',
    imageSource: require('../../assets/images/icon.png'),
  },
  {
    id: '6',
    title: 'Chest & Back Split',
    duration: '45 Min',
    calories: '380 Kcal',
    imageSource: require('../../assets/images/tutorial-web.png'),
  },
];

export default function WorkoutListScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('Gym');

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.topTypographyPadding}>
        <Text style={styles.headerLabelPreText}>Find Your</Text>
        <Text style={styles.headerLabelTitle}>Workout Course</Text>
      </View>

      <View style={styles.navigationTabTrack}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabContentGap}>
          {HORIZONTAL_TABS.map((tabItem) => {
            const isTabFocused = selectedCategory === tabItem;
            return (
              <TouchableOpacity
                key={tabItem}
                style={[styles.tabCapsule, isTabFocused && styles.tabCapsuleActive]}
                onPress={() => setSelectedCategory(tabItem)}>
                <Text style={[styles.tabLabelText, isTabFocused && styles.tabLabelTextActive]}>{tabItem}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <FlatList
        data={DATASET_WORKOUTS}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.verticalListLayout}
        renderItem={({ item }) => (
          <WorkoutCard
            title={item.title}
            duration={item.duration}
            calories={item.calories}
            imageSource={item.imageSource}
            onPress={() => navigation.navigate('WorkoutDetails', { selectedWorkoutItem: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  topTypographyPadding: {
    paddingHorizontal: LAYOUT.paddingHorizontal,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerLabelPreText: {
    fontSize: 24,
    color: COLORS.textMuted,
    fontWeight: '500',
  },
  headerLabelTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.textDark,
    marginTop: 2,
    letterSpacing: -0.5,
  },
  navigationTabTrack: {
    height: 50,
    marginVertical: 12,
  },
  tabContentGap: {
    paddingHorizontal: LAYOUT.paddingHorizontal,
    alignItems: 'center',
  },
  tabCapsule: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: COLORS.cardBg,
  },
  tabCapsuleActive: {
    backgroundColor: COLORS.primary,
  },
  tabLabelText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textMuted,
  },
  tabLabelTextActive: {
    color: COLORS.cardBg,
  },
  verticalListLayout: {
    paddingHorizontal: LAYOUT.paddingHorizontal,
    paddingBottom: 24,
  },
});