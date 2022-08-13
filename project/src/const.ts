export enum AppRoute {
  Root = '/',
  Login = '/login',
  FilmsList = '/mylist',
  Films = '/films/',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/not_found'
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
  Comments = '/comments',
  Promo = '/promo',
  Favorite = '/favorite'
}

export const TIMEOUT_SHOW_ERROR = 3000;

export enum TabsNames {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export const COMMENT_MIN_LENGTH = 50;
export const COMMENT_MAX_LENGTH = 400;

export enum NameSpace {
  User = 'USER',
  Data = 'DATA',
  Film = 'FILM',
  PromoFilm = 'PROMO_FILM',
  Reviews = 'REVIEWS',
}

export const ADD_FILM_IN_LIST = 1;
export const DELETE_FILM_FROM_LIST = 0;
