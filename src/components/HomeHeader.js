import {Link} from "react-router-dom";
import {Navigation} from './Navigation';
import decoration from '../assets/Decoration.svg';
import '../scss/HomeHeader.scss';


export const HomeHeader = () => {
    return (
        <>
        <Navigation />
        <header id='header--section'>
            <div>
                <h2>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src={decoration} alt='decoration' />
                <div>
                    <Link style={{textDecoration: 'none'}} to='/oddaj-rzeczy'>
                        <p>Oddaj<br/> rzeczy</p>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to='/zorganizuj-zbiórkę'>
                        <p>Zorganizuj<br/> zbiórkę</p>
                    </Link>
                </div>
            </div>
        </header>
        </>
    )
}