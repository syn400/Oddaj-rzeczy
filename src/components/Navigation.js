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
                    <Link to='/' style={{textDecoration: 'none'}}><li>Start</li></Link>
                </ScrollTo>

                <ScrollTo style={{textDecoration: 'none'}} activeClassName='active' offset={-200} to="steps--section" spy={true} smooth={true} duration={500}>
                    <Link to='/' style={{textDecoration: 'none'}}><li>O co chodzi?</li></Link>
                </ScrollTo>

                <ScrollTo style={{textDecoration: 'none'}} activeClassName='active' offset={-60} to="aboutus--section" spy={true} smooth={true} duration={500}>
                    <Link to='/' style={{textDecoration: 'none'}}><li>O nas</li></Link>
                </ScrollTo>

                <ScrollTo style={{textDecoration: 'none'}} activeClassName='active' to="organizations--section" spy={true} smooth={true} duration={500}>
                    <Link to='/' style={{textDecoration: 'none'}}><li>Fundacja i organizacje</li></Link>
                </ScrollTo>

                <ScrollTo style={{textDecoration: 'none'}} activeClassName='active' to="contact--section" spy={true} smooth={true} duration={500}>
                    <Link to='/' style={{textDecoration: 'none'}}><li>Kontakt</li></Link>
                </ScrollTo>
            </ul>
        </nav>
    )
}