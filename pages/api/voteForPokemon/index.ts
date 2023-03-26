import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client"


export default async function voteForPokemon(req: NextApiRequest, res: NextApiResponse) {

    const pokeId:number = parseInt(req.query.pokeId as string)
    const pokeName:string = req.query.pokeName as string
    const pokeUrl:string = req.query.pokeUrl as string
    if(pokeId && pokeName) {
        const upsertPokemon = await prisma.pokemon.upsert({
            where: {
                pokeId: pokeId,
            },
            update: {
                votes: {increment: 1},
            },
            create: {
                pokeId: pokeId,
                name: pokeName,
                imgUrl: pokeUrl,
                votes: 1
            },
        })
        return res.status(200).send("success")
    }
    else {
        return res.status(500).send("Must have ")
    }
}