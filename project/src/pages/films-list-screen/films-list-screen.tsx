import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { getFavoritesList } from '../../store/film-process/selectors';
import MyListFilms from '../../components/my-list-films/my-list-films';

function FilmsListScreen(): JSX.Element {
  const favoritesList = useAppSelector(getFavoritesList);

  return (
    <div className="user-page">
      <Header pageTitle={ 'My list' } filmsCount={ favoritesList.length } extraClasses={ 'user-page__head' }/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MyListFilms />
      </section>

      <Footer />
    </div>
  );
}

export default FilmsListScreen;
