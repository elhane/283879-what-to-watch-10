import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/selectors';
import React from 'react';

type breadcrumbsItem = {
  title: string
  href: string
}

type HeaderProps = {
  isShowLoginLink?: boolean,
  isIncludeBreadcrumbs?: boolean,
  breadcrumbsItems?: breadcrumbsItem[],
  pageTitle?: string,
  filmsCount?: number,
  extraClasses?: string
}

function Header({
  isShowLoginLink = true,
  isIncludeBreadcrumbs,
  breadcrumbsItems = [],
  pageTitle,
  filmsCount,
  extraClasses = ''
}: HeaderProps): JSX.Element {

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);

  const handleLogoutLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className={`page-header ${ extraClasses }`}>
      <div className="logo">
        <Link className="logo__link" to='/'>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      { isIncludeBreadcrumbs &&
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            { breadcrumbsItems?.map(({ title, href }) => (
              <li className="breadcrumbs__item" key={ title }>
                {href.length ?
                  <Link to={ href } className="breadcrumbs__link">{ title }</Link>
                  :
                  <span className="breadcrumbs__link">{ title }</span>}
              </li>
            ))}
          </ul>
        </nav>}

      { pageTitle && pageTitle.length &&
        <h1 className="page-title user-page__title">{ pageTitle }
          { (filmsCount && filmsCount > 1) ?
            <span className="user-page__film-count"> { filmsCount } </span>
            :
            '' }
        </h1>}

      { authorizationStatus === AuthorizationStatus.Auth ?
        (
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <Link to={ AppRoute.FilmsList }>
                  <img src={ userData.avatarUrl } alt="User avatar" width="63" height="63"/>
                </Link>
              </div>
            </li>
            <li className="user-block__item">
              <Link className="user-block__link"
                to="/"
                onClick={ handleLogoutLinkClick }
              >Sign out
              </Link>
            </li>
          </ul>
        )
        :
        ( isShowLoginLink &&
          <div className="user-block">
            <Link className="user-block__link" to={ AppRoute.Login }>Sign in</Link>
          </div>
        )}
    </header>
  );
}

export default Header;
