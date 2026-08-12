# Fitness App

A two-screen fitness application built with React Native, Expo, and React Navigation. It runs on the web, Android, and iOS from the same JavaScript codebase.

## Requirements

- Node.js 22.13 or later
- npm
- Expo Go on a physical Android or iOS device (optional)

## Install

From the `FitnessApp` directory, install dependencies once:

```bash
npm install
```

## Run on the web

Start the web development server:

```bash
npm run web
```

Expo prints a local URL in the terminal, normally `http://localhost:8081`. Open that address in a browser.

## Run on Android

Start Expo and open Android:

```bash
npm run android
```

This requires an Android emulator running through Android Studio. To run on a physical Android device instead, start the general Expo server and scan the QR code using Expo Go:

```bash
npm start
```

## Run on iOS

Start Expo and open iOS:

```bash
npm run ios
```

The iOS simulator requires macOS and Xcode. On an iPhone, run `npm start` and scan the QR code using Expo Go.

## Useful commands

```bash
npm start       # Start Expo and choose a platform from the terminal
npm run web     # Open the web build
npm run android # Open an Android emulator
npm run ios     # Open the iOS simulator (macOS only)
```

## App flow

1. Choose a category capsule on the workout list.
2. Tap a workout card to open its details.
3. Tap the heart icon to favourite that individual workout.
4. Tap **Start Workout** to toggle its completion state.
