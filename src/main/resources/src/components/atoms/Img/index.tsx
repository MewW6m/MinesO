import React from 'react';
import './index.css';

export interface ImgProps {
  /** Is this the principal call to action on the page? */
  height?: number;
  /** Index contents */
  src: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Img: React.FC<ImgProps> = ({
  height ,
  src,
  ...props
}) => {
  return (
    <img
      src={ src }
      style={{ height: height + "px"}}
      {...props}
    />
  );
};
