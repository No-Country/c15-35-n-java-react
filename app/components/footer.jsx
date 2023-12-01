import logoTipo from '../../public/img/logo-light.webp'
import NavegacionFooter from './navegacion'

const Footer = () => {



  return (
    <footer className="footer">
      <div className="contenedo">
        <div className="horario">
          <img src={logoTipo} alt="" />
          <p>Zymzoo winner dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
          <h4>Opening time</h4>
          <p>Monday - Friday: 7 am to 10 pm</p>
          <p>Saturday - Sunday: 9 am to 10 pm</p>
        </div>
        <div className="navegacion-footer">
          <h5>Navegación</h5>
          <NavegacionFooter />
        </div>
        <div className="contacto">
          
        </div>
        <div className="suscribete">

        </div>
      </div>
      <div className="copyright">
        <p> 2021 Made with  by HasThemes</p>
      </div>
    </footer>
  )
}

export default Footer