
import { Separator } from '@/shared/ui/separator';
import React from 'react';

interface HeaderLayoutProps {
    breadcrumbs?: React.ReactNode;
    collapse?: React.ReactNode;
    actions?: React.ReactNode;
}

export const HeaderLayout = ({ collapse, actions, breadcrumbs }: HeaderLayoutProps) => {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex justify-between w-full">
                <div className="flex items-center gap-2 px-4">
                    {collapse}
                    {breadcrumbs && <Separator orientation="vertical" className="mr-2 h-4" />}
                    {breadcrumbs}
                </div>
                <div className="px-3">{actions}</div>
                {/* <div className="flex px-4">
                    <ThemeSwitcher />
                </div> */}
            </div>
        </header>
    );
};
