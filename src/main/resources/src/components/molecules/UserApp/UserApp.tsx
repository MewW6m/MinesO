import React from 'react';

import styles from './UserApp.module.css';
import {Img} from "../../atoms/Img/Img";

export interface UserAppProps {
    editFlg: Boolean;
}

export const UserApp: React.FC<UserAppProps> = ({ editFlg }) => (
    <div className={"uk-section uk-grid-small " + styles.test3} data-uk-grid>
        <div className={"uk-width-small " + styles.test1}>
            <Img height={30} src={"./img/logo.png"}/>
        </div>
        <div className={"uk-width-expand " + styles.test2}>

        </div>
    </div>
);
