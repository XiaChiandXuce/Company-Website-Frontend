import React from 'react';
import { clsx } from 'clsx';
import styles from './Container.module.css';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
    return (
        <div className={clsx(styles.container, className)}>
            {children}
        </div>
    );
};
