'use strict';

export default {
  ok: {
    light: '#96c93d',
    dark: '#00b09b',
  },
  warning: {
    light: '#FFCA58',
    dark: '#f37335',
  },
  critical: {
    light: '#FF4040',
    dark: '#FF4040',
  },
  purple: {
    light: '#8E2DE2',
    dark: '#4A00E0',
  },
  white: '#FFFFFF',
  offWhite: '#E9E9EF',
  lighter: '#F3F3F3',
  light: '#DAE1E7',
  dark: '#444444',
  black: '#000000',
  disabled: '#888888',
  link: '#147efb',

  hexToRgba,
};

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r},${g},${b},${alpha})`;
  } else {
    return `rgb(${r},${g},${b})`;
  }
}
