"use client";

import React, { useState } from "react";
import useSWR from "swr";
import Spinner from "./Spinner";

export type Pokemon = {
	name: string;
	img: string;
	id: number;
};
// const url = process.env.VERCEL_URL || "http://localhost:3000";
const fetcher = (path: string) => fetch(`${path}`).then((res) => res.json());

// let firstIndex = getRandomIndex(0);
// let secondIndex = getRandomIndex(firstIndex);

export default function PokemonGroup() {
	const [firstIndex, setFirstIndex] = useState<number>(getRandomIndex(0));
	const [secondIndex, setSecondIndex] = useState<number>(
		getRandomIndex(firstIndex)
	);
	const firstPokemon = useSWR(`/api/getPokemon/?pokeId=${firstIndex}`, fetcher);
	const secondPokemon = useSWR(
		`/api/getPokemon/?pokeId=${secondIndex}`,
		fetcher
	);

	function handleSettingPokemon(pokemon: Pokemon) {
		fetch(
			`/api/voteForPokemon/?pokeId=${pokemon.id}&pokeName=${pokemon.name}&pokeUrl=${pokemon.img}`
		);

		setFirstIndex(getRandomIndex(secondIndex));
		setSecondIndex(getRandomIndex(firstIndex));
		console.log("Voted for id: " + pokemon.id);
		console.log("Voted for: " + pokemon.name);
	}

	// useSWR("/api/getPokemon/?pokeId=2", fetcher);

	return (
		<div className='w-96 h-96 flex justify-around items-center gap-20'>
			{firstPokemon.isLoading ? (
				<div className='text-2xl h-72 flex-1 flex items-center justify-center aspect-square'>
					<Spinner />
				</div>
			) : (
				<div
					className='text-2xl h-72 flex-1 flex items-center justify-center bg-black bg-opacity-30 rounded-lg aspect-square cursor-pointer outline outline-4 outline-indigo-500/50 hover:outline-indigo-500 hover:outline-8 transition-all ease-in-out duration-300'
					onClick={() => handleSettingPokemon(firstPokemon.data)}
				>
					<PokemonCard pokemon={firstPokemon.data} />
				</div>
			)}
			{secondPokemon.isLoading ? (
				<div className='text-2xl h-72 flex-1 flex items-center justify-center aspect-square'>
					<Spinner />
				</div>
			) : (
				<div
					className='text-2xl h-72 flex-1 flex items-center justify-center bg-black bg-opacity-30 rounded-lg aspect-square cursor-pointer outline outline-4 outline-indigo-500/50 hover:outline-indigo-500 hover:outline-8 transition-all ease-in-out duration-300'
					onClick={() => handleSettingPokemon(secondPokemon.data)}
				>
					<PokemonCard pokemon={secondPokemon.data} />
				</div>
			)}
		</div>
	);
}

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
	return (
		<div className='h-72 flex-1 flex justify-center items-center flex-col'>
			<h2 className='text-3xl'>{pokemon.name}</h2>
			<img className='h-48 w-full object-contain' src={pokemon.img} alt='' />
		</div>
	);
}

function getRandomIndex(idx: number) {
	let randomIdx = Math.floor(Math.random() * 151);
	if (randomIdx === idx || randomIdx === 0) {
		randomIdx = getRandomIndex(idx);
	}
	return randomIdx;
}
