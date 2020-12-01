import { useState } from "react"
import decoration from '../assets/Decoration.svg';
import arrowDown from '../assets/Icon-Arrow-Down.svg';
import arrowUp from '../assets/Icon-Arrow-Up.svg';
import tshirt from '../assets/Icon-1.svg';
import arrowCircle from '../assets/Icon-4.svg';


import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../scss/FormMain.scss';
import { Link } from 'react-router-dom';

export const FormMain = () => {
    const [curPage, setCurPage] = useState(1);
    const [selectVisible, setSelectVisible] = useState(false);

    const pagination = (errors, touched, values) => {
          
        if(curPage === 1) {
            return (
                <section className='form--container'>
                    <div className='warning'>
                        <h1>Ważne!</h1>
                        <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                    </div>

                    <div className='form'>
                        <div>
                            <p>Krok 1/4</p>

                            <h2>Zaznacz co chcesz oddać:</h2>

                            <div className='form--content'>
                                <label>
                                    <Field type="radio" name="category" value='ubrania, które nadają się do ponownego użycia'/>
                                    <span>ubrania, które nadają się do ponownego użycia</span>
                                </label>

                                <label>
                                    <Field type="radio" name="category" value='ubrania, do wyrzucenia'/>
                                    <span>ubrania, do wyrzucenia</span>
                                </label>

                                <label>
                                    <Field type="radio" name="category" value='zabawki'/>
                                    <span>zabawki</span>
                                </label>

                                <label>
                                    <Field type="radio" name="category" value='książki'/>
                                    <span>książki</span>
                                </label>

                                <label>
                                    <Field type="radio" name="category" value='inne'/>
                                    <span>inne</span>
                                </label>
                            </div>
                        </div>

                        <ErrorMessage name="category" component="div" className='err'/>

                        <div>
                            <button type='button'  onClick={()=> values.category ? setCurPage(2) : null}>Dalej</button>
                        </div>
                    </div>
                </section>
            )
        } else if (curPage === 2) {
            return (
                <section className='form--container'>
                    <div className='warning'>
                        <h1>Ważne!</h1>
                        <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <Link style={{textDecoration: 'none', color: '#3C3C3C' }}to='/jak-spakować'>TUTAJ.</Link></p>
                    </div>

                    <div className='form'>
                        <div>
                            <p>Krok 2/4</p>

                            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                            
                            <div className="form--content page--2">
                                <p>Liczba 60l worków:</p>
                                
                                <div>
                                    <button type='button' onClick={()=>setSelectVisible(!selectVisible)}>{values.numberOfBags} <img src={selectVisible ? arrowUp : arrowDown}alt=''/></button>

                                    <div className='dropdown--select' style={{display: selectVisible ? 'block' : 'none'}}>
                                        <label onClick={()=>setSelectVisible(false)}>
                                            <Field type='radio' name='numberOfBags' value='1'/>
                                            <span>1</span>
                                        </label>

                                        <label onClick={()=>setSelectVisible(false)}>
                                            <Field type='radio' name='numberOfBags' value='2'/>
                                            <span>2</span>
                                        </label>

                                        <label onClick={()=>setSelectVisible(false)}>
                                            <Field type='radio' name='numberOfBags' value='3'/>
                                            <span>3</span>
                                        </label>

                                        <label onClick={()=>setSelectVisible(false)}>
                                            <Field type='radio' name='numberOfBags' value='4'/>
                                            <span>4</span>
                                        </label>

                                        <label onClick={()=>setSelectVisible(false)}>
                                            <Field type='radio' name='numberOfBags' value='5'/>
                                            <span>5</span>
                                        </label>

                                        <label onClick={()=>setSelectVisible(false)}>
                                            <Field type='radio' name='numberOfBags' value='6'/>
                                            <span>6</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <ErrorMessage name="numberOfBags" component="div" className='err'/>

                        </div>

                        <div>
                            <button type='button' onClick={()=>setCurPage(1)}>Wstecz</button>
                            <button type='button' onClick={()=> values.numberOfBags !== 'Wybierz' ? setCurPage(3) : null}>Dalej</button>
                        </div>
                    </div>
                    
                </section>
            )
        } else if (curPage === 3) {
            return (
                <section className='form--container'>
                    <div className='warning'>
                        <h1>Ważne!</h1>
                        <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                    </div>

                    <div className='form'>
                        <div>
                            <p>Krok 3/4</p>

                            <h2>Lokalizacja:</h2>
                            
                            <div className="form--content">

                            </div>

                            <ErrorMessage name="repeatPassword" component="div" className='err'/>
                        </div>
                        <div>
                            <button type='button' onClick={()=>setCurPage(2)}>Wstecz</button>
                            <button type='button' onClick={()=>setCurPage(4)}>Dalej</button>
                        </div>
                    </div>
                </section>
            )
        } else if (curPage === 4) {
            return (
                <section className='form--container'>
                    <div className='warning'>
                        <h1>Ważne!</h1>
                        <p>Podaj adres oraz termin odbioru rzeczy.</p>
                    </div>

                    <div className='form'>
                        <div>
                            <p>Krok 4/4</p>

                            <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>

                            <div className="form--content page--3">
                                <div>
                                    <h2>Adres odbioru:</h2>

                                    <label>
                                        Ulica
                                        <Field name='address.street'/>
                                        <ErrorMessage name="address.street" component="div" className='err'/>
                                    </label>

                                    <label>
                                        Miasto
                                        <Field name='address.city'/>
                                        <ErrorMessage name="address.city" component="div" className='err'/>
                                    </label>

                                    <label>
                                        Kod<br/>pocztowy
                                        <Field name='address.postCode' />
                                        <ErrorMessage name="address.postCode" component="div" className='err'/>
                                    </label>

                                    <label>
                                        Numer<br/>telefonu
                                        <Field name='address.phone'/>
                                        <ErrorMessage name="address.phone" component="div" className='err'/>
                                    </label>
                                </div>

                                <div>
                                    <h2>Termin odbioru:</h2>
                                    <label>
                                        Data
                                        <Field name='term.date'/>
                                        <ErrorMessage name="term.date" component="div" className='err'/>
                                    </label>

                                    <label>
                                        Godzina
                                        <Field name='term.time'/>
                                        <ErrorMessage name="term.time" component="div" className='err'/>
                                    </label>

                                    <label className='comments--label'>
                                        Uwagi<br/>dla kuriera
                                        <Field name='term.comments' as='textarea'/>
                                        <ErrorMessage name="term.comments" component="div" className='err'/>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type='button' onClick={()=>setCurPage(3)}>Wstecz</button>
                            <button type='button' onClick={()=> {
                                if(values.address.street && values.address.city && values.address.postCode 
                                    && values.address.phone && values.term.date && values.term.time && values.term.comments) {
                                        setCurPage(5)
                                    }
                                }}>Dalej</button>
                        </div>
                    </div>
                </section>
            )
        } else if (curPage === 5) {
            return (
                <section className='form--container'>

                    <div className='form'>
                        <div>
                            <h2>Podsumowanie Twojej darowizny</h2>

                            <div className="form--content page--3 page--5">
                                <div>
                                    <h2>Oddajesz:</h2>

                                    <div>
                                        <img src={tshirt} alt=''/>
                                        <p>4 worki, ubrania w dobrym stanie, dzieciom</p>
                                    </div>

                                    <div>
                                        <img src={arrowCircle} alt=''/>
                                        <p>dla lokalizacji: Warszawa</p>
                                    </div>
                                </div>

                                <div>
                                    <h2>Adres odbioru:</h2>

                                    <label>
                                        Ulica
                                        <p>{values.address.street}</p>
                                    </label>

                                    <label>
                                        Miasto
                                        <p>{values.address.city}</p>
                                    </label>

                                    <label>
                                        Kod<br/>pocztowy
                                        <p>{values.address.postCode}</p>
                                    </label>

                                    <label>
                                        Numer<br/>telefonu
                                        <p>{values.address.phone}</p>
                                    </label>
                                </div>

                                <div>
                                    <h2>Termin odbioru:</h2>
                                    <label>
                                        Data
                                        <p>{values.term.date}</p>
                                    </label>

                                    <label>
                                        Godzina
                                        <p>{values.term.time}</p>
                                    </label>

                                    <label className='comments--label'>
                                        Uwagi<br/>dla kuriera
                                        <p>{values.term.comments}</p>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type='button' onClick={()=>setCurPage(4)}>Wstecz</button>
                            <button type="submit" onClick={()=>setCurPage(-1)}>Potwierdzam</button>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className='form--container'>
                    <div className='form'>
                        <div className='last--page'>
                            <h1>Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.</h1>
                            <img src={decoration} alt='decoration' />
                        </div>
                    </div>
                </section>
            )
        }
    }

    return (
        <Formik
        initialValues={{
            category: '', 
            numberOfBags: 'Wybierz', 
            address: {street: '', city: '', postCode: '', phone: ''},
            term: {date: '', time: '', comments: ''}
        }}

            validate={values => {
                const errors = {};
            
                if (!values.category) {
                    errors.category = 'Musisz coś wybrać aby przejść dalej!';
                }


                if (!values.numberOfBags) {
                    errors.numberOfBags = 'Musisz wybrać liczbę worków aby przejść dalej!'
                }


                if (!values.address.street) {
                    errors.address.street = 'Pole obowiązkowe!'
                }
                if (!values.address.city) {
                    errors.address.city = 'Pole obowiązkowe!'
                }
                if (!values.address.postCode) {
                    errors.address.postCode = 'Pole obowiązkowe!'
                }
                if (!values.address.phone) {
                    errors.address.phone = 'Pole obowiązkowe!'
                }


                if (!values.term.date) {
                    errors.term.date = 'Pole obowiązkowe!'
                }
                if (!values.term.time) {
                    errors.term.time = 'Pole obowiązkowe!'
                }
                if (!values.term.comments) {
                    errors.term.comments = 'Pole obowiązkowe!'
                }
            
                return errors;
            }}

            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {({errors, touched, values}) => (
                <Form>
                    {pagination(errors, touched, values)}
                </Form>
            )}
        </Formik>
    )
}