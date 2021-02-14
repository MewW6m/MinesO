import React from 'react';

import styles from './LogoLabel.module.css';
import {Img} from "../../atoms/Img/Img";
import {Title} from "../../atoms/Title/Title";

export interface LogoLabelProps {
}

export const LogoLabel: React.FC<LogoLabelProps> = ({ }) => (
    <a
        href="../"
        className="uk-navbar-item uk-logo uk-grid-column-small"
    >
      <Img src={"./img/logo.png"} height={30} />
      <Title label={"MinesO "} classNameString={"poiretone"} />
      <Title label={"~ SNS共有・管理サービス ~"} classNameString={"uk-text-small"} />
    </a>
);
