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
    grey: {
      rgba: (a: number) => `rgba(123, 118, 117, ${a})`,
      hex: '#7B7675' as '#7B7675',
    },
    dark_grey: {
      rgba: (a: number) => `rgba(97, 95, 95, ${a})`,
      hex: '#615F5F' as '#615F5F',
    },
    orange: {
      rgba: (a: number) => `rgba(255, 130, 106, ${a})`,
      hex: '#FF826A' as '#FF826A',
    },
    dark_blue: {
      rgba: (a: number) => `rgba(44, 44, 145, ${a})`,
      hex: '#2C2C91' as '#2C2C91',
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
      rgba: (a: number) => `rgba(235, 87, 87, ${a})`,
      hex: '#EB5757' as '#EB5757',
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
    /** 40px */
    xl: '2.5rem' as '40px',
    /** 20px */
    l: '1.25rem' as '20px',
    /** 19px */
    normal: '1.1875rem' as '19px',
    /** 18px */
    sm: '1.125rem' as '18px',
    /** 12px */
    xxs: '0.75rem' as '12px',
  },
  breakpoints,
};
