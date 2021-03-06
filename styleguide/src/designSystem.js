
export const colors = {
  Delta: '#11A9ED',
  Dark01: '#121212',
  Dark02: '#555555',
  'Sur a11y': '#24828F',
  Peach: '#EFADA0',
  'Peach a11y': '#E37059',
  Pear: '#93DAAB',
  'Pear a11y': '#2E854B',
};

const typeSizes = [80, 48, 36, 24, 20, 16];

const rowHeights = {
  regular: 44,
  jumbo: 64,
}

// Setting up spacers
export const spacing = 16;

const fontFamilies = {
  display: 'Helvetica',
  body: 'Georgia',
};

const fontWeights = {
  regular: 'regular',
  bold: 'bold',
};

export const fonts = {
  Headline: {
    color: colors.Night,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 80,
  },
  'Title 1': {
    color: colors.Night,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 48,
  },
  'Title 2': {
    color: colors.Night,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 36,
  },
  'Title 3': {
    color: colors.Night,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  Body: {
    color: colors.Night,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 24,
  },
};



export type DesignSystem = {
  fonts: any,
  colors: { [key: string]: Color },
};
