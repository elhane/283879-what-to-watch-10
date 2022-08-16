import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import './auth-screen.css';
import FormError from '../../components/form-error/form-error';

function AuthScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const [ formData, setFormData ] = useState({ login: '', password: '' });
  const [ formErrors, setFormErrors ] = useState({loginError: '', passwordError: ''});
  const [ formValid, setFormValid ] = useState(true);
  const [ loginValid, setLoginValid ] = useState(false);
  const [ passwordValid, setPasswordValid ] = useState(false);

  const validations = {
    email: /^([\w.%+-]+)@([\w-]+\.)+(\w{2,})$/i,
    password: /^(?=.*[a-zA-Z])(?=.*\d).{2,}$/g
  };

  const validateField = (fieldName: string, value: string) => {
    switch(fieldName) {
      case 'login':
        setLoginValid(validations.email.test(value));
        setFormErrors( { ...formErrors, loginError: loginValid ? '' : 'email is invalid' });
        break;
      case 'password':
        setPasswordValid(validations.password.test(value));
        setFormErrors( { ...formErrors, passwordError: passwordValid ? '' : 'password is too short' });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formValid) {
      dispatch(loginAction(formData));
    }
  };

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    validateField(name, value);
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setFormValid(loginValid && passwordValid);
    }

    return () => {
      isMounted = false;
    };
  }, [ loginValid, passwordValid ]);

  return (
    <div className="user-page">

      <Header pageTitle={ 'Sign in' } extraClasses={ 'user-page__head' } isShowLoginLink={ false }/>

      <div className="sign-in user-page__content">
        <form
          action=""
          className="sign-in__form"
          onSubmit={ handleSubmit }
          noValidate
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="login"
                id="user-email"
                onChange={ handleFieldChange }
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            { !loginValid ? <FormError error={ formErrors.loginError} /> : '' }
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password" id="user-password"
                onChange={ handleFieldChange }
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
            { !passwordValid ? <FormError error={ formErrors.passwordError} /> : '' }
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" disabled={ !formValid }>Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AuthScreen;
