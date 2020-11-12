import { Link } from "react-router-dom";
import '../scss/NotFound.scss';

export const NotFound = () => {
    return (
        <section className='not--found'>
            <h1>404</h1>
            <p>Nie znaleziono strony.</p>
            <Link style={{textDecoration: 'none'}} to='/'><span>Powrót na stronę główną</span></Link>
        </section>
    )
}