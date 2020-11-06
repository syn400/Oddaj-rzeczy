import '../scss/HomeSimpleSteps.scss';
import { Link } from 'react-router-dom';
import decoration from '../assets/Decoration.svg';
import tShirtIcon from '../assets/Icon-1.svg';
import bagIcon from '../assets/Icon-2.svg';
import magniferIcon from '../assets/Icon-3.svg';
import arrowsIcon from '../assets/Icon-4.svg';

export const HomeSimpleSteps = () => {
    return (
        <section className='simple--steps' id='steps--section'>
            <div className='steps--title'>
                <h2>Wystarczą 4 proste kroki</h2>
                <img src={decoration} alt='Dekoracja' />
            </div>

            <div className='steps--container'>
                <div>
                    <div>
                        <img src={tShirtIcon} alt='Ikona koszulki' />
                        <h2>Wybierz rzeczy</h2>
                        <hr/>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>

                    <div>
                        <img src={bagIcon} alt='Ikona torby' />
                        <h2>Spakuj je</h2>
                        <hr/>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>

                    <div>
                        <img src={magniferIcon} alt='Ikona lupy' />
                        <h2>Zdecyduj komu chcesz pomóc</h2>
                        <hr/>
                        <p>wybierz zaufane miejsce</p>
                    </div>

                    <div>
                        <img src={arrowsIcon} alt='Ikona strzałek' />
                        <h2>Zamów kuriera</h2>
                        <hr/>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
            </div>

            <div className='steps--btn'>
                <Link style={{textDecoration:'none'}} to='/logowanie'>
                    <p>Oddaj <br/> rzeczy</p>
                </Link>
            </div>
        </section>
    )
}