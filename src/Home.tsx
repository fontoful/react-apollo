import { useGetPosts } from './hooks/useGetPosts'

const Home = () => {
  const posts = useGetPosts()

  console.log(posts)

  return <h1>hello from home</h1>
}

export default Home
