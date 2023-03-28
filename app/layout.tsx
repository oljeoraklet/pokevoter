import { Head } from "next/document";
import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
	title: "Pokevoter",
	description: "Vote for the cutest pokemon",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
				{/* <Head>
					<link rel='shortcut icon' href='/static/favicon.ico' />
				</Head> */}
				<Navbar></Navbar>
				{children}
			</body>
		</html>
	);
}
