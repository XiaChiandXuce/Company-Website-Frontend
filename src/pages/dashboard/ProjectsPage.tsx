import React, { useEffect, useState } from 'react';
import { projectService } from '../../services/projectService';
import type { Project } from '../../services/clientTypes';
import styles from './ProjectsPage.module.css';

const ProjectsPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await projectService.getProjects();
                setProjects(data);
            } catch (err) {
                setError('Failed to load projects');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'NEW': return styles.statusNew;
            case 'IN_PROGRESS': return styles.statusInProgress;
            case 'ON_HOLD': return styles.statusReview; // Mapping ON_HOLD to yellow style
            case 'REVIEW': return styles.statusReview; // Keep just in case
            case 'COMPLETED': return styles.statusCompleted;
            case 'CANCELLED': return styles.statusCancelled;
            default: return '';
        }
    };

    const formatStatus = (status: string) => {
        return status.replace(/_/g, ' ');
    };

    if (isLoading) return <div className={styles.loading}>Loading projects...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>My Projects</h1>
                <button className={styles.createButton}>+ New Request</button>
            </div>

            <div className={styles.grid}>
                {projects.map(project => (
                    <div key={project.id} className={styles.projectCard}>
                        <div className={styles.projectHeader}>
                            <div>
                                <h3 className={styles.projectName}>{project.title}</h3>
                                <div className={styles.projectType}>Custom Project</div>
                            </div>
                            <div className={`${styles.statusBadge} ${getStatusClass(project.status)}`}>
                                {formatStatus(project.status)}
                            </div>
                        </div>

                        <div className={styles.progressContainer}>
                            <div className={styles.progressLabel}>
                                <span>Progress</span>
                                <span>{project.progressPercent}%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div
                                    className={`${styles.progressFill} ${styles[`w${Math.round(project.progressPercent / 10) * 10}`]}`}
                                />
                            </div>
                        </div>

                        <div className={styles.meta}>
                            <div>Last Update</div>
                            <div>{new Date(project.updatedAt).toLocaleDateString()}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
