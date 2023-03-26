import Button from "./Button";
import PokemonGroup from "./PokemonGroup";
import getTwoPokemon from "./utils/getTwoPokemon";

export default async function Home() {
	return (
		<main className='py-8 px-48 flex flex-col justify-center h-screen w-screen items-center'>
			<h1 className='text-4xl font-bold mb-12'>Vote for the cutest pokemon!</h1>
			<PokemonGroup />
		</main>
	);
}
