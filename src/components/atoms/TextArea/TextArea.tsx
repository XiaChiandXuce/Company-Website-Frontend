import React from 'react';
import { clsx } from 'clsx';
import styles from './TextArea.module.css';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    variant?: 'default' | 'glass';
    fullWidth?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className, label, error, variant = 'default', fullWidth = true, ...props }, ref) => {
        return (
            <div
                className={clsx(
                    styles.wrapper,
                    error && styles.hasError,
                    styles[variant],
                    className
                )}
                style={{ maxWidth: fullWidth ? '100%' : '320px' }}
            >
                {label && <label className={styles.label} htmlFor={props.id}>{label}</label>}

                <textarea
                    ref={ref}
                    className={styles.textarea}
                    {...props}
                />

                {error && <span className={styles.errorText}>{error}</span>}
            </div>
        );
    }
);

TextArea.displayName = 'TextArea';
