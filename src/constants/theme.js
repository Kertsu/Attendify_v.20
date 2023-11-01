const COLORS = {
  textPrimary: "#3d3d4e",
  textSecondary: "#0d0c22",

  white: '#fff',
  gray: '#f2f2f2',
  outlineGray: '#dddddd',
  darkGray: '#bbbbbb',
  darkerGray: '#444444',

  bgPrimary: "#1DA1F2",
  bgSecondary: "#e7f5fe",
  bgTertiary: "#f2f2f2",
};

const SIZES = {
  xxxSmall: 4,
  xxSmall: 8,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  xxxLarge: 40
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS };
