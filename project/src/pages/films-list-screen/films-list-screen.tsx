import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FilmsList from '../../components/films-list/films-list';
import { useAppSelector } from '../../hooks';

function FilmsListScreen(): JSX.Element {
  const movies = useAppSelector((state) => state.movies);

  return (
    <div className="user-page">
      <Header isAuthorized pageTitle={ 'My list' } filmsCount={ movies.length } extraClasses={ 'user-page__head' }/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FilmsListScreen;
