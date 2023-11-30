import { Link } from '@remix-run/react'

const NavegacionFooter = () => {
    return (
        <nav className='navegacion-footer'>
            <Link className='enlace-footer' to='/'>Home</Link>
            <Link className='enlace-footer' to='nosotros'>Nosotros</Link>
            <Link className='enlace-footer' to='/clases'>Clases</Link>
            <Link className='enlace-footer' to='/tienda'>Tienda</Link>
            <Link className='enlace-footer' to='/entrenadores'>Entrenadores</Link>
            <Link className='enlace-footer' to='/blog'>Blog</Link>
        </nav>
    )
}

export default NavegacionFooter