import React from "react";
import Toplist from "../Toplist";

export default async function scoreBoard() {
	return (
		<main className='flex flex-col items-center justify-center p-12 '>
			<h1 className='text-4xl font-extrabold mb-8'>Top List</h1>
			<Toplist />
		</main>
	);
}
