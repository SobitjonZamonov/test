import { SidebarLayout } from './ui/layout';
import { HomeIcon, LayoutPanelLeftIcon, List, UsersIcon } from 'lucide-react';
import { memo, useMemo } from 'react';
import { NavMain } from './ui/nav-menu';
import { NavUser } from './ui/nav-user';
import { ROUTES } from '../router/routes';

export const AppSidebar = memo(() => {
    const columns = useMemo(
        () => ({
            navMain: [
                {
                    title: 'Главная',
                    url: ROUTES.HOME,
                    icon: HomeIcon,
                },
                {
                    title: 'Задачи',
                    url: ROUTES.TASKS,
                    icon: List,
                },
                {
                    title: 'Клиенты',
                    url: ROUTES.CLIENTS,
                    icon: UsersIcon,
                },
                {
                    title: 'Заявки',
                    url: ROUTES.APPLICATIONS,
                    icon: LayoutPanelLeftIcon,
                },
            ],
        }),
        [],
    );
    return <SidebarLayout nav={<NavMain items={columns.navMain} />} user={<NavUser />} />;
});
