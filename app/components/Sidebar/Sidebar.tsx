import { JSX, ComponentPropsWithoutRef } from "react";
import { Search } from "./components/Search/Search";
import { Menu } from "./components/Menu/Menu";
import cn from "classnames";
export const Sidebar = ({ className,...props }: ComponentPropsWithoutRef<"aside">): JSX.Element => {
    return (
        <aside {...props} className={cn(className)}>
            <Search />
            <Menu />
        </aside>
    );
};
