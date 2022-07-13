import Footer from '../../footer/footer';
import Header from '../../header/header';
import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="not-found-page">
      <div className="page-content">
        <Header isAuthorized={ false } />

        <div className="not-found-page__content" style={{ marginBottom: '40px', minHeight: 'calc(100vh - 336px)' }}>
          <p style={{ textAlign: 'center' }}>404 - page not found</p>
          <Link className="" to='/' style={{ textAlign: 'center', display: 'block', color: '#c9b37e' }}>
            Return to main page
          </Link>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default NotFoundScreen;
