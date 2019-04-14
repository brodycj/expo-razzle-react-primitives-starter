// original source:
// https://github.com/jaredpalmer/razzle/blob/master/examples/basic/src/client.js

import React from 'react';
import { hydrate } from 'react-dom';

// allow custom adaptations if needed:
import App from './RazzleWebAppComponent';

hydrate(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
