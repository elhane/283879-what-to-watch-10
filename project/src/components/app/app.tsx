import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import FirstScreen from '../pages/first-screen/first-screen';
import AuthScreen from '../pages/auth-screen/auth-screen';
import FilmsListScreen from '../pages/films-list-screen/films-list-screen';
import FilmScreen from '../pages/film-screen/film-screen';
import AddReviewScreen from '../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../pages/player-screen/player-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  title: string,
  genre: string,
  year: number
}

function App({ title, genre, year }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ AppRoute.Root }
          element={ <FirstScreen title={ title } genre={ genre } year={ year } /> }
        />
        <Route
          path={ AppRoute.Login }
          element={ <AuthScreen /> }
        />
        <Route
          path={ AppRoute.FilmsList }
          element={
            <PrivateRoute authorizationStatus={ AuthorizationStatus.NoAuth } >
              <FilmsListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={ AppRoute.Film }
          element={ <FilmScreen title={ title } genre={ genre } year={ year } /> }
        />
        <Route
          path={ AppRoute.AddReview }
          element={ <AddReviewScreen /> }
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
    </BrowserRouter>
  );
}

export default App;
