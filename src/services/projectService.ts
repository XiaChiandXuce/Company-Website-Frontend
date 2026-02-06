import clientApi from './authService'; // Reusing the axios instance with interceptors
import type { Project } from './clientTypes';

export const projectService = {
    getProjects: async (): Promise<Project[]> => {
        const response = await clientApi.get<Project[]>('/projects');
        return response.data;
    },

    getProjectDetail: async (id: string): Promise<Project> => {
        const response = await clientApi.get<Project>(`/projects/${id}`);
        return response.data;
    }
};
