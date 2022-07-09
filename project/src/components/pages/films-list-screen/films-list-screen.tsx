import FilmCard from '../../film-card/film-card';
import Footer from '../../footer/footer';
import Header from '../../header/header';

function FilmsListScreen(): JSX.Element {
  return (
    <div className="user-page">
      <Header isAuthorized pageTitle={ 'My list' } filmsCount={ 9 } extraClasses={ 'user-page__head' }/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            <>
              { [...Array(9)].map((index) => <FilmCard key={ index } /> )}
            </>
          }
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FilmsListScreen;
