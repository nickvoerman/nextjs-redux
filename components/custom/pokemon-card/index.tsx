import React, { FC } from "react";
import { PokemonType } from "../../../lib/types/pokemon";

export const PokemonCard: FC<{
    pokemon: PokemonType;
} & React.ButtonHTMLAttributes<HTMLDivElement>> = (props) => {

    const { pokemon, ...filteredProps } = props;

    const splitted = pokemon.url.split("/");

    const pokemonId = splitted[splitted.length - 2];

    return (
        <div {...filteredProps} className="flex flex-col gap-2 items-center">
            <img className="w-[50%]" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt="Pokemon" />
            <p className="mt-5">{pokemon.name}</p>
        </div>
    )
}