import { QueryRenderer } from 'react-relay'
import environment from './createReactEnvironment'
import PokemonName from './ PokemonName'
import PokemonType from './PokemonType'
import graphql from 'babel-plugin-relay/macro'

export default function Pokemon() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query Pokemon_Query {
          pokemon {
            ...PokemonName_pokemon
            ...PokemonType_pokemon
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return (
            <div>
              <PokemonName {...props} />
              <PokemonType {...props} />
            </div>
          )
        }
      }}
    />
  )
}
