module.exports = {
  project: {
    android: {
      packageName: 'com.blott_mobile'
    }
  },
  assets: ['./assets/fonts'],
  dependencies: {
    'react-native-push-notification': {
        platforms: {
            android: null, 
        },
    },
},
};