import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="not-found-page">

      <Header isAuthorized={ false } />

      <div className="not-found-page__content">
        <p>404 - page not found</p>
        <a href="main.html" className="logo__link logo__link--light">Return to main page</a>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundScreen;
