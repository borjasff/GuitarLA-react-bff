import { Link, useLocation } from "@remix-run/react"
import image from "../../public/img/carrito.png"
function Navegation() {
    const location = useLocation()
  return (
    <nav className="navegation">
        <Link
            to="/"
            prefetch="render"
            className={location.pathname === '/' ? 'active' : ''}
            >
        Main</Link>
        <Link
            to="/us"
            prefetch="render"
            className={location.pathname === '/us' ? 'active' : ''}
            >
        Us</Link>
        <Link
            to="/guitarras"
            prefetch="render"
            className={location.pathname === '/guitarras' ? 'active' : ''}
            >
        Shop</Link>
        <Link
            to="/blog"
            prefetch="render"
            className={location.pathname === '/blog' ? 'active' : ''}
            >
        Blog</Link>

        <Link
            to="/shoppingCart"
            prefetch="render"
            className={location.pathname === '/shoppingCart' ? 'active' : ''}
            >
        <img src={image} alt="shopping cart" /></Link>
    </nav>
  )
}

export default Navegation