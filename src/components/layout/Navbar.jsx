import { Link } from 'react-router-dom'

import logo from '../../img/logo.png'
import Container from './Container'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="Ibet" style={styles.logo} width="100px" height={"50.36px"} /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/adverts">Anúncios</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/newMatch">Nova partida</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/teams">Times</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/mydata">Meus Dados</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar