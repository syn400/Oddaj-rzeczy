import {Link} from "react-router-dom";
import '../scss/Navigation.scss';
import * as Scroll from 'react-scroll';

let ScrollTo = Scroll.Link;

export const Navigation = () => {

    return (
        <nav>
            <div>
                <Link style={{textDecoration: 'none'}} to='/logowanie'>
                    <p>Zaloguj</p>
                </Link>

                <Link style={{textDecoration: 'none'}} to='/rejestracja'>
                    <p className='register--btn'>Załóż konto</p>
                </Link>
            </div>

            <ul>
                <ScrollTo style={{textDecoration: 'none'}} activeClassName='active'  to="header--section" spy={true} smooth={true} duration={500}>
                    <li>Start</li>
                </ScrollTo>

                <ScrollTo style={{textDecoration: 'none'}} activeClassName='active' to="steps--section" spy={true} smooth={true} duration={500}>
                    <li>O co chodzi?</li>
                </ScrollTo>

                <ScrollTo style={{textDecoration: 'none'}} activeClassName='active' to="aboutus--section" spy={true} smooth={true} duration={500}>
                    <li>O nas</li>
                </ScrollTo>

                <ScrollTo style={{textDecoration: 'none'}} activeClassName='active' to="organizations--section" spy={true} smooth={true} duration={500}>
                    <li>Fundacja i organizacje</li>
                </ScrollTo>

                <ScrollTo style={{textDecoration: 'none'}} activeClassName='active' to="contact--section" spy={true} smooth={true} duration={500}>
                    <li>Kontakt</li>
                </ScrollTo>
            </ul>
        </nav>
    )
}