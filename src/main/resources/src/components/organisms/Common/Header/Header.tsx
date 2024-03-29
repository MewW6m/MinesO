import React from 'react';

import styles from './Header.module.css';
import {LogoLabel} from "../../../molecules/LogoLabel/LogoLabel";

export interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = ({ }) => (
  <header>
    <div>
      <div
          uk-sticky="media: 0"
          className={"uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed " + styles.header}
      >
        <div className="uk-container uk-container-expand">
          <nav className="uk-navbar">
            <div className="uk-navbar-left">
              <LogoLabel />
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
);
