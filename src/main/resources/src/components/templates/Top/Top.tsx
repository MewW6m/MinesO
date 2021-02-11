import React from 'react';

import styles from './Top.module.css';
import {Header} from "../../organisms/Common/Header/Header";
import {TitleSection} from "../../organisms/Top/TitleSection/TitleSection";
import {HitokotoSection} from "../../organisms/Top/HitokotoSection/HitokotoSection";
import {FunctionSection} from "../../organisms/Top/FunctionSection/FunctionSection";
import {FeaturesSection} from "../../organisms/Top/FeaturesSection/FeaturesSection";

export interface TopProps {
}

export const Top: React.FC<TopProps> = ({ }) => (
    <>
        <Header />
        <TitleSection />
        <HitokotoSection />
        <FunctionSection />
        <FeaturesSection />
    </>
);