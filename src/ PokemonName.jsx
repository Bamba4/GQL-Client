import React from 'react'
import { createFragmentName } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

function PokemonName({ pokemon }) {
  return <div>{pokemon.name}</div>
}

export default createFragmentName(PokemonName, {
  pokemon: graphql`
    fragment PokemonName_name on Pokemon {
      name
    }
  `,
})
