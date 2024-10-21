import { useEffect, useState } from "react"
import { getPokemon } from "../services/apiPokemon"

export const useFetchPokemon = () => {
    const [ pokemons, setPokemons ] = useState([])

    useEffect(() => {
        const getData = async() => {
            try {
                const dataPokemon = await getPokemon()
                console.log(dataPokemon);
                setPokemons(dataPokemon.content || dataPokemon)
            } catch (error) {
                console.error(error)
            }
        }

        getData()
    }, [])

    return { pokemons }
}