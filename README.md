# Art App

iOS and Android apps for Art App

## Local setup

Follow the [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) for the relevant environment up to (but not including) "Creating a new application".

### Bundler

1. Install JavaScript Dependencies

```sh
yarn
```

2. Start the bundler

```sh
yarn start
```

### iOS

```sh
cd ios
pod install --repo-update
cd ..
yarn ios
```

You can also run the app directly from XCode by opening the workspace in XCode and clicking on the play icon.

### Android

```sh
yarn android
```

Note if this if your first time running an Android project, you'll need to register an emulator in Android Studio first. This can be done by opening Android studio, and on the launch page choose Configure -> AVD.

You can also run the app directly from Android Studio by opening the project in Android Studio and clicking on the play icon.

### Dependencies

- React navigation (https://reactnavigation.org)
- React query (https://react-query.tanstack.com)
- Axios (https://axios-http.com/docs/intro)
- React native fast image (https://github.com/DylanVann/react-native-fast-image)
