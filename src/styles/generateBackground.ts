import { types } from '../styles/variables';

const getGradient = (colors: string[]): string =>
  `linear-gradient(90deg, ${colors[0]} 50%, ${colors[1]} 50%)`;

const generateBackground = (arr: string[]): string => {
  const mappedColors = arr.map(type => types[type]);

  if (mappedColors.length === 1) {
    return mappedColors[0];
  }

  return getGradient(mappedColors);
};

export default generateBackground;
