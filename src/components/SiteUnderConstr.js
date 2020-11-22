import { Link } from "react-router-dom"
import '../scss/SiteUnderConstr.scss';

export const SiteUnderConstr = () => {
    return (
        <section className='under--construction'>
            <h1>Strona w budowie :(</h1>
            <Link style={{textDecoration: 'none'}} to="/">
                <p>Powrót na stronę główną</p>
            </Link>
        </section>
    )
}