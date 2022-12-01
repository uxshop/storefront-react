import { useBlogCategories } from '@uxshop/storefront-react'

function App() {
  const blogCategories = useBlogCategories()

  console.log(blogCategories)

  return <div className="App"></div>
}

export default App
