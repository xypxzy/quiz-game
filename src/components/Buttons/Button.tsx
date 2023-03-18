import cn from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button = ({
  children,
  color = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.secondary_none]: color === 'secondary_none',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
