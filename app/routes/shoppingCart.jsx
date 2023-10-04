import styles from "~/styles/shoppingCart.css";

export function links() {
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta(){
    return [{
        title: 'GuitarLA- Shopping Cart'},
        {description: 'GuitarLA- Ticket sell, music, blog, shoppingCart, Shop'}
    ]
}
export default function shoppingCart() {
  return (
    <main className="conteiner">
        <h1 className="heading"></h1>
        <div className="content">
            <div className="shoppingCart">
                    <h2>Acticles</h2>
            </div>
            <aside className="abstract">
                <h3>Order Summary</h3>
                <p>Total Payable; $</p>
            </aside>
        </div>
    </main>
  )
}
