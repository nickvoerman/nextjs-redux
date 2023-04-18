import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '../../lib/constants/api';
import { PokemonType } from '../../lib/types/pokemon';
import { ResultsType } from '../../lib/types/results';

export const pokemonsApi = createApi({
    reducerPath: "pokemons_api",
    baseQuery: fetchBaseQuery({
        baseUrl: API,
    }),
    endpoints: (builder) => ({
        getPokemons: builder.query<ResultsType, null>({
            query: () => `pokemon?limit=20`,
        }),
        getPokemonByName: builder.query<PokemonType, string>({
            query: (name) => `pokemon/${name}`,
        }),
    })
})

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonsApi;
