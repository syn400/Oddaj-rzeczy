import { useState } from "react"
import decoration from '../assets/Decoration.svg';
import arrowDown from '../assets/Icon-Arrow-Down.svg';
import arrowUp from '../assets/Icon-Arrow-Up.svg';

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
                                <p>Liczba 60l worków:
                                </p>
                                
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
                        <p>Krok 3/4</p>

                        <h2>Powtórz hasło</h2>
                        <Field type="password" name="repeatPassword" className={errors.repeatPassword && touched.repeatPassword  ? 'red--border' : null}/>
                        <ErrorMessage name="repeatPassword" component="div" className='err'/>

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
                        <p>Krok 4/4</p>

                        <div>
                            <button type='button' onClick={()=>setCurPage(3)}>Wstecz</button>
                            <button type='button' onClick={()=>setCurPage(5)}>Dalej</button>
                        </div>
                    </div>
                </section>
            )
        } else if (curPage === 5) {
            return (
                <section className='form--container'>
                    <div className='form'>
                        <div>
                            <button type='button' onClick={()=>setCurPage(4)}>Wstecz</button>
                            <button type="submit">Potwierdzam</button>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className='form--container'>
                    <h1>Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.</h1>
                    <img src={decoration} alt='decoration' />
                </section>
            )
        }
    }

    return (
        <Formik
        initialValues={{category: '', numberOfBags: 'Wybierz'}}

            validate={values => {
                const errors = {};
            
                if (!values.category) {
                    errors.category = 'Musisz coś wybrać aby przejść dalej!';
                }

                if (!values.numberOfBags) {
                    errors.numberOfBags = 'Musisz wybrać liczbę worków aby przejść dalej!'
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