"use client";

import { ReactPropTypes, useState } from "react";
import getTwoPokemon from "./utils/getTwoPokemon";

export default function Button({ title }: { title: number }) {
	const [like, setLike] = useState(false);

	return (
		<div className='py-14' onClick={() => setLike(!like)}>
			<button className={`${like ? "bg-green-400" : "bg-red-500"} rounded p-3`}>
				{like ? "Liked" : "Not liked"}
			</button>
			<p>{title}</p>
		</div>
	);
}
