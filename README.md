# Damian's Mobile FlashCards

This is a React-Native project powered by Expo CLI.

To run the project, make sure you install create-react-native-app CLI using npm or yarn.

You can also use snack.expo.io which is what I used to built this project.

The source code is also in my Github repository:

https://github.com/sonorone/mobile-flashcards.git

# Launching the project

GO into the project folder and run `yarn install` or `npm install` to install all dependencies.

Finally, run the `yarn start` or `npm start` command in the same folder.

# Errors starting the project?

Example:

`Some of your project's dependencies are not compatible with currently installed expo package version:

- react-native-safe-area-context - expected version range: 0.7.3 - actual version installed: ^0.6.0
  Your project may not work correctly until you install the correct versions of the packages.
  To install the correct versions of these packages, please run: expo install [package-name ...]`

The Fix is to run the below three commands:

`expo install react-native-gesture-handler`

`expo install react-native-safe-area-context`

`expo start -c`
