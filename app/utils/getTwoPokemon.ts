export default async function pokemonPicker() {
	let firstPokemonIdx = getRandomIndex(0);
	let secondPokemonIdx = getRandomIndex(firstPokemonIdx);
	const firstPokemon = await getPokemon(firstPokemonIdx);
	const secondPokemon = await getPokemon(secondPokemonIdx);

	return [firstPokemon, secondPokemon];
}

async function getPokemon(pokeId: number) {
	const res = await fetch(
		`${process.env.BASE_URL}/api/getPokemon/?pokeId=${pokeId}`
	);
	return res.json();
}

function getRandomIndex(idx: number) {
	let randomIdx = Math.floor(Math.random() * 151);
	if (randomIdx === idx || randomIdx === 0) {
		randomIdx = getRandomIndex(idx);
	}
	return randomIdx;
}
