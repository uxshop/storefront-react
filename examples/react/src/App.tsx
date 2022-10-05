

// import { ShopService } from '@uxshop/storefront-core'
import { useCategoryTree, useProducts } from '@uxshop/storefront-react'
import { useSidebar } from '@uxshop/storefront-react'
import { useEffect } from 'react'

function App() {
  const categoryTree = useCategoryTree()
  useEffect(() => console.log(categoryTree), [categoryTree])
  return <div className="App"></div>

}

export default App
