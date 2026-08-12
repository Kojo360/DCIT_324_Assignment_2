import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../constants/Theme';

export default function WorkoutCard({ image, title, duration, calories, onPress }) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.duration}>{duration}</Text>
        <Text style={styles.calories}>{calories}</Text>
      </View>
      <TouchableOpacity
        accessibilityLabel={`Toggle favourite for ${title}`}
        style={styles.favouriteButton}
        onPress={() => setIsFavourite(!isFavourite)}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        activeOpacity={0.7}>
        <Ionicons name={isFavourite ? 'heart' : 'heart-outline'} size={22} color={isFavourite ? COLORS.primary : COLORS.textMuted} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.cardBg, borderRadius: 24, padding: 14, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.03, shadowRadius: 12, elevation: 3 },
  imageContainer: { width: 75, height: 75, borderRadius: 18, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.secondaryBg },
  image: { width: 48, height: 48 },
  details: { flex: 1, marginLeft: 16, justifyContent: 'center' },
  title: { color: COLORS.textDark, fontSize: 16, fontWeight: '700', marginBottom: 4 },
  duration: { color: COLORS.textMuted, fontSize: 13, fontWeight: '500', marginBottom: 2 },
  calories: { color: COLORS.primary, fontSize: 12, fontWeight: '600' },
  favouriteButton: { padding: 10, borderRadius: 12, backgroundColor: COLORS.background },
});
