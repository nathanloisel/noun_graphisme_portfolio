import 'styled-components';

const breakpoints = {
  xxl: (params: string) => `@media all and (min-width:1400px) {${params}}`,
  xl: (params: string) => `@media all and (min-width:1200px) and (max-width: 1399px) {${params}}`,
  l: (params: string) => `@media all and (min-width: 960px) and (max-width: 1199px) {${params}}`,
  m: (params: string) => `@media all and (min-width: 769px) and (max-width: 959px) {${params}}`,
  s: (params: string) => `@media all and (min-width: 480px) and (max-width: 768px) {${params}}`,
  xs: (params: string) => `@media all and (max-width: 599px) {${params}}`,
  xxs: (params: string) => `@media all and (max-width: 479px) {${params}}`,
  under_xl: (params: string) => `@media all and (max-width: 1200px) {${params}}`,
  under_l: (params: string) => `@media all  and (max-width: 960px) {${params}}`,
  under_m: (params: string) => `@media all and (max-width: 769px) {${params}}`,
  under_s: (params: string) => `@media all (max-width: 480px) {${params}}`,
  under_xs: (params: string) => `@media all (max-width: 479px) {${params}}`,

  upper_l: (params: string) => `@media all  and (min-width: 960px) {${params}}`,
  upper_m: (params: string) => `@media all and (min-width: 769px) {${params}}`,
  upper_s: (params: string) => `@media all (min-width: 480px) {${params}}`,
  upper_xs: (params: string) => `@media all (min-width: 479px) {${params}}`,
};

const sectionPaddings = {
  xxl: '350px' as '350px',
  xl: '200px' as '200px',
  l: '150px' as '150px',
  m: '50px' as '50px',
  s: '50px' as '50px',
  xs: '10px' as '10px',
  xxs: '5px' as '5px',
};

export const theme = {
  color: {
    dark_blue: {
      rgba: (a: number) => `rgba(11, 24, 78, ${a})`,
      hex: '#0b184e' as '#0b184e',
    },
    blue_2: {
      rgba: (a: number) => `rgba(53, 95, 235, ${a})`,
      hex: '#355FEB' as '#355FEB',
    },
    blue: {
      rgba: (a: number) => `rgba(0, 210, 234, ${a})`,
      hex: '#2F80ED' as '#2F80ED',
    },
    light_blue: {
      rgba: (a: number) => `rgba(5, 152, 229, ${a})`,
      hex: '#0598E5' as '#0598E5',
    },
    dark_green: {
      rgba: (a: number) => `rgba(170, 255, 0, ${a})`,
      hex: '#AAFF00' as '#AAFF00',
    },
    green: {
      rgba: (a: number) => `rgba(111, 251, 143, ${a})`,
      hex: '#6FFB8F' as '#6FFB8F',
    },
    light_green: {
      rgba: (a: number) => `rgba(37, 223, 205, ${a})`,
      hex: '#25DFCD' as '#25DFCD',
    },
    light_green_2: {
      rgba: (a: number) => `rgba(91, 212, 173, ${a})`,
      hex: '#5BD4AD' as '#5BD4AD',
    },
    red: {
      rgba: (a: number) => `rgba(235, 100, 164, ${a})`,
      hex: '#EB64A4' as '#EB64A4',
    },
    white: {
      rgba: (a: number) => `rgba(208, 239, 255, ${a})`,
      hex: '#d0efff' as '#d0efff',
    },
    black: {
      rgba: (a: number) => `rgba(10, 10, 10, ${a})`,
      hex: '#0A0A0A' as '#0A0A0A',
    },
    grey: {
      rgba: (a: number) => `rgba(96, 96, 96, ${a})`,
      hex: '#606060' as '#606060',
    },
  },
  size: {
    sectionOffset: -100 as -85,
    buttonVerticalPadding: '15px' as '15px',
    buttonHorizontalPadding: '45px' as '45px',
    headerHeight: 100 as 100,
    sectionMargin: '5em' as '5em',
    borderRadius: 20 as 20,
    sectionPaddings,
    sectionPadding:
      breakpoints.xxl(`
    padding-right: ${sectionPaddings.xxl};
    padding-left: ${sectionPaddings.xxl};
  `) +
      breakpoints.xl(`
    padding-right: ${sectionPaddings.xl};
    padding-left: ${sectionPaddings.xl};
  `) +
      breakpoints.l(`
    padding-right: ${sectionPaddings.l};
    padding-left: ${sectionPaddings.l};
  `) +
      breakpoints.m(`
    padding-right: ${sectionPaddings.m};
    padding-left: ${sectionPaddings.m};
  `) +
      breakpoints.s(`
    padding-right: ${sectionPaddings.s};
    padding-left: ${sectionPaddings.s};
    
  `) +
      breakpoints.xs(`
    padding-right: ${sectionPaddings.xs};
    padding-left: ${sectionPaddings.xs};
  `) +
      breakpoints.xxs(`
    padding-right: ${sectionPaddings.xxs};
    padding-left: ${sectionPaddings.xxs};
  `),
  },
  typo: {
    /** 60px */
    titan: '3em' as '3em',
    /** 36px */
    enormous: '2.25em' as '2.25em',
    /** 24px */
    huge: '1.5em' as '1.5em',
    /** 18px */
    big: '1.125em' as '1.125em',
    /** 16px */
    medium: '1em' as '1em',
    /** 12px */
    little: '0.75em' as '0.75em',
  },
  breakpoints,
};
