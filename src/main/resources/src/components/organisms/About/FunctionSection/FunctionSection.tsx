import React from 'react';

import styles from './FunctionSection.module.css';

export interface FunctionSectionProps {
}

export const FunctionSection: React.FC<FunctionSectionProps> = ({ }) => (
    <section className="uk-section uk-section-small uk-section-primary">
      <div className="uk-container uk-container-small uk-position-relative">
        <h2 className="uk-text-center">機能</h2>
        <div uk-slideshow="animation: scroll">
          <div className="uk-position-relative uk-visible-toggle uk-light">
            <ul className="uk-slideshow-items" uk-height-viewport="min-height: 500">
              <li>
                <div className="uk-position-center">
                  <h3>test1</h3>
                  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr,<br />sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr,<br />sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr,<br />sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr,<br />sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr,<br />sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr,<br />sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr,<br />sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                  <button className="uk-button uk-button-primary">Button</button>
                </div>
              </li>
              <li>
                <div className="uk-position-center">
                  <h3>test2</h3>
                  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr,<br />sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                  <button className="uk-button uk-button-primary">Button</button>
                </div>
              </li>
              <li>
                <div className="uk-position-center">
                  <h3>test3</h3>
                  <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr,<br />sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                  <button className="uk-button uk-button-primary">Button</button>
                </div>
              </li>
            </ul>
            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
          </div>
          <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      </div>
    </section>
);
