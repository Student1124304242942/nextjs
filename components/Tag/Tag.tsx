import { JSX } from "react";
import { TagProps } from "./Tag.props";
import cn from "classnames";

export const Tag = ({
    size = "s",
    color = "ghost",
    href,
    children,
    className,
    ...props
}: TagProps): JSX.Element => {
    return (
        <div
            className={cn("inline-flex items-center rounded-[20px] font-medium font-sans", {
                "h-5 px-3 text-xs leading-3": size === "s",
                "h-7 px-3 text-sm leading-4": size === "m",
                "border border-gray-light text-black": color === "ghost",
                "bg-[#DE0000] text-white": color === "red",
                "bg-green-light text-green": color === "green",
                "bg-gray-light text-black": color === "grey",
                "bg-primary text-white": color === "primary",
            }, className)}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : children}
        </div>
    );
};
