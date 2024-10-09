import Details from '@/app/components/Details.js'

async function fetchPostById (id) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    const result = await response.json()
    return result
  }

const Post = async ({params: {id}}) => {
  const post = await fetchPostById(id)

  return (
    <div className="post">
       <Details post={post}/>
    </div>
  )
}

export default Post