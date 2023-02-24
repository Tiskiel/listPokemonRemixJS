import * as process from "process";
import axios from "axios";
import dotenv from "dotenv"
export default class PokemonDataService {

    pokemonDataUrl? : string = process.env.POKEMON_PATH

    async getPokemon(pokemon: string) : Promise<any> {
        const data : any = await axios.get(this.pokemonDataUrl + pokemon)
        console.log(data)
        return data
    }
}