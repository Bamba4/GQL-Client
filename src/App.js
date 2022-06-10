import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)
  const [mutationResponse, setMutationResponse] = useState()

  const addPokemon = () => {}

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
      <div>{JSON.stringify(data)}</div>
      <h1>Mutation</h1>
      <div>{mutationResponse && JSON.stringify(mutationResponse.addPokemon)}</div>
      <button onClick={() => addPokemon()}>Add pokemon</button>
    </div>
  )
}

export default App
