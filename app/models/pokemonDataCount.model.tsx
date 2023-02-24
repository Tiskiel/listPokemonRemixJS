export interface Pokemon {
    name: string;
    url: string;
}

export interface GlobalResultPokemon {
    count: number;
    next: string;
    previous?: any;
    results: Pokemon[];
}
