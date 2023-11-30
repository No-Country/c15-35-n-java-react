import { Link } from '@remix-run/react'


const Navegacion = () => {
    return (
        <nav className="navegacion">
            <Link className='enlace' to='/'>Home</Link>
            <Link className='enlace' to='nosotros'>Nosotros</Link>
            <Link className='enlace' to='/clases'>Clases</Link>
            <Link className='enlace' to='/tienda'>Tienda</Link>
            <Link className='enlace' to='/entrenadores'>Entrenadores</Link>
            <Link className='enlace' to='/blog'>Blog</Link>
        </nav>
    )
}

export default Navegacion