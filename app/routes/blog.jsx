
import { Outlet } from "@remix-run/react"
import styles from "~/styles/blog.css"

export function links(){
  return[
    {rel: 'stylesheet',
    href: styles
  }
  ]
}

function Blog() {
  return (
    <main className="conteiner">
      <Outlet/>
    </main>
  )
}

export default Blog