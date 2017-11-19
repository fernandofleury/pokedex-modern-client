import { waterfall } from "async";

interface IColors {
  white: string;
  black: string;
  gray: string;
}

interface ITypes {
  grass: string;
  poison: string;
  electric: string;
  fire: string;
  water: string;
  normal: string;
  flying: string;
  bug: string;
}

export const colors: IColors = {
  white: '#ffffff',
  black: '#000000',
  gray: '#f3f3f3'
};

export const types: ITypes = {
  grass: '#78c850',
  poison: '#a040a0',
  electric: '#f8d030',
  fire: '#f08030',
  water: '#6890f0',
  flying: '#a890f0',
  bug: '#a8b820',
  normal: '#a8a878'
};
