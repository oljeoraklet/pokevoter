import Link from "next/link";

import React from "react";

export default function Navbar() {
	return (
		<nav className='w-screen h-24 flex justify-center items-center bg-black bg-opacity-30'>
			<ul className='flex flex-row justify-center items-center gap-12 w-5/12'>
				<Link
					className='text-center text-2xl basis-1/3 hover:font-bold hover:text-3xl'
					href='/'
				>
					Home
				</Link>

				<Link
					className='text-center text-2xl basis-1/3 hover:font-bold hover:text-3xl'
					href='/scoreboard'
				>
					Scoreboard
				</Link>
			</ul>
		</nav>
	);
}
