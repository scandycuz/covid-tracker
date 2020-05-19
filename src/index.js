import React from 'react';
import {Provider} from 'react-redux';
import App from 'containers/App';
import store from './store';

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
