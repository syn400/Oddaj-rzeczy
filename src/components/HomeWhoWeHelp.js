import '../scss/HomeWhoWeHelp.scss';
import decoration from '../assets/Decoration.svg';

export const HomeWhoWeHelp = () => {
    return (
        <section id='organizations--section'>
            <div className='organizations--container'>
                <h2>Komu pomagamy?</h2>
                <img src={decoration} alt='Dekoracja' />
                <div className='btn--container'>
                    <button className='active'>Fundacjom</button>
                    <button>Organizacjom<br/>pozarządowym</button>
                    <button>Lokalnym<br/>zbiórkom</button>
                </div>
                <p>
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </p>
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