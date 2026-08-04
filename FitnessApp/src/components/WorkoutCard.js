import React, { useState } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View } from 'react-native';

import { COLORS, LAYOUT } from '../constants/Theme';

export default function WorkoutCard({ title, duration, calories, imageSource, onPress }) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.graphicBox}>
        <Image source={imageSource} style={styles.graphicImage} resizeMode="contain" />
      </View>

      <View style={styles.metaDataStack}>
        <Text style={styles.cardHeading} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.cardSubheading}>{duration}</Text>
        <Text style={styles.caloriesLabel}>{calories}</Text>
      </View>

      <TouchableOpacity
        style={styles.favoriteBadge}
        onPress={() => setIsFavourite(!isFavourite)}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        activeOpacity={0.7}>
        <Text style={[styles.favoriteGlyph, isFavourite && styles.favoriteGlyphActive]}>
          {isFavourite ? '♥' : '♡'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBg,
    borderRadius: LAYOUT.cardRadius,
    padding: 14,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 12,
    elevation: 3,
  },
  graphicBox: {
    width: 75,
    height: 75,
    backgroundColor: COLORS.secondaryBg,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphicImage: {
    width: 48,
    height: 48,
  },
  metaDataStack: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  cardSubheading: {
    fontSize: 13,
    color: COLORS.textMuted,
    fontWeight: '500',
    marginBottom: 2,
  },
  caloriesLabel: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '600',
  },
  favoriteBadge: {
    padding: 10,
    backgroundColor: COLORS.background,
    borderRadius: 12,
  },
  favoriteGlyph: {
    fontSize: 20,
    lineHeight: 22,
    color: COLORS.textMuted,
  },
  favoriteGlyphActive: {
    color: COLORS.primary,
  },
});