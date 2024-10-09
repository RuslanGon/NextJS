import Link from "next/link.js"


const Details = ({post}) => {
  return (
    <div>
         <h2>{post.title}</h2>
        <p>{post.body}</p>
        <strong>Avtor ID {post.id}</strong>
        <br/>
        <Link href='/'>Go back</Link>
    </div>
  )
}

export default Details