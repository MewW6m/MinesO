import React from 'react';

import './index.css';
import { FaUserShield, FaGlobe, FaUsers } from 'react-icons/fa';
import {Feature} from "../../../molecules/Feature";

export interface FeaturesSectionProps {
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ }) => (
    <section className="uk-section uk-section-small uk-section-default">
      <div className="uk-container uk-container-small">
        <h2 className="uk-text-center">特徴</h2>
        <div className="uk-grid-column-small uk-grid-row-large uk-text-center" data-uk-grid>
          <Feature Icon={FaUserShield} title="大切なユーザー情報をお守りします" detail="このアプリは重要な情報は保存しません。例えハッキングをされたとしても被害は最小限に抑えられます。もちろん製作者に情報収集の意図はございません。" />
          <Feature Icon={FaGlobe} title="国際化対応" detail="このアプリは国際化に対応しています。様々な国のユーザーが使用しています。そのため様々な国のユーザーが使用しているサービスを知ることができます" />
          <Feature Icon={FaUsers} title="コミュニティ" detail="このアプリはユーザー同士でつながりを作ることができます。フォロー、タグ、snsで共通の仲間を見つけることができます" />
        </div>
      </div>
    </section>
);
