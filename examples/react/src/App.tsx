// import { ShopService } from '@uxshop/storefront-core'
import { useProducts } from '@uxshop/storefront-react'
import { useSidebar } from '@uxshop/storefront-react'
import { useEffect } from 'react'

function App() {
  // const sections: any = ShopService
  const products = useProducts({
    filter: {
      page: 1,
      items: 5
    }
  })
  // const showcase = useShowcases({})

  useEffect(() => console.log(products), [products])
  return <div className="App"></div>
}

export default App
