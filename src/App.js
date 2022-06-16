import { useState } from 'react'
import addPokemonMutation from './addPokemonMutation'
import environment from './createReactEnvironment'
import Pokemon from './Pokemon'

function App() {
  // const [data, setData] = useState(null)
  const [mutationResponse, setMutationResponse] = useState(null)

  const addPokemon = async () => {
    await setMutationResponse(await addPokemonMutation(environment, 'Adja Sofietou', 'Diagne'))
  }

  return (
    <div
      style={{
        margin: 'auto',
        width: 800,
        fontSize: 'xx-large',
        padding: '1em',
      }}
    >
      <h1>Query</h1>
      <div>
        <Pokemon />
      </div>
      <h1>Mutation</h1>
      <div>{JSON.stringify(mutationResponse.addPokemon)}</div>
      <button onClick={() => addPokemon()}>Add pokemon</button>
    </div>
  )
}

export default App
