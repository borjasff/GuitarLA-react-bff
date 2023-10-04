import { Link } from "@remix-run/react"
import logo from "../../public/img/logo.svg"
import Navegation from "./navegation"

function Header() {

  return (
    <header className="header">
        <div className="conteiner bar">
            <Link to="/">
                <img className="logo" src={logo} alt="Image Logo" />
            </Link>

            <Navegation/>

        </div>
    </header>
  )
}

export default Header