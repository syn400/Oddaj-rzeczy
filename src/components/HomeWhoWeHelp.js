import '../scss/HomeWhoWeHelp.scss';
import decoration from '../assets/Decoration.svg';
import {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import '../fire';

const db = firebase.firestore();


export const HomeWhoWeHelp = () => {
    const [content, setContent] = useState('Foundations');
    const [collection, setCollection] = useState([]);
    const [counter, setCounter] = useState([0, 3]);
    const [currentPage, setCurrentPage] = useState(1)
    
    const getCollection = (val) => {
        db.collection(val).get().then(documentSnapshot => {
            let array = [];
            documentSnapshot.forEach((doc) => {
                array.push(doc.data())
            })
            setCollection(array)
            }
        )
    }
    
    useEffect(()=>{
        getCollection('Foundations')
    }, [])

    const showParagraph = () => {
        if(content === 'Organizations') {
            return <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        } else if (content === 'Local') {
            return <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        } else {
            return <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
        }
    }

    const getName = () => {
        if(content === 'Organizations') {
            return 'Organizacja';
        } else if (content === 'Local') {
            return 'Zbiórka';
        } else {
            return 'Fundacja';
        }
    }

    const pagination = () => {
        const itemsOnPage = 3;
        const pages = Math.ceil(collection.length/itemsOnPage);
        
        if (pages > 1) {
            return (
                <ul className='pagination'>
                    {new Array(pages).fill(null).map((_,i) => {
                        return (
                            <li onClick={()=> {
                                setCounter([(i+1)*3-3, (i+1)*3])
                                setCurrentPage(i+1)
                            }} className={currentPage === i+1 ? 'active' : null}>{i+1}</li>
                        )
                    })}
                </ul>
            )
        } else {
            return null
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
                        onClick={()=> {
                            setContent('Foundations');
                            getCollection('Foundations');
                            setCurrentPage(1);
                            setCounter([0, 3])
                        }}>Fundacjom</button>
                    <button
                        className={content === 'Organizations' ? 'active' : null} 
                        onClick={()=> {
                            setContent('Organizations');
                            getCollection('Organizations');
                            setCurrentPage(1);
                            setCounter([0, 3])
                        }}>Organizacjom<br/>pozarządowym</button>
                    <button
                        className={content === 'Local' ? 'active' : null} 
                        onClick={()=> {
                            setContent('Local');
                            getCollection('Local');
                            setCurrentPage(1);
                            setCounter([0, 3])
                        }}>Lokalnym<br/>zbiórkom</button>
                </div>

                {showParagraph()}

                <ul className='result--list'>
                    {collection.slice(counter[0], counter[1]).map((e) => {
                        return (
                            <li key={collection.indexOf(e)}>
                                <div>
                                    <h2>{getName()} "{e.name}"</h2>
                                    <p>{e.mission}</p>
                                </div>
                                <p>{e.category}</p>
                            </li>
                        )
                    })}
                </ul>

                <div className='pagination'>
                    {pagination()}
                </div>
            </div>
        </section>
    )
}