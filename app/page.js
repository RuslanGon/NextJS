import Link from "next/link.js";

 async function fetchPost () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const result = await response.json()
  return result
}

export default async function Home() {
  const posts = await fetchPost()

  return (
<div>
<h1>Hello Ruslan </h1>
{posts.map(el =>(
  <div key={el.id} className="post">
    <h2>{el.title}</h2>
    <p>{el.body}</p>
    <Link className="seemore" href={`/post/` + el.id}>See more</Link>
  </div>
))}
</div>
  );
}