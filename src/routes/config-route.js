export const routes = [
    {
        component: Tables,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/tables',
                component: Tables
            }
        ]
    }
];