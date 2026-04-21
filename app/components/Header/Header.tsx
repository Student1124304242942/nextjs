import { JSX, ComponentPropsWithoutRef } from "react";
import { Logo } from "./components/Logo/Logo";

export const Header = ({ ...props }: ComponentPropsWithoutRef<"header">): JSX.Element => {
    return (
        <header {...props}>
            <Logo />
        </header>
    );
};
