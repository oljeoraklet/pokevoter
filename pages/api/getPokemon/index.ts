import { NextApiRequest, NextApiResponse } from "next";

export default async function getPokemon(req: NextApiRequest, res: NextApiResponse) {

  const pokeId = req.query.pokeId


  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`).then((response) => response.json())


  const upperCaseName = data.name.charAt(0).toUpperCase() + data.name.slice(1);;
  // console.log(data)
  const parsedPokemon = {
      name: upperCaseName,
      img: data.sprites.front_default,
      id: data.id
  }
    

    return res.status(200).json(parsedPokemon)

};

