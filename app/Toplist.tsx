"use client";

import React from "react";
import useSWR from "swr";

export type PrismaPokemon = {
	id: number;
	name: string;
	pokeId: number;
	imgUrl: string;
	votes: number;
};
const url = process.env.VERCEL_URL || "http://localhost:3000";
const fetcher = (path: string) => fetch(`${path}`).then((res) => res.json());

export default function Toplist() {
	const { data, isLoading, error } = useSWR("/api/getTopPokemon/", fetcher);

	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<ol className='flex flex-col items-center justify-start gap-8'>
					{data.map((pokemon: PrismaPokemon, idx: number) => (
						<li
							className='bg-black bg-opacity-30 flex-1 text-center p-8 w-72 rounded-lg aspect-square relative shadow-2xl'
							key={pokemon.id}
						>
							<p className='absolute text-2xl bg-green-300 p-4 rounded-full h-16 w-16 border-2 border-black shadow-2xl'>
								{idx + 1}
							</p>
							<img className='object-cover w-56' src={pokemon.imgUrl} alt='' />
							<h2 className='font-bold text-3xl'>{pokemon.name}</h2>
							<p className='flex justify-center items-center gap-4'>
								Votes:{" "}
								<span className='font-bold text-2xl'>{pokemon.votes}</span>
							</p>
						</li>
					))}
				</ol>
			)}
		</>
	);
}
