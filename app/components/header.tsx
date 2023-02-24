import React, {useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";
import {GlobalResultPokemon, Pokemon} from "~/models/pokemonDataCount.model";

export default function HeaderComponent() {
    const [pokemonData, setPokemonData] = useState<Pokemon[] | null>(null)

    useEffect(()=> {
        axios.get<GlobalResultPokemon>('https://pokeapi.co/api/v2/pokemon/').then(
            (response : AxiosResponse<GlobalResultPokemon>) => {
                console.log(response.data)
                setPokemonData(response.data.results)
            }
        )
    }, [])

    const showPokemon = pokemonData?.map((pkm) => {
        return <li key={pkm.name}>{pkm.name}</li>
    })

    return (
            <ul>
                {showPokemon}
            </ul>
    )
}