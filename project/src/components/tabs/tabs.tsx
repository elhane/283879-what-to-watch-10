import './tabs.css';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import React, { useState } from 'react';
import { TabsName } from '../../const';

function Tabs(): JSX.Element {
  const [ activeTab, setActiveTab ] = useState(TabsName.Overview);

  const handleTabClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const selectedTab = evt.currentTarget.textContent;

    switch (selectedTab) {
      case TabsName.Overview:
        setActiveTab(TabsName.Overview);
        break;
      case TabsName.Reviews:
        setActiveTab(TabsName.Reviews);
        break;
      case TabsName.Details:
        setActiveTab(TabsName.Details);
        break;
    }
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={ activeTab === TabsName.Overview ? 'film-nav__item film-nav__item--active' : 'film-nav__item' } >
            <button className="film-nav__link" onClick={ handleTabClick }>Overview</button>
          </li>
          <li className={ activeTab === TabsName.Details ? 'film-nav__item film-nav__item--active' : 'film-nav__item' }>
            <button className="film-nav__link" onClick={ handleTabClick }>Details</button>
          </li>
          <li className={ activeTab === TabsName.Reviews ? 'film-nav__item film-nav__item--active' : 'film-nav__item' }>
            <button className="film-nav__link" onClick={ handleTabClick }>Reviews</button>
          </li>
        </ul>
      </nav>
      { activeTab === TabsName.Overview ? <Overview /> : '' }
      { activeTab === TabsName.Reviews ? <Reviews /> : '' }
      { activeTab === TabsName.Details ? <Details /> : '' }
    </>
  );
}

export default Tabs;
