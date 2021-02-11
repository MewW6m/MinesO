import React from 'react';
import styles from './Title.module.css';

export interface TitleProps {
  /** className */
  classNameString?: string;
  /** Index contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Title: React.FC<TitleProps> = ({
  label,
  classNameString,
  ...props
}) => {
  return (
    <span
      className={styles.poiretone + " " + classNameString}
      {...props}
    >
      {label}
    </span>
  );
};
