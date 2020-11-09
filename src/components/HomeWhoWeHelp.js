import '../scss/HomeWhoWeHelp.scss';
import decoration from '../assets/Decoration.svg';
import {useState} from 'react';

export const HomeWhoWeHelp = () => {
    const [content, setContent] = useState('Foundations');

    const showParagraph = () => {
        if(content === 'Organizations') {
            return <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        } else if (content === 'Local') {
            return <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        } else {
            return <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
        }
    }

    return (
        <section id='organizations--section'>
            <div className='organizations--container'>
                <h2>Komu pomagamy?</h2>
                <img src={decoration} alt='Dekoracja' />
                <div className='btn--container'>
                    <button 
                        className={content === 'Foundations' ? 'active' : null} 
                        onClick={()=>setContent('Foundations')}>Fundacjom</button>
                    <button
                        className={content === 'Organizations' ? 'active' : null} 
                        onClick={()=>setContent('Organizations')}>Organizacjom<br/>pozarządowym</button>
                    <button
                        className={content === 'Local' ? 'active' : null} 
                        onClick={()=>setContent('Local')}>Lokalnym<br/>zbiórkom</button>
                </div>
                {showParagraph()}
                <ul className='result--list'>
                    <li>
                        <div>
                            <h2>Fundacja "Dbam o zdrowie"</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </li>

                    <li>
                        <div>
                            <h2>Fundacja "Dla dzieci"</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <p>ubrania, meble, zabawki</p>
                    </li>

                    <li>
                        <div>
                            <h2>Fundacja "Bez domu"</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </li>
                </ul>
                <div>
                    <p>[ paginacja ]</p>
                </div>
            </div>
        </section>
    )
}