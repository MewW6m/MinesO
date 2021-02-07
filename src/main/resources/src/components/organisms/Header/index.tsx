import React from 'react';

import './index.css';
import {Img} from "../../atoms/Img";
import {Title} from "../../atoms/Title";

export interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = ({ }) => (
  <header>
    <div>
      <div
          uk-sticky="media: 0"
          className="uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed"
      >
        <div className="uk-container uk-container-expand">
          <nav className="uk-navbar">
            <div className="uk-navbar-left">
              <a
                  href="../"
                  className="uk-navbar-item uk-logo uk-grid-column-small"
              >
                <Img src={"/img/logo.png"} height={30} />
                <Title label={"MinesO "} classNameString={"poiretone"} />
                <Title label={"~ SNS共有・管理サービス ~"} classNameString={"uk-text-small"} />
              </a>
            </div>
            <div className="uk-navbar-right">
              <a
                  href=""
                  uk-icon="icon: menu"
                  uk-toggle="target: #offcanvas-push"
              ></a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
);
