import * as React from 'react';
import LazyLoad, { forceCheck } from 'react-lazyload';
import gql from 'graphql-tag';
import styled from 'styled-components';
import client from '../client';
import { Pokemon } from '../types/pokemon';
import PokeThumb from './PokeThumb';
import PokePlaceholder from './PokePlaceholder';
import Loader from './Loader';
import getPokemons from '../persistence/getPokemons';

interface State {
  pokemons: Pokemon[];
}

const Wrapper = styled.div`
  padding-top: 48px;
  position: relative;
  text-align: center;
`;

class PokeList extends React.Component<{}, State> {
  public state = {
    pokemons: []
  };

  public componentDidMount() {
    getPokemons().then(this.handleSuccess);
  }

  public componentWillReceiveProps(nextProps) {
    setTimeout(forceCheck, 0);
  }

  private handleSuccess = pokemons => {
    if (pokemons.length) {
      this.setState({
        pokemons
      });
    }
  };

  public render() {
    const { pokemons } = this.state;

    return (
      <Wrapper>
        {!pokemons.length && <Loader />}
        {pokemons.map(pokemon => (
          <LazyLoad
            key={pokemon.id}
            placeholder={<PokePlaceholder />}
            height={140}
            offset={200}
            once
          >
            <PokeThumb {...pokemon} />
          </LazyLoad>
        ))}
      </Wrapper>
    );
  }
}

export default PokeList;
