import { Link } from '@remix-run/react'

import Navegacion from './navegacion'
import Logo from './logo'

const Header = () => {
    return (
        <header className="header">
            <div className="contenedor">
                <Logo />
                <Navegacion />
                <div className="registro">
                    <Link className='enlace' to='/registro'>Registro</Link>
                    <Link className='enlace' to='/login'>Login</Link>
                </div>
                <h2 className='enlace enlace-carrito'>X</h2>
            </div>
        </header>
    )
}

export default Header