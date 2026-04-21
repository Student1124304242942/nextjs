import { JSX, ComponentPropsWithoutRef } from "react";
import { Search } from "./components/Search/Search";
import { Menu } from "./components/Menu/Menu";

export const Sidebar = ({ ...props }: ComponentPropsWithoutRef<"aside">): JSX.Element => {
    return (
        <aside {...props}>
            <Search />
            <Menu />
        </aside>
    );
};
