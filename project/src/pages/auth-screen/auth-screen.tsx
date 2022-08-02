import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { ChangeEvent, FormEvent, useState } from 'react';
import { AuthData } from '../../types/auth-data';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';

function AuthScreen(): JSX.Element {
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });
  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit(formData);
  };

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    const fieldName = (name === 'user-password') ? 'password' : 'login';

    setFormData({ ...formData, [fieldName]: value });
  };

  return (
    <div className="user-page">

      <Header pageTitle={ 'Sign in' } extraClasses={ 'user-page__head' } isShowLoginLink={ false }/>

      <div className="sign-in user-page__content">
        <form
          action=""
          className="sign-in__form"
          onSubmit={ handleSubmit }
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={ fieldChangeHandle }
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password" id="user-password"
                onChange={ fieldChangeHandle }
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>

      </div>

      <Footer />
    </div>
  );
}

export default AuthScreen;
