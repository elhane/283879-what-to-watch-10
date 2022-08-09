import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import FirstScreen from '../../pages/first-screen/first-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import FilmsListScreen from '../../pages/films-list-screen/films-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { isCheckedAuth } from '../../utils';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getDataLoadedStatus } from '../../store/films-data/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getDataLoadedStatus);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={ browserHistory }>
      <Routes>
        <Route
          path={ AppRoute.Root }
          element={ <FirstScreen /> }
        />
        <Route
          path={ AppRoute.Login }
          element={ <AuthScreen /> }
        />
        <Route
          path={ AppRoute.FilmsList }
          element={
            <PrivateRoute authorizationStatus={ authorizationStatus } >
              <FilmsListScreen />
            </PrivateRoute>
          }
        />

        <Route path={ AppRoute.Film } element={ <FilmScreen /> }></Route>

        <Route
          path={ AppRoute.AddReview }
          element={
            <PrivateRoute authorizationStatus={ authorizationStatus } >
              <AddReviewScreen />
            </PrivateRoute>
          }
        />

        <Route
          path={ AppRoute.Player }
          element={ <PlayerScreen /> }
        />
        <Route
          path="*"
          element={ <NotFoundScreen /> }
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
