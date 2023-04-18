import React, { FC } from "react";
import { useAppSelector } from "../../../lib/redux/hooks";
import { PokemonCard } from "../pokemon-card";
export const PokemonsGrid: FC<React.ButtonHTMLAttributes<HTMLDivElement>> = (props) => {

    const pokemons = useAppSelector((state) => state.pokemons.pokemons);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-5 md:p-10">

            {pokemons?.map((pokemon, i) => {
                return (
                    <PokemonCard pokemon={pokemon} key={i} />
                )
            })}

        </div>
    )
}