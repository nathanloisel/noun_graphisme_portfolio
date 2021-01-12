// theme-decorator.js
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from '../src/theme';
import { GlobalStyle } from '../src/global-style';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}><><GlobalStyle />{storyFn()}</></ThemeProvider>
)

export default ThemeDecorator
