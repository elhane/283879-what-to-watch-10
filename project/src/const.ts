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
