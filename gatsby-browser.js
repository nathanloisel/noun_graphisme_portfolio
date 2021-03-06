/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
/* eslint-disable no-use-before-define */
const React = require('react');
const { LocationProvider } = require('@reach/router');

exports.wrapPageElement = (apiCallbackContext) => {
  return <LocationProvider>{apiCallbackContext.element}</LocationProvider>;
};
