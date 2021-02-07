import React from 'react';

import './index.css';
import {Header} from "../../organisms/Common/Header";
import {TitleSection} from "../../organisms/Top/TitleSection";
import {HitokotoSection} from "../../organisms/Top/HitokotoSection";
import {FunctionSection} from "../../organisms/Top/FunctionSection";
import {FeaturesSection} from "../../organisms/Top/FeaturesSection";

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