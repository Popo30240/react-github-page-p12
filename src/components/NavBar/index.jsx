import { Link } from 'react-router-dom'
import './NavBar.scss';
 
function NavBar() {
    return (
            <nav className='navBar'>
                <Link to='/'>Accueil</Link>
                <a href='#about'>À propos</a>
                <a href='#projects'>Mes projets</a>
                <a href='#competences'>Mes compétences</a>
                <a href='#contact'>Contact</a>    
            </nav>
    )
}

export default NavBar