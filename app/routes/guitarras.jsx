import { Outlet } from "@remix-run/react"
import styles from "~/styles/guitars.css"

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


function Shop() {

  return (
    <main className="conteiner">
      <Outlet/>
    </main>
  )
}

export default Shop