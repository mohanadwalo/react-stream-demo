import { CSSProperties } from 'styled-components';

const colors = {
  black: '#05161C',
  white: '#fff',
  primary: '#2caab3', // Sea blue
  primaryVariant: '#2c7077', // Sea blue dark
  accentLight: '#d4dbe2', // blue light
  accentDark: '#71363c', // red(dark) robin
  //success color
  green: '#01A601',
  //warning color
  yellow: '#DEC218',
  // error color
  red: '#D44C5D',
};

type ThemeType = {
  [key: string]: CSSProperties | { [key: string]: string };
};
export const theme: ThemeType = {
  colors: colors,
  layout: {
    backgroundColor: colors.white,
    ['header' as string]: {
      fontSize: '2rem',
      fontWeight: 700,
      textTransform: 'capitalize',
      borderTop: '4px solid ' + colors.primary,
      backgroundColor: colors.white,
      zIndex: 100,
    },
    ['footer' as string]: {
      fontSize: '0.875rem',
      fontWeight: 700,
      textTransform: 'capitalize',
      backgroundColor: colors.accentLight,
      color: colors.black,
    },
  },
  competitor: {
    border: '1px solid ' + colors.accentLight,
    ['img.profile-pic' as string]: {
      border: '1px solid ' + colors.accentDark,
    },
    ['.champion-badge-0 svg path' as string]: {
      fill: colors.green,
    },
    ['.champion-badge-1 svg path' as string]: {
      fill: colors.red,
    },
    ['.champion-badge-2 svg path' as string]: {
      fill: colors.accentDark,
    },

    ['.rank' as string]: {
      paddingRight: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 700,
    },
    ['.display-name' as string]: {
      fontSize: '1rem',
    },
  },
  score: {
    paddingRight: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: 700,
    color: colors.black,
    ['&.rank0' as string]: {
      color: colors.green,
    },
    ['&.rank1' as string]: {
      color: colors.red,
    },
    ['&.rank2' as string]: {
      color: colors.accentDark,
    },
  },
  competitorDetails: {
    backgroundColor: colors.accentLight,
    ['img' as string]: {
      border: '3px solid ' + colors.primary,
    },
    ['.display-name' as string]: {
      fontSize: '1.25rem',
      fontWeight: 700,
      padding: '1rem',
    },
    ['.details' as string]: {
      display: 'flex',
      ['span' as string]: {
        display: 'flex',
        backgroundColor: colors.green,
        color: colors.white,
        padding: '0.5rem 1rem',
        margin: '0 0.5rem',
        borderRadius: '0.5rem',
      },
    },
  },
  resultMessage: {
    ['&.success' as string]: {
      border: '0.5px solid ' + colors.green,
      boxShadow: '0 1px 1px ' + colors.green,
    },
    ['&.warning' as string]: {
      border: '0.5px solid ' + colors.yellow,
      boxShadow: '0 1px 1px ' + colors.yellow,
    },
    ['&.error' as string]: {
      border: '0.5px solid ' + colors.red,
      boxShadow: '0 1px 1px ' + colors.red,
    },
  },
};
