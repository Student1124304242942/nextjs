import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface TagProps extends ComponentPropsWithoutRef<"div"> {
    size?: "s" | "m";
    color?: "ghost" | "red" | "green" | "grey" | "primary";
    href?: string;
    children: ReactNode;
}
