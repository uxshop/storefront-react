import { useNewsletter } from '@uxshop/storefront-react'

function App() {
  const { newsletter, subscribe } = useNewsletter()

  console.log(newsletter)

  return (
    <div className="App">
      <h1>{newsletter ? newsletter.email : 'Diovani'}</h1>
      <button onClick={() => subscribe({ email: 'tehgdfAbacateNedws@gmail.com', name })}>
        Click
      </button>
    </div>
  )
}

export default App
