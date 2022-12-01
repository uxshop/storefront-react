import { useBlogCategories, useBlogPosts, useCart } from '@uxshop/storefront-react'
import { useEffect, useState } from 'react'
import { useFetcher } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(false)

  const cart = useBlogPosts({ id: 'jdj' })

  console.log('🚀 ~ file: App.tsx:10 ~ App ~ blogCategories', cart.errors)

  useEffect(() => {}, [])
  return <div className="App"></div>
}

export default App
