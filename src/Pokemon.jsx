import { QueryRenderer } from 'react-relay'
import environment from './lib/createReactEnvironment'
import PokemonName from './ PokemonName'
import graphql from 'babel-plugin-relay/macro'

export default function Pokemon() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query Pokemon {
          pokemon {
            ...PokemonName_name
          }
        }
      `}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <PokemonName {...props} />
        }
      }}
    />
  )
}
