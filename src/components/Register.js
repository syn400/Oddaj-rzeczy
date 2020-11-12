import {Navigation} from './Navigation';
import decoration from '../assets/Decoration.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Link} from 'react-router-dom';
import '../scss/Register.scss';

export const Register = () => { 
    return (
        <>
            <header style={{background: 'none', height: 0}}>
                <Navigation />
            </header>
            <section className='register'>
                <h2>Załóż konto</h2>
                <img src={decoration} alt='decoration' />
                <div>
                    <Formik
                    initialValues={{email: '', password: '', repeatPassword: ''}}

                        validate={values => {
                            const errors = {};

                            if (!values.email) {
                                errors.email = 'Adres e-mail jest wymagany!';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Podany adres email jest nieprawidłowy!';
                            } 
                        
                            if (!values.password) {
                                errors.password = 'Hasło jest wymagane!';
                            } else if (
                                !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(values.password) 
                            ) {
                                errors.password = `Hasło musi mieć minimum 6 znaków oraz zawierać cyfrę, małą i wielką literę`
                            }

                            if (!values.repeatPassword) {
                                errors.repeatPassword = 'Powtórz hasło!'
                            } else if (values.repeatPassword !== values.password) {
                                errors.repeatPassword = 'Hasła nie są identyczne!'
                            }
                        
                            return errors;
                        }}

                        onSubmit={(values) => console.log(values)}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form>
                                <div className='form--inputs'>
                                    <div>
                                        <h2>Email</h2>
                                        <Field type="email" name="email" className={errors.email && touched.email ? 'red--border' : null}/>
                                        <ErrorMessage name="email" component="div" className='err'/>
                                    </div>

                                    <div>
                                        <h2>Hasło</h2>
                                        <Field type="password" name="password" className={errors.password && touched.password ? 'red--border' : null}/>
                                        <ErrorMessage name="password" component="div" className='err'/>
                                    </div>

                                    <div>
                                        <h2>Powtórz hasło</h2>
                                        <Field type="password" name="repeatPassword" className={errors.repeatPassword && touched.repeatPassword  ? 'red--border' : null}/>
                                        <ErrorMessage name="repeatPassword" component="div" className='err'/>
                                    </div>
                                </div>

                                <div className='form--buttons'>
                                    <Link to='/logowanie' style={{textDecoration:'none'}}>
                                        <p>Zaloguj się</p>
                                    </Link>

                                    <button type="submit" disabled={isSubmitting}>
                                        Załóż konto
                                    </button>
                                </div>


                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </>
    )
}