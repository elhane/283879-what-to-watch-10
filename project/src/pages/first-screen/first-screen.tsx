import Footer from '../../components/footer/footer';
import GenresTabs from '../../components/genres-tabs/genres-tabs';
import FilmsList from '../../components/films-list/films-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchFilmsAction, fetchPromoFilmAction } from '../../store/api-actions';
import PromoFilm from '../../components/promo-film/promo-film';
import LoadingScreen from '../loading-screen/loading-screen';
import { getLoaderStatus } from '../../store/films-data/selectors';

function FirstScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const isShowLoader = useAppSelector(getLoaderStatus);

  useEffect(() => {
    dispatch(fetchFilmsAction());
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  return (
    <>
      { isShowLoader ? <LoadingScreen /> : '' }
      <PromoFilm />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresTabs />
          <FilmsList />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FirstScreen;
