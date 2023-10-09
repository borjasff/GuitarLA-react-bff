import { useState, useEffect } from "react"
import 
    { 
        Meta,
        Links,
        Outlet,
        Scripts,
        LiveReload,
        useRouteError,
        isRouteErrorResponse,
        Link
    } from "@remix-run/react"
import styles  from "~/styles/index.css"
import Header from "~/components/header"
import Footer from "~/components/footer"


export function meta(){
    return[
        {charset: 'utf8'},
        {title: 'GuitarLA -Remix'},
        {viewport: 'width=device-width, initial-scale=1'}
    ]
}


export function links(){
    return[
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App(){
    const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart') )?? [] : null;
    const [cart, setCart] = useState(cartLS)


    // UseEffect para grabar en el LS
useEffect(() => {
        if (cart?.length === 0) return;
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    
    // useEffect para cargar el state con info del LS
    useEffect(() => {
        const cartLS = JSON.parse(localStorage.getItem('cart')) ?? [];
        setCart(cartLS);
    }, []);

    const addCart = guitar => {
        if(cart.some(guitarState => guitarState.id === guitar.id)){
            //iterator about array, and identify the elemnt duplicate
            const cartUpdate = cart.map(guitarState => {
                if(guitarState.id === guitar.id){
                    //rewrite quantity
                    guitarState.quantity += guitar.quantity
                }
                return guitarState
            })
            //add to the cart
            setCart(cartUpdate)
        } else {
            //new register
            setCart([...cart, guitar])
        }
    }

    const updateQuantity = guitar => {
        const cartUpdate = cart.map(guitarState => {
            if(guitarState.id === guitar.id){
                guitarState.quantity = guitar.quantity
            }
            return guitarState
        })
        setCart(cartUpdate)
    }
    const deleteGuitar = id => {
        const cartUpdate = cart.filter(guitarState => guitarState.id !== id)
        cartUpdate.length === 0 && localStorage.setItem('cart', '[]');
        setCart(cartUpdate)
    }

    return(
        <Document>
            <Outlet
            context={{
                addCart,
                cart,
                updateQuantity,
                deleteGuitar
            }}
            />
        </Document> 
    )
}

function Document ({children}){
    return(
    <html lang="es">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body>
            <Header/>
            {children}
            <Footer/>
            <Scripts/>
            <LiveReload/>
        </body>
    </html>
    )

}
export function CatchBoundary(){
    const error = useRouteError()
     return(
         <Document>
             <p className="error">
                 {error.status} {error.status.text}
                 <Link className="error-link" to="/">Go back</Link>
             </p>
         </Document>
     )
 }

export function ErrorBoundary(){
    const error = useRouteError()

    if(isRouteErrorResponse(error)){
        return(
            <Document>
                <p className="error">
                    {error.status} {error.statusText}
                    <Link className="error-link" to="/">Go back</Link>
                </p>
            </Document>
        )
    }
}