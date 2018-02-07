import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// Import apollo client.
import client from './configs/apollo-client';

// Import global styles.
import './global-styles';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
, document.getElementById('app'));

registerServiceWorker();
