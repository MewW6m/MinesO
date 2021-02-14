import React from 'react';

import styles from './About.module.css';
import {Header} from "../../organisms/Common/Header/Header";
import {TitleSection} from "../../organisms/About/TitleSection/TitleSection";
import {HitokotoSection} from "../../organisms/About/HitokotoSection/HitokotoSection";
import {FunctionSection} from "../../organisms/About/FunctionSection/FunctionSection";
import {FeaturesSection} from "../../organisms/About/FeaturesSection/FeaturesSection";
import {Footer} from "../../organisms/Common/Footer/Footer";

export interface AboutProps {
}

export const About: React.FC<AboutProps> = ({ }) => (
    <>
        <Header />
        <TitleSection />
        <HitokotoSection />
        <FunctionSection />
        <FeaturesSection />
        <Footer />
    </>
);