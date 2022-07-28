import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import FirstScreen from '../../pages/first-screen/first-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import FilmsListScreen from '../../pages/films-list-screen/films-list-screen';
import FilmScreenLayout from '../../pages/film-screen-layout/film-screen-layout';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';

function App(): JSX.Element {

  return (
    <BrowserRouter>
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
            <PrivateRoute authorizationStatus={ AuthorizationStatus.Auth } >
              <FilmsListScreen />
            </PrivateRoute>
          }
        />

        <Route path={ AppRoute.Films } element={ <FilmScreenLayout /> }>
          <Route path=":id" element={<Overview /> } />
          <Route path=":id/details" element={<Details /> } />
          <Route path=":id/reviews" element={<Reviews /> } />
        </Route>

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
