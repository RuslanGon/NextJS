import Link from "next/link.js"

const page = () => {
  return (
    <div>
        <h2>Client page</h2>
        <Link href="/">Go home</Link>
        <br/>
        <Link href="/client/123">client id</Link>

    </div>
  )
}

export default page