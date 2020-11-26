import { Navigation } from "./Navigation"
import decoration from '../assets/Decoration.svg';
import '../scss/LogOut.scss'
import { Link } from "react-router-dom";

export const LogOut = () => {
    return (
        <>
            <Navigation />
            <section className="logout--section">
                <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                <img src={decoration} alt='Dekoracja' />
                <Link style={{textDecoration: 'none'}} to='/'>
                    <p>Strona główna</p>
                </Link>
            </section>
        </>
    )
}