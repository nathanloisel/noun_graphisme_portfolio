/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
/* eslint-disable no-use-before-define */
const React = require('react');
const { LocationProvider } = require('@reach/router');
const { ThemeProvider } = require('styled-components');

const { GlobalStyle } = require('./src/global-style');
const { theme } = require('./src/theme');

exports.wrapPageElement = (apiCallbackContext) => {
  return (
    <LocationProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {apiCallbackContext.element}
      </ThemeProvider>
    </LocationProvider>
  );
};
