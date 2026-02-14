# Taskly

A React Native shopping list app built with Expo and Expo Router.

## Features

- Shopping list with item management
- Counter screen with history tracking
- Bottom tab navigation
- Nested stack navigation

## Tech Stack

- React Native
- Expo
- Expo Router (file-based routing)
- TypeScript
- React Native Safe Area Context
- React Native Screens

## Installation

```bash
yarn install
```

## Running the App

```bash
yarn start
```

Then:

- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan the QR code with Expo Go app on your phone

## Project Structure

```
app/
  ├── counter/          # Counter screen with nested navigation
  │   ├── index.tsx     # Main counter screen
  │   ├── history.tsx   # History screen
  │   └── _layout.tsx   # Counter stack navigator
  ├── index.tsx         # Shopping list screen
  ├── idea.tsx          # Idea screen
  └── _layout.tsx       # Root tabs navigator
components/
  └── ShoppingListItem.tsx
```
