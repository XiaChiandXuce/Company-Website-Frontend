import React, { useRef, useState } from 'react';
import { clsx } from 'clsx';
import { motion, type HTMLMotionProps } from 'framer-motion';
import styles from './Card.module.css';

export interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
    variant?: 'default' | 'glass';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({
        className,
        variant = 'default',
        padding = 'md',
        hoverable = false,
        children,
        ...props
    }, ref) => {
        const divRef = useRef<HTMLDivElement>(null);
        const [position, setPosition] = useState({ x: 0, y: 0 });

        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            if (!divRef.current || !hoverable) return;
            const rect = divRef.current.getBoundingClientRect();
            setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        };

        return (
            <motion.div
                ref={ref || divRef}
                className={clsx(
                    styles.card,
                    styles[variant],
                    styles[padding],
                    hoverable && styles.hoverable,
                    className
                )}
                onMouseMove={handleMouseMove}
                style={hoverable ? { '--mouse-x': `${position.x}px`, '--mouse-y': `${position.y}px` } as React.CSSProperties : undefined}
                {...props}
            >
                {hoverable && <div className={styles.overlay} />}
                <>{children}</>
            </motion.div>
        );
    }
);

Card.displayName = "Card";
