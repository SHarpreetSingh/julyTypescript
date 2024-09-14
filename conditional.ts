import fetch from "node-fetch"

interface PokemResults {
    count: number;
    next?: string;
    previous?: string
    results: {
        name: string;
        url: string
    }[]
}


type fetchURLReturn<T> = T extends undefined ? Promise<PokemResults> : void;

function fetchPokemn<T extends undefined | ((data: PokemResults) => void)>(
    url: string,
    cb?: T
): fetchURLReturn<T> {
    if (cb) {
        fetch(url)
            .then((data) => data.json())
            .then((data: PokemResults) => cb(data));
        return undefined as fetchURLReturn<T>
    } else {
        return fetch(url).then((data) => data.json()) as fetchURLReturn<T>;
    }
}

fetchPokemn("https://pokeapi.co/api/v2/pokemon?limit=10", (data) => {
    data.results.forEach(({ name }) => console.log(name));
});

// (async function () {
//     const data = <PokemResults>(
//       await fetchPokemn("https://pokeapi.co/api/v2/pokemon?limit=10")
//     );
//     data.results.forEach(({ name }) => console.log(name));
//   })();

