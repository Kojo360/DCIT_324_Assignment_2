import React, { useState } from 'react';
import { Image, SafeAreaView, StatusBar, Text, StyleSheet, TouchableOpacity, View } from 'react-native';

import { COLORS, LAYOUT } from '../constants/Theme';

export default function WorkoutDetailsScreen({ route }) {
  const { selectedWorkoutItem } = route.params;
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <SafeAreaView style={styles.viewportWrapper}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.heroBannerBackground}>
        <Image source={selectedWorkoutItem.imageSource} style={styles.bannerCenterImage} resizeMode="contain" />
      </View>

      <View style={styles.dataDescriptionPanel}>
        <Text style={styles.mainTitle}>{selectedWorkoutItem.title}</Text>

        <View style={styles.splitMetricsRow}>
          <View style={styles.subDetailMetricsCard}>
            <Text style={styles.metricsHeaderTitle}>Duration</Text>
            <Text style={styles.metricsDetailValue}>{selectedWorkoutItem.duration}</Text>
          </View>

          <View style={styles.subDetailMetricsCard}>
            <Text style={styles.metricsHeaderTitle}>Target Burn</Text>
            <Text style={styles.metricsDetailValue}>{selectedWorkoutItem.calories}</Text>
          </View>
        </View>

        <View style={styles.flexBottomPusher} />

        <TouchableOpacity
          style={[styles.pillActionButton, isCompleted ? styles.pillStateSuccess : styles.pillStatePrimary]}
          onPress={() => setIsCompleted(!isCompleted)}
          activeOpacity={0.9}>
          <Text style={styles.pillActionButtonLabel}>{isCompleted ? 'Completed ✓' : 'Start Workout'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewportWrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  heroBannerBackground: {
    height: 250,
    backgroundColor: COLORS.secondaryBg,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerCenterImage: {
    width: 140,
    height: 140,
  },
  dataDescriptionPanel: {
    flex: 1,
    paddingHorizontal: LAYOUT.paddingHorizontal,
    paddingTop: 28,
    paddingBottom: 24,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 24,
    letterSpacing: -0.5,
  },
  splitMetricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -6,
  },
  subDetailMetricsCard: {
    flex: 1,
    backgroundColor: COLORS.cardBg,
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 6,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 8,
    elevation: 1,
  },
  metricsHeaderTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textMuted,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  metricsDetailValue: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  flexBottomPusher: {
    flex: 1,
  },
  pillActionButton: {
    height: 56,
    borderRadius: LAYOUT.pillRadius,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  pillStatePrimary: {
    backgroundColor: COLORS.primary,
  },
  pillStateSuccess: {
    backgroundColor: COLORS.accentGreen,
    shadowColor: COLORS.accentGreen,
  },
  pillActionButtonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});