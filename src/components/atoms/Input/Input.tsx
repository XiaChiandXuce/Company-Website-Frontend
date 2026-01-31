import React from 'react';
import { clsx } from 'clsx';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    variant?: 'default' | 'glass';
    fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, variant = 'default', fullWidth = true, ...props }, ref) => {
        return (
            <div
                className={clsx(
                    styles.inputWrapper,
                    error && styles.hasError,
                    styles[variant],
                    className
                )}
                style={{ maxWidth: fullWidth ? '100%' : '320px' }}
            >
                {label && <label className={styles.label} htmlFor={props.id}>{label}</label>}

                <input
                    ref={ref}
                    className={styles.input}
                    {...props}
                />

                {error && <span className={styles.errorText}>{error}</span>}
            </div>
        );
    }
);

Input.displayName = 'Input';
