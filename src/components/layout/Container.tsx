import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string; // Allow passing global or module classes
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
    return (
        <div
            className={className}
            style={{
                width: '100%',
                maxWidth: 'var(--container-width)',
                margin: '0 auto',
                paddingLeft: 'var(--container-padding)',
                paddingRight: 'var(--container-padding)',
            }}
        >
            {children}
        </div>
    );
};
