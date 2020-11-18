import {Link} from "react-router-dom";
import '../scss/Navigation.scss';
import * as Scroll from 'react-scroll';
import { useContext } from "react";
import {AuthContext} from '../Auth';
import { PrivateRoute } from './PrivateRoute';
import firebase from '../fire';

let ScrollTo = Scroll.Link;

export const Navigation = () => {
    let {currentUser} = useContext(AuthContext);

    const isLoggedIn = () => {
        if(currentUser) {
            return (
                <div className="logged--in">
                    <PrivateRoute>
                        <h2>Cześć {currentUser.email}!</h2>
                    </PrivateRoute>

                    <Link style={{textDecoration: 'none'}} to='/rejestracja'>
                        <p className='main--btn'>Oddaj rzeczy</p>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to='/wylogowano'>
                        <p className="logout--btn" onClick={()=>firebase.auth().signOut()}>Wyloguj</p>
                    </Link>
                </div>
            )
        } else {
            return (
                <div className="default--login">
                    <Link style={{textDecoration: 'none'}} to='/logowanie'>
                        <p>Zaloguj</p>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to='/rejestracja'>
                        <p className='main--btn'>Załóż konto</p>
                    </Link>
                </div>
            )
        }
    }

    return (
        <nav>
            {isLoggedIn()}

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