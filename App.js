import React from 'react';

import WebView from 'react-native-webview';

function App() {
  return (
    <WebView
      source={{url: 'https://www.npmjs.com/package/react-native-webview'}}
    />
  );
}

export default App;
