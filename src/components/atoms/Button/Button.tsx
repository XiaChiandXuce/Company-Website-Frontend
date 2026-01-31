import React from 'react';
import { clsx } from 'clsx';
import { motion, type HTMLMotionProps } from 'framer-motion';
import styles from './Button.module.css';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant = 'primary',
        size = 'md',
        isLoading = false,
        leftIcon,
        rightIcon,
        children,
        disabled,
        ...props
    }, ref) => {

        return (
            <motion.button
                ref={ref}
                className={clsx(
                    styles.button,
                    styles[variant],
                    styles[size],
                    className
                )}
                disabled={disabled || isLoading}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {isLoading ? (
                    <span className={styles.spinner}>Processing...</span>
                ) : (
                    <>
                        {leftIcon && <span className="icon-left">{leftIcon}</span>}
                        {children}
                        {rightIcon && <span className="icon-right">{rightIcon}</span>}
                    </>
                )}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
