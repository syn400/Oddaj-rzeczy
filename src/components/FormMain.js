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
    const [cityVisible, setCityVisible] = useState(false);

    const wordVariety = (counter) => {
        if(counter === '1') {
            return 'worek';
        } else if (counter < 5) {
            return 'worki';
        } else {
            return 'worków';
        }
    }

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
                            
                            <div className="form--content page--2 page--3">
                                <div>
                                    <button type='button' onClick={()=>setCityVisible(!cityVisible)}>{values.organization.city} <img src={cityVisible ? arrowUp : arrowDown}alt=''/></button>

                                    <div className='dropdown--select' style={{display: cityVisible ? 'block' : 'none'}}>
                                        <label onClick={()=>setCityVisible(false)}>
                                            <Field type='radio' name='organization.city' value='Poznań'/>
                                            <span>Poznań</span>
                                        </label>

                                        <label onClick={()=>setCityVisible(false)}>
                                            <Field type='radio' name='organization.city' value='Warszawa'/>
                                            <span>Warszawa</span>
                                        </label>

                                        <label onClick={()=>setCityVisible(false)}>
                                            <Field type='radio' name='organization.city' value='Kraków'/>
                                            <span>Kraków</span>
                                        </label>

                                        <label onClick={()=>setCityVisible(false)}>
                                            <Field type='radio' name='organization.city' value='Wrocław'/>
                                            <span>Wrocław</span>
                                        </label>

                                        <label onClick={()=>setCityVisible(false)}>
                                            <Field type='radio' name='organization.city' value='Katowice'/>
                                            <span>Katowice</span>
                                        </label>
                                     </div>
                                </div>

                                <div className='group--select'>
                                    <h2>Komu chcesz pomóc?</h2>

                                    <div>
                                        <label>
                                            <Field type="radio" name="organization.group" value='dzieciom'/>
                                            <span>dzieciom</span>
                                        </label>

                                        <label>
                                            <Field type="radio" name="organization.group" value='samotnym matkom'/>
                                            <span>samotnym matkom</span>
                                        </label>

                                        <label>
                                            <Field type="radio" name="organization.group" value='bezdomnym'/>
                                            <span>bazdomnym</span>
                                        </label>

                                        <label>
                                            <Field type="radio" name="organization.group" value='niepełnosprawnym'/>
                                            <span>niepełnosprawnym</span>
                                        </label>

                                        <label>
                                            <Field type="radio" name="organization.group" value='osobom starszym'/>
                                            <span>osobom starszym</span>
                                        </label>
                                    </div>
                                </div>

                                <div className='organization'>
                                    <h2>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
                                    <Field name='organization.organizationName'/>
                                </div>
                            </div>

                            <ErrorMessage name="repeatPassword" component="div" className='err'/>
                        </div>
                        <div>
                            <button type='button' onClick={()=>setCurPage(2)}>Wstecz</button>
                            <button type='button' onClick={()=> {
                                if(values.organization.city !== 'Wybierz' && values.organization.group) {
                                    setCurPage(4);
                                }
                            }}>Dalej</button>
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

                            <div className="form--content page--4">
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
                                    && values.address.phone && values.term.date && values.term.time) {
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

                            <div className="form--content page--4 page--5">

                                <div>
                                    <h2>Oddajesz:</h2>

                                    <div>
                                        <img src={tshirt} alt=''/>
                                        <p>{values.numberOfBags} {wordVariety(values.numberOfBags)}, {values.category}, {values.organization.group}</p>
                                    </div>

                                    <div>
                                        <img src={arrowCircle} alt=''/>
                                        <p>dla lokalizacji: {values.organization.city}</p>
                                    </div>
                                </div>

                                <div>
                                    <h2>Adres odbioru:</h2>

                                    <span>
                                        Ulica
                                        <p>{values.address.street}</p>
                                    </span>

                                    <span>
                                        Miasto
                                        <p>{values.address.city}</p>
                                    </span>

                                    <span>
                                        Kod<br/>pocztowy
                                        <p>{values.address.postCode}</p>
                                    </span>

                                    <span>
                                        Numer<br/>telefonu
                                        <p>{values.address.phone}</p>
                                    </span>
                                </div>

                                <div>
                                    <h2>Termin odbioru:</h2>
                                    <span>
                                        Data
                                        <p>{values.term.date}</p>
                                    </span>

                                    <span>
                                        Godzina
                                        <p>{values.term.time}</p>
                                    </span>

                                    <span className='comments--label'>
                                        Uwagi<br/>dla kuriera
                                        <p>{values.term.comments}</p>
                                    </span>
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
            organization: {city: 'Wybierz', group: '', organizationName: ''},
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