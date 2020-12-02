import {Navigation} from './Navigation';
import decoration from '../assets/Decoration.svg';
import '../scss/FormHeader.scss';

export const FormHeader = () => {

    return (
        <>
        <Navigation />
        <header className='form--header'>
            <div>
                <h2>Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</h2>
                <img src={decoration} alt='decoration' />
                <p>Wystarczą 4 proste kroki:</p>
                <div>
                    <span>
                        <div>
                            <h2>1</h2>
                            <h3>Wybierz<br/>rzeczy</h3>
                        </div>
                    </span>

                    <span>
                        <div>
                            <h2>2</h2>
                            <h3>Spakuj je<br/>w worki</h3>
                        </div>
                    </span>

                    <span>
                        <div>
                            <h2>3</h2>
                            <h3>Wybierz<br/>fundację</h3>
                        </div>
                    </span>

                    <span>
                        <div>
                            <h2>4</h2>
                            <h3>Zamów<br/>kuriera</h3>
                        </div>
                    </span>
                </div>
            </div>
        </header>
        </>
    )
}