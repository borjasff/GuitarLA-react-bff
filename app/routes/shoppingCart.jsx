import { useEffect, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
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
    const [total, setTotal] = useState(0)
    const { cart, updateQuantity, deleteGuitar } = useOutletContext();

    useEffect(() => {
        const calculateTotal = cart.reduce((total, product) => total + (product.quantity * product.price), 0)
        setTotal(calculateTotal)
    }, [cart])
  return (
    <ClientOnly fallback={'Load...'}>
        {() => ( 
        <main className="conteiner">
            <h1 className="heading"></h1>
            <div className="content">
                <div className="shoppingCart">
                        <h2>Acticles</h2>

                        {cart?.length===0? 'Cart empty' : (
                            cart?.map( product => (
                                <div key={product.id} className="product">
                                    <div>
                                        <img src={product.image} alt={`image product ${product.name}`} />
                                    </div>

                                    <div>
                                        <p className="name">{product.name}</p>
                                        <p>Quantity:</p>
                                        <select value={product.quantity}
                                        className="select"
                                        onChange={e => updateQuantity({
                                            quantity: +e.target.value,
                                            id: product.id
                                        })}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <p className="price">$ <span>{product.price}</span></p>
                                        <p className="subtotal">SubTotal: $ <span>{product.quantity * product.price}</span></p>
                                    </div>

                                    <button
                                    type="button"
                                    className="btn_delete"
                                    onClick={() => deleteGuitar(product.id)}>
                                        X</button>
                                </div>
                            ))
                        )}
                </div>
                <aside className="abstract">
                    <h3>Order Summary</h3>
                    <p>Total Payable; ${total}</p>
                </aside>
            </div>
        </main>
        )}
    </ClientOnly>
  )
}
