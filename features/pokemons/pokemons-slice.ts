import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { pokemonsApi } from './pokemons-api';
import { PokemonType } from '../../lib/types/pokemon';

type MyState = {
  pokemons: PokemonType[];
  activePokemon: PokemonType | null;
}

const initialState: MyState = {
  pokemons: [],
  activePokemon: null,
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setActivePokemon: (state, action: PayloadAction<{ value: PokemonType }>) => {
      state.activePokemon = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      pokemonsApi.endpoints.getPokemons.matchFulfilled,
      (state, action) => {
        state.pokemons = action.payload.results;
      }
    )
  }
});

export const { setActivePokemon } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;