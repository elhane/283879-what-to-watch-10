export enum AppRoute {
  Root = '/',
  Login = '/login',
  FilmsList = '/mylist',
  Films = '/films/',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const DEFAULT_FILM_GENRE = 'All genres';

export const FILMS_PER_STEP_AMOUNT = 8;

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

export const TIMEOUT_SHOW_ERROR = 3000;
