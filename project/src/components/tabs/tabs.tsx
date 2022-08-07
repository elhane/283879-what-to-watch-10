import './tabs.css';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import React, { useState } from 'react';
import { TabsNames } from '../../const';

function Tabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState(TabsNames.Overview);

  const handleTabClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const selectedTab = evt.currentTarget.textContent;

    switch (selectedTab) {
      case TabsNames.Overview:
        setActiveTab(TabsNames.Overview);
        break;
      case TabsNames.Reviews:
        setActiveTab(TabsNames.Reviews);
        break;
      case TabsNames.Details:
        setActiveTab(TabsNames.Details);
        break;
    }
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={ activeTab === TabsNames.Overview ? 'film-nav__item film-nav__item--active' : 'film-nav__item' } >
            <button className="film-nav__link" onClick={ handleTabClick }>Overview</button>
          </li>
          <li className={ activeTab === TabsNames.Details ? 'film-nav__item film-nav__item--active' : 'film-nav__item' }>
            <button className="film-nav__link" onClick={ handleTabClick }>Details</button>
          </li>
          <li className={ activeTab === TabsNames.Reviews ? 'film-nav__item film-nav__item--active' : 'film-nav__item' }>
            <button className="film-nav__link" onClick={ handleTabClick }>Reviews</button>
          </li>
        </ul>
      </nav>
      { activeTab === TabsNames.Overview ? <Overview /> : '' }
      { activeTab === TabsNames.Reviews ? <Reviews /> : '' }
      { activeTab === TabsNames.Details ? <Details /> : '' }
    </>
  );
}

export default Tabs;
