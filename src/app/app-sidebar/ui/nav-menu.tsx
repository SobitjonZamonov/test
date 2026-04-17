import { SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/shared/ui/sidebar';
import { type LucideIcon } from 'lucide-react';


import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavMain = memo(
    ({
        items,
    }: {
        items: {
            title: string;
            url: string;
            icon?: LucideIcon;
            isActive?: boolean;
            items?: {
                title: string;
                url: string;
            }[];
        }[];
    }) => {
        const { pathname } = useLocation();

        return (
            <SidebarGroup>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <SidebarGroupLabel>Основное</SidebarGroupLabel>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarMenu>
                    {items.map((item) => {
                        const isActive = item.url.split('/')[1] === pathname.split('/')[1];
                        return (
                            <SidebarMenuItem key={item.url}>
                                <SidebarMenuButton
                                    className="data-[active=true]:bg-sidebar-accent"
                                    variant="default"
                                    isActive={isActive}
                                    tooltip={item.title}
                                    asChild
                                >
                                    <Link to={item.url}>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarGroup>
        );
    },
);
