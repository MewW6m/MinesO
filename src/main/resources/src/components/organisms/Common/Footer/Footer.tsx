import React from 'react';

import styles from './Footer.module.css';

export interface FooterProps {
}

export const Footer: React.FC<FooterProps> = ({ }) => (
  <footer>
    <div className={"uk-padding-small " + styles.footer}>
      <div className="uk-container uk-container-large">
        <nav className="uk-navbar">
          <div className="uk-navbar-center uk-grid-row-collapse uk-grid-divider uk-flex-center" data-uk-grid>
            <div><a href="/about">About</a></div>
            <div><a href="/help">ヘルプ</a></div>
            <div><a href="/terms">利用規約</a></div>
            <div><a href="/privacy">プライバシー</a></div>
            <div><a href="/opinion">ご意見</a></div>
            <div><a href="https://twitter.com">Twitter</a></div>
          </div>
        </nav>
      </div>
      <div className="uk-container uk-container-expand uk-text-center">
        <small>© 2021-{new Date().getFullYear()} @MewW6m all right reserved</small>
      </div>
    </div>
  </footer>
);