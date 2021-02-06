import React from 'react';
import './index.css';

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
      className={classNameString}
      {...props}
    >
      {label}
    </span>
  );
};
