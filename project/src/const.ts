export enum AppRoute {
  Root = '/what-to-watch/',
  Login = '/what-to-watch/login',
  FilmsList = '/what-to-watch/mylist',
  Films = '/what-to-watch/films/',
  Film = '/what-to-watch/films/:id',
  AddReview = '/what-to-watch/films/:id/review',
  Player = '/what-to-watch/player/:id',
  NotFound = '/what-to-watch/not_found'
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Promo = '/promo',
  Favorite = '/favorite'
}

export enum NameSpace {
  User = 'USER',
  Data = 'DATA',
  Film = 'FILM',
  PromoFilm = 'PROMO_FILM',
  Reviews = 'REVIEWS',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum TabsName {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export enum CommentLength {
  Min = 50,
  Max = 400
}

export enum FavoritesListAction {
  Delete = 0,
  Add = 1
}

export enum Timeout {
  ShowError = 3000,
  ShowTrailer = 1000
}

export const Rating = {
  Bad: {
    text: 'Bad',
    max: 3
  },
  Normal: {
    text: 'Normal',
    min: 3,
    max: 5
  },
  Good: {
    text: 'Good',
    min: 5,
    max: 8
  },
  VeryGood: {
    text: 'Very Good',
    min: 8,
    max: 10
  },
  Awesome: {
    text: 'Awesome',
    min: 10
  }
};

export const DEFAULT_FILM_GENRE = 'All genres';
export const FILMS_PER_STEP_AMOUNT = 8;
