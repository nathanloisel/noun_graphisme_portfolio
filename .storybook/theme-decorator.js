// theme-decorator.js
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from '../src/theme';
import { GlobalStyle } from '../src/global-style';
require('fontsource-bai-jamjuree/700-normal.css');
require('fontsource-bai-jamjuree/600-normal.css');
require('fontsource-rubik/700-normal.css');
require('fontsource-rubik/400-normal.css');

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}><><GlobalStyle />{storyFn()}</></ThemeProvider>
)

export default ThemeDecorator
