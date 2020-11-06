import '../scss/HomeAboutUs.scss';
import decoration from '../assets/Decoration.svg';
import signature from '../assets/Signature.svg';

export const HomeAboutUs = () => {
    return (
        <article id='aboutus--section'>
            <div>
                <h2>O nas</h2>
                <img className='decoration' src={decoration} alt='Dekoracja' />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className='signature' src={signature} alt='Podpis' />
            </div>
        </article>
    )
}