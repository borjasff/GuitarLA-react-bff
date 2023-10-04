import Navegation from "./navegation"

function Footer() {
  return (
    <footer className='footer'>
        <div className="conteiner content">
        <Navegation/>

        <p className="copyright">Todos los derechos reservados {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer