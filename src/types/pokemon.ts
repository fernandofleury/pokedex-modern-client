export interface IPokemon {
  name: string;
  id: number;
  types: string[];
  sprites: {
    default: string;
    shiny: string;
  };
}
