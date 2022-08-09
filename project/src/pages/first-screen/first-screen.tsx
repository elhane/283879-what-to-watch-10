import Footer from '../../components/footer/footer';
import GenresTabs from '../../components/genres-tabs/genres-tabs';
import FilmsList from '../../components/films-list/films-list';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchFilmsAction } from '../../store/api-actions';
import PromoFilm from '../../components/promo-film/promo-film';

function FirstScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(fetchFilmsAction());
  }, []);

  return (
    <>
      {/*<PromoFilm />*/}

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {/*<GenresTabs />*/}
          {/*<FilmsList />*/}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FirstScreen;
