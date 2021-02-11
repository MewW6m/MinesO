import React from 'react';

import styles from './Feature.module.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { IconContext } from "react-icons";
import {IconType} from "react-icons/lib";

UIkit.use(Icons);

export interface FeatureProps {
    Icon: IconType;
    title: string;
    detail: string;
}

export const Feature: React.FC<FeatureProps> = ({ Icon, title, detail }) => (
    <div className="uk-padding uk-width-1-3@m">
        <IconContext.Provider value={{ style: { fontSize: '5em' } }} >
            <Icon />
        </IconContext.Provider>
        <h2>{title}</h2>
        <p>{detail}</p>
    </div>
);