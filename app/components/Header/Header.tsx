import { JSX, ComponentPropsWithoutRef } from "react";
import { Logo } from "./components/Logo/Logo";
import cn from "classnames";
export const Header = ({ className,...props }: ComponentPropsWithoutRef<"header">): JSX.Element => {
    return (
        <header {...props} className={cn(className)}>
            <Logo />
        </header>
    );
};
