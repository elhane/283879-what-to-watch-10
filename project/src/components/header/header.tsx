type breadcrumbsItem = {
  title: string
  href?: string
}

type HeaderProps = {
  isAuthorized: boolean,
  isIncludeBreadcrumbs?: boolean,
  breadcrumbsItems?: breadcrumbsItem[],
  pageTitle?: string,
  filmsCount?: number,
  extraClasses?: string
}

function Header({
  isAuthorized,
  isIncludeBreadcrumbs,
  breadcrumbsItems = [],
  pageTitle,
  filmsCount,
  extraClasses = ''
}: HeaderProps): JSX.Element {
  return (
    <header className={`page-header ${ extraClasses }`}>
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      { isIncludeBreadcrumbs && breadcrumbsItems.length &&
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            { breadcrumbsItems.map(({ title, href }) => (
              <li className="breadcrumbs__item" key={ title }>
                <a href={ href } className="breadcrumbs__link">{ title }</a>
              </li>
            ))}
          </ul>
        </nav>}

      { pageTitle && pageTitle.length &&
        <h1 className="page-title user-page__title">{ pageTitle }
          { filmsCount && filmsCount > 0 &&
            <span className="user-page__film-count">{ filmsCount }</span>}
        </h1>}

      { isAuthorized &&
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>}
    </header>
  );
}

export default Header;
