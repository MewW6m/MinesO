import React from 'react';
import styles from './Button.module.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { IconContext } from "react-icons";
import {IconType} from "react-icons/lib";

UIkit.use(Icons);

export interface ButtonProps {
  /** className */
  classNameString?: string;
  /** icon */
  Icon?: IconType;
  /** Index contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  classNameString,
  Icon,
  ...props
}) => {
  return (
    <a
      className={"uk-button uk-button-default " + styles.ukButtonKai + classNameString}
      {...props}
    >
      {Icon != null && (
          <IconContext.Provider value={{ style: { fontSize: '100%', margin: '0 4px' } }} >
            <Icon />
          </IconContext.Provider>
      )}
      {label}
    </a>
  );
};
