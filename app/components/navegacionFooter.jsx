import { Link } from '@remix-run/react'

const NavegacionFooter = () => {
    return (
        <nav className='navegacion-footer'>
            <Link className='enlace-footer' to='/'>home</Link>
            <Link className='enlace-footer' to='nosotros'>nosotros</Link>
            <Link className='enlace-footer' to='/clases'>clases</Link>
            <Link className='enlace-footer' to='/tienda'>tienda</Link>
            <Link className='enlace-footer' to='/entrenadores'>entrenadores</Link>
            <Link className='enlace-footer' to='/blog'>blog</Link>
        </nav>
    )
}

export default NavegacionFooter