import { useBlogPosts } from '@uxshop/storefront-react'

function App() {
  const blogPosts = useBlogPosts({ page: 1 })
  console.log(blogPosts)
  return <div className="App">{blogPosts && blogPosts.edges[0].node.id}</div>
}

export default App
