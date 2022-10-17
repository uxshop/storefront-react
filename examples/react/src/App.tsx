// import { ShopService } from '@uxshop/storefront-core'
import { useFreights } from '@uxshop/storefront-react'

function App() {
  const freights = useFreights({ variationId: '9468973', zipCode: '93037190' })

  console.log(freights)

  return <div className="App"></div>
}

export default App
