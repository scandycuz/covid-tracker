import React from 'react';
import {Provider} from 'react-redux';
import TrackerApp from 'containers/App';
import store from './src/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <TrackerApp />
    </Provider>
  );
};

export default App;
