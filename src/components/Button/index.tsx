import { HTMLAttributes } from 'react';
import cx from 'classnames';
import styles from './button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  customStyle?: string;
  isDisabled?: boolean;
}

export const Button = ({
  title,
  customStyle = '',
  isDisabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cx(styles.button, customStyle)}
      disabled={isDisabled}
      type="button"
      {...rest}
    >
      {title}
    </button>
  );
};
