import { useState } from "react"
import decoration from '../assets/Decoration.svg';
import arrowDown from '../assets/Icon-Arrow-Down.svg';
import arrowUp from '../assets/Icon-Arrow-Up.svg';
import tshirt from '../assets/Icon-1.svg';
import arrowCircle from '../assets/Icon-4.svg';

import React from 'react';
import InputMask from 'react-input-mask';

import { Formik, Form, Field } from 'formik';
import '../scss/FormMain.scss';
import { Link } from 'react-router-dom';

export const FormMain = () => {
    const [curPage, setCurPage] = useState(1);
    const [selectVisible, setSelectVisible] = useState(false);
    const [cityVisible, setCityVisible] = useState(false);

    const [multipleValidation, setMultipleValidation] = useState(null);

    const wordVariety = (counter) => {
        if(counter === '1') {
            return 'worek';
        } else if (counter < 5) {
            return 'worki';
        } else {
            return 'worków';
        }
    }

    const pagination = (errors, values, validateForm, setFieldValue) => {
          
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
                                    <Field type="radio" name="category" value='ubrania, które nadają się do ponownego użycia' />
                                    <span>ubrania, które nadają się do ponownego użycia</span>
                                </label>

                                <label>
                                    <Field type="radio" name="category" value='ubrania, do wyrzucenia' />
                                    <span>ubrania, do wyrzucenia</span>
                                </label>

                                <label>
                                    <Field type="radio" name="category" value='zabawki' />
                                    <span>zabawki</span>
                                </label>

                                <label>
                                    <Field type="radio" name="category" value='książki' />
                                    <span>książki</span>
                                </label>

                                <label>
                                    <Field type="radio" name="category" value='inne' />
                                    <span>inne</span>
                                </label>
                            </div>
                        </div>


                        {errors.category ? <div className='err'>{errors.category}</div> : null}

                        <div>
                            <button type='button' onClick={()=> {
                                if(values.category) {
                                    setCurPage(2);
                                 } else { 
                                     validateForm();
                            }}}>Dalej</button>
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
                                            <Field type='radio' name='numberOfBags' value='1' />
                                            <span>1</span>
                                        </label>

                                        <label onClick={()=>setSelectVisible(false)}>
                                            <Field type='radio' name='numberOfBags' value='2' />
                                            <span>2</span>
                                        </label>

                                        <label onClick={()=>setSelectVisible(false)}>
                                            <Field type='radio' name='numberOfBags' value='3' />
                                            <span>3</span>
                                        </label>

                                        <label onClick={()=>setSelectVisible(false)}>
                                            <Field type='radio' name='numberOfBags' value='4' />
                                            <span>4</span>
                                        </label>

                                        <label onClick={()=>setSelectVisible(false)}>
                                            <Field type='radio' name='numberOfBags' value='5' />
                                            <span>5</span>
                                        </label>

                                        <label onClick={()=>setSelectVisible(false)}>
                                            <Field type='radio' name='numberOfBags' value='6' />
                                            <span>6</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {errors.numberOfBags ? <div className='err'>{errors.numberOfBags}</div> : null}

                        <div>
                            <button type='button' onClick={()=>setCurPage(1)}>Wstecz</button>
                            <button type='button' onClick={()=> {
                                if(values.numberOfBags !== 'Wybierz') {
                                    setCurPage(3);
                                 } else { 
                                    validateForm();
                            }}}>Dalej</button>
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
                                    <button type='button' onClick={()=>setCityVisible(!cityVisible)}>{values.orgCity} <img src={cityVisible ? arrowUp : arrowDown}alt=''/></button>

                                    <div className='dropdown--select' style={{display: cityVisible ? 'block' : 'none'}}>
                                        <label onClick={()=>setCityVisible(false)}>
                                            <Field type='radio' name='orgCity' value='Poznań' />
                                            <span>Poznań</span>
                                        </label>

                                        <label onClick={()=>setCityVisible(false)}>
                                            <Field type='radio' name='orgCity' value='Warszawa' />
                                            <span>Warszawa</span>
                                        </label>

                                        <label onClick={()=>setCityVisible(false)}>
                                            <Field type='radio' name='orgCity' value='Kraków' />
                                            <span>Kraków</span>
                                        </label>

                                        <label onClick={()=>setCityVisible(false)}>
                                            <Field type='radio' name='orgCity' value='Wrocław' />
                                            <span>Wrocław</span>
                                        </label>

                                        <label onClick={()=>setCityVisible(false)}>
                                            <Field type='radio' name='orgCity' value='Katowice' />
                                            <span>Katowice</span>
                                        </label>
                                     </div>
                                </div>

                                <div className='group--select'>
                                    <h2>Komu chcesz pomóc?</h2>

                                    <div>
                                        <label>
                                            <Field type="radio" name="orgGroup" value='dzieciom' />
                                            <span>dzieciom</span>
                                        </label>

                                        <label>
                                            <Field type="radio" name="orgGroup" value='samotnym matkom' />
                                            <span>samotnym matkom</span>
                                        </label>

                                        <label>
                                            <Field type="radio" name="orgGroup" value='bezdomnym' />
                                            <span>bazdomnym</span>
                                        </label>

                                        <label>
                                            <Field type="radio" name="orgGroup" value='niepełnosprawnym' />
                                            <span>niepełnosprawnym</span>
                                        </label>

                                        <label>
                                            <Field type="radio" name="orgGroup" value='osobom starszym' />
                                            <span>osobom starszym</span>
                                        </label>
                                    </div>

                                </div>

                                <div className='organization'>
                                    <h2>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
                                    <Field name='orgName'/>
                                </div>
                            </div>
                        </div>

                        {!null && (!values.orgGroup || values.orgCity === 'Wybierz') ? <div className='err'>{multipleValidation}</div> : null}

                        <div>
                            <button type='button' onClick={()=>setCurPage(2)}>Wstecz</button>
                            <button type='button' onClick={()=> {
                                if(values.orgCity !== 'Wybierz' && values.orgGroup) {
                                    setMultipleValidation(null);
                                    setCurPage(4);
                                 } else { 
                                    setMultipleValidation('Wybierz lokalizację oraz komu chcesz pomóc!')
                            }}}>Dalej</button>
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
                                        <Field name='street' />
                                    </label>

                                    <label>
                                        Miasto
                                        <Field name='city' />
                                    </label>

                                    <label>
                                        Kod<br/>pocztowy
                                        <Field name='postCode' render={()=>{
                                            return <InputMask name='postCode' mask='99-999' value={values.postCode} onChange={e => setFieldValue('postCode', e.target.value)} />
                                        }} />
                                    </label>

                                    <label>
                                        Numer<br/>telefonu
                                        <Field name='phone' render={()=>{
                                            return <InputMask name='phone' mask='999 999 999' value={values.phone} onChange={e => setFieldValue('phone', e.target.value)} />
                                        }} />
                                    </label>
                                </div>

                                <div>
                                    <h2>Termin odbioru:</h2>
                                    <label>
                                        Data
                                        <Field name='date' render={()=>{
                                            return <InputMask name='date' mask="99/99/2099" value={values.date} onChange={e => setFieldValue('date', e.target.value)} />
                                        }} />
                                    </label>

                                    <label>
                                        Godzina
                                        <Field name='time' render={()=>{
                                            return <InputMask name='time' mask="99:99" value={values.time} onChange={e => setFieldValue('time', e.target.value)} />
                                        }} />
                                    </label>

                                    <label className='comments--label'>
                                        Uwagi<br/>dla kuriera
                                        <Field name='comments' as='textarea'/>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {!null && (!values.street || !values.city || !values.postCode || !values.phone || !values.date || !values.time) 
                            ? <div className='err'>{multipleValidation}</div> : null}

                        <div>
                            <button type='button' onClick={()=>setCurPage(3)}>Wstecz</button>
                            <button type='button' onClick={()=> {
                                if(values.street && values.city && values.postCode 
                                    && values.phone && values.date && values.time) {
                                    setCurPage(5);
                                 } else { 
                                    setMultipleValidation('Musisz wypełnić wszystkie pola!');
                            }}}>Dalej</button>
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
                                        <p>{values.numberOfBags} {wordVariety(values.numberOfBags)}, {values.category}, {values.orgGroup}</p>
                                    </div>

                                    <div>
                                        <img src={arrowCircle} alt=''/>
                                        <p>dla lokalizacji: {values.orgCity}</p>
                                    </div>
                                </div>

                                <div>
                                    <h2>Adres odbioru:</h2>

                                    <span>
                                        Ulica
                                        <p>{values.street}</p>
                                    </span>

                                    <span>
                                        Miasto
                                        <p>{values.city}</p>
                                    </span>

                                    <span>
                                        Kod<br/>pocztowy
                                        <p>{values.postCode}</p>
                                    </span>

                                    <span>
                                        Numer<br/>telefonu
                                        <p>{values.phone}</p>
                                    </span>
                                </div>

                                <div>
                                    <h2>Termin odbioru:</h2>
                                    <span>
                                        Data
                                        <p>{values.date}</p>
                                    </span>

                                    <span>
                                        Godzina
                                        <p>{values.time}</p>
                                    </span>

                                    <span className='comments--label'>
                                        Uwagi<br/>dla kuriera
                                        <p>{values.comments ? values.comments : 'brak'}</p>
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

            orgCity: 'Wybierz',
            orgGroup: '',
            orgName: '',

            street: '',
            city: '',
            postCode: '',
            phone: '',
            date: '',
            time: '',
            comments: ''
        }}

            validate={values => {
                const errors = {};

                switch(curPage) {
                    case 1:
                        if(!values.category) {
                            errors.category = 'Musisz coś wybrać aby przejść dalej!'
                        }
                        break;
                    case 2:
                        if(values.numberOfBags === 'Wybierz') {
                            errors.numberOfBags = 'Musisz wybrać liczbę worków aby przejść dalej!'
                        }
                        break;
                    case 3:
                        if(values.orgCity === 'Wybierz') {
                            errors.orgCity = 'Wybierz komu chcesz pomóc oraz w jakiej lokalizacji!'
                        }

                        if(!values.orgGroup) {
                            errors.orgGroup = 'Wybierz komu chcesz pomóc oraz w jakiej lokalizacji!'
                        }
                        break;
                    case 4:
                        if(!values.street) {
                            errors.street = 'Pole obowiązkowe!'
                        }

                        if(!values.city) {
                            errors.city = 'Pole obowiązkowe!'
                        }

                        if(!values.postCode) {
                            errors.postCode = 'Pole obowiązkowe!'
                        }

                        if(!values.phone) {
                            errors.phone = 'Pole obowiązkowe!'
                        }

                        if(!values.date) {
                            errors.date = 'Pole obowiązkowe!'
                        }

                        if(!values.time) {
                            errors.time = 'Pole obowiązkowe!'
                        }
                        break;
                    default:
                    }
                return errors;
            }}

            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {({errors, values, validateForm, setFieldValue}) => (
                <Form>
                    {pagination(errors, values, validateForm, setFieldValue)}
                </Form>
            )}
        </Formik>
    )
}