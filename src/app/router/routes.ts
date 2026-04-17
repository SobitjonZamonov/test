export const rootPaths = {
    root: '/',
    auth: '/auth',
} as const;

export const ROUTES = {
    HOME: rootPaths.root,
    CLIENTS: `/clients`,
    CLIENT: '/clients/:clientId',
    APPLICATIONS: '/applications',
    APPLICATION: '/applications/:applicationId',
    TASKS: '/tasks',
    TASK: '/tasks/:taskId',

    LOGIN: `${rootPaths.auth}/login`,
    VERIFY: `${rootPaths.auth}/verification`,
    FORGETPASS: `${rootPaths.auth}/forget-password`,
    RESETPASS: `${rootPaths.auth}/reset-password`,
} as const;

export type PathParams = {
    [ROUTES.CLIENT]: {
        clientId: string;
    };

    [ROUTES.APPLICATION]: {
        applicationId: string;
    };
};