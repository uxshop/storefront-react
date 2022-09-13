// import { ShopService } from '@uxshop/storefront-core'
import { useShowcases } from '@uxshop/storefront-react'
import { useSidebar } from '@uxshop/storefront-react/lib/hooks/use-sidebar'
import { useEffect } from 'react'

function App() {
  // const sections: any = ShopService
  const sidebar = useSidebar([{ id: 6450, name: 'Grande', type: 'attribute_secondary' }])
  // const showcase = useShowcases({})

  useEffect(() => console.log(sidebar), [sidebar])
  return <div className="App"></div>
}

export default App
