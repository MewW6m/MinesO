import React from 'react';
import styles from './Textbox.module.css';

export interface TextboxProps {
  /** type */
  type?: string;
  /** className */
  classNameString?: string;
  /** Index contents */
  value?: string;
  /** Place Holder */
  placeHolder?: string;
  /** Label Name */
  label?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Textbox: React.FC<TextboxProps> = ({
  type = "text",
  classNameString,
  value,
  placeHolder,
  label,
  ...props
}) => {
  return (
      <div>
        {label != null && (
          <label className={styles.ukFormLabelKai} htmlFor="form-stacked-text">{label}</label>
        )}
        <div className="uk-form-controls">
          <input
              type={type}
              className={"uk-input " + classNameString}
              value={value}
              placeholder={placeHolder}
          />
        </div>
      </div>
  );
};
