import React from 'react';
import styles from './Tab.module.css';

export interface TabProps {
  /** className */
  classNameString?: string;
  /** array */
  tabList: Array<string>;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Tab: React.FC<TabProps> = ({
  classNameString,
  tabList,
  ...props
}) => {
  return (
    <ul className="uk-tab-bottom" data-uk-tab>
      {
        tabList.map((tab, index) => {
          if (index == 0)
            return <li><a href="uk-active">{tab}</a></li>;
          else
            return <li><a href="#">{tab}</a></li>
        })
      }
    </ul>
  );
};
