import { Link } from '@remix-run/react'
import logoTipo from '../../public/img/logo-light.webp'

const Logo = () => {
    return (
        <div className="logo">
            <Link to='/'><img src={logoTipo} alt="" /></Link>
        </div>
    )
}

export default Logo