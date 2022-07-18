import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import FirstScreen from '../pages/first-screen/first-screen';
import AuthScreen from '../pages/auth-screen/auth-screen';
import FilmsListScreen from '../pages/films-list-screen/films-list-screen';
import FilmScreenLayout from '../pages/film-screen-layout/film-screen-layout';
import AddReviewScreen from '../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../pages/player-screen/player-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Films } from '../../types/films';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';

type AppScreenProps = {
  title: string,
  genre: string,
  year: number,
  films: Films
}

function App({ title, genre, year, films }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ AppRoute.Root }
          element={ <FirstScreen title={ title } genre={ genre } year={ year } films={ films } /> }
        />
        <Route
          path={ AppRoute.Login }
          element={ <AuthScreen /> }
        />
        <Route
          path={ AppRoute.FilmsList }
          element={
            <PrivateRoute authorizationStatus={ AuthorizationStatus.Auth } >
              <FilmsListScreen films={ films } />
            </PrivateRoute>
          }
        />

        <Route path={ AppRoute.Films } element={ <FilmScreenLayout films={ films }/> }>
          <Route path=":id" element={<Overview films={ films } /> } />
          <Route path=":id/details" element={<Details films={ films } /> } />
          <Route path=":id/reviews" element={<Reviews films={ films } /> } />
        </Route>

        <Route
          path={ AppRoute.AddReview }
          element={ <AddReviewScreen films={ films } /> }
        />
        <Route
          path={ AppRoute.Player }
          element={ <PlayerScreen films={ films } /> }
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
