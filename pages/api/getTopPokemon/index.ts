import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";


export default async function getTopPokemon(req: NextApiRequest, res: NextApiResponse) {

    const topPokemon = await prisma.pokemon.findMany({orderBy: {votes: 'desc'}})

    return res.status(200).json(topPokemon)

}