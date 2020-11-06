import '../scss/HomeContact.scss';
import fb from '../assets/Facebook.svg';
import ig from '../assets/Instagram.svg';
import decoration from '../assets/Decoration.svg';

import { Formik, Form, Field, ErrorMessage } from 'formik';

export const HomeContact = () => {
    return (
        <footer id='contact--section'>
            <div className='form--container'>
                <h2>Skontaktuj się z nami</h2>
                <img src={decoration} alt='Dekoracja' />

                <Formik
                initialValues={{name: '', email: '', message: '' }}

                    validate={values => {
                        const errors = {};

                        if (!values.email) {
                            errors.email = 'Adres e-mail jest wymagany!';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Podany adres email jest nieprawidłowy!';
                        } 
                    
                        if (!values.name) {
                            errors.name = 'Imię jest wymagane!';
                        }
                    
                        if (values.message.length < 120) {
                            errors.message = 'Twoja wiadomość musi mieć minimum 120 znaków!'
                        }
                    
                        return errors;
                    }}

                    onSubmit={(values) => console.log(values)}
                >
                    {({ isSubmitting, errors }) => (
                        
                        <Form>
                            <div className='contact--form'>
                                <div>
                                    <h2>Wpisz swoje Imię</h2>
                                    <Field type="text" name="name" placeholder='Imię' className={errors.hasOwnProperty('name') ? 'red--border' : null}/>
                                    <ErrorMessage name="name" component="div" className='err'/>
                                </div>

                                <div>
                                    <h2>Wpisz swój email</h2>
                                    <Field type="email" name="email" placeholder='abc@xyz.pl' className={errors.hasOwnProperty('email') ? 'red--border' : null}/>
                                    <ErrorMessage name="email" component="div" className='err'/>
                                </div>

                                <div>
                                    <h2>Wpisz swoją wiadomość</h2>
                                    <Field type="text" as="textarea" name="message" placeholder='Wiadomość..' className={errors.hasOwnProperty('message') ? 'red--border' : null}/>
                                    <ErrorMessage name="message" component="div" className='err'/>
                                </div>
                            </div>

                            <button type="submit" disabled={isSubmitting}>
                                Wyślij
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className='footer--container'>
                <p>Copyright by Coders Lab</p>

                <div> 
                    <a href='https://www.facebook.com/' target='_blank' rel="noreferrer" >
                        <img src={fb} alt='facebook' />
                    </a>
                    <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                        <img src={ig} alt='instagram' />
                    </a>
                </div>
            </div>
        </footer>
    );
}

