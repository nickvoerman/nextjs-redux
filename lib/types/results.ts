import { PokemonType } from "./pokemon";

export type ResultsType = {
    count: number[];
    next: string | null;
    previous: string | null;
    results: PokemonType[];
}