import React, { useState } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS, LAYOUT } from '../constants/Theme';

export default function WorkoutDetailsScreen({ route }) {
  const { workout } = route.params;
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.hero}>
        <Image source={workout.image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{workout.title}</Text>
        <View style={styles.metrics}>
          <MetricCard label="Duration" value={workout.duration} />
          <MetricCard label="Target Burn" value={workout.calories} />
        </View>
        <View style={styles.spacer} />
        <TouchableOpacity style={[styles.button, { backgroundColor: isCompleted ? COLORS.accentGreen : COLORS.primary }]} onPress={() => setIsCompleted(!isCompleted)} activeOpacity={0.9}>
          <Text style={styles.buttonText}>{isCompleted ? 'Completed' : 'Start Workout'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function MetricCard({ label, value }) {
  return <View style={styles.metricCard}><Text style={styles.metricLabel}>{label}</Text><Text style={styles.metricValue}>{value}</Text></View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  hero: { height: 250, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.secondaryBg, borderBottomLeftRadius: 32, borderBottomRightRadius: 32 },
  image: { width: 140, height: 140 },
  content: { flex: 1, paddingHorizontal: LAYOUT.paddingHorizontal, paddingTop: 28, paddingBottom: 24 },
  title: { marginBottom: 24, color: COLORS.textDark, fontSize: 26, fontWeight: '800', letterSpacing: -0.5 },
  metrics: { flexDirection: 'row', marginHorizontal: -6 },
  metricCard: { flex: 1, alignItems: 'center', marginHorizontal: 6, paddingHorizontal: 16, paddingVertical: 20, borderRadius: LAYOUT.baseRadius, backgroundColor: COLORS.cardBg, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.02, shadowRadius: 8, elevation: 1 },
  metricLabel: { marginBottom: 6, color: COLORS.textMuted, fontSize: 13, fontWeight: '600', letterSpacing: 0.5, textTransform: 'uppercase' },
  metricValue: { color: COLORS.textDark, fontSize: 18, fontWeight: '700' },
  spacer: { flex: 1 },
  button: { height: 56, alignItems: 'center', justifyContent: 'center', borderRadius: LAYOUT.largeRadius },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});
