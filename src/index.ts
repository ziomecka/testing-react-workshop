/* eslint-disable */

require('./render-app').renderApp();

if (module.hot) {
  module.hot.accept(['./render-app'], () =>
    require('./render-app').renderApp(),
  );
}
