import { JSX } from "react";
import { PProps } from "./P.props";
import cn from "classnames";

export const P = ({ size = "m",classname, children, ...props }: PProps): JSX.Element => {
    return (
        <p className={cn("text-black font-sans m-0", {
            "text-[14px] leading-6": size === "s",
            "text-[16px] leading-6": size === "m",
            "text-[18px] leading-7.25": size === "l",
        }, classname) } {...props} >
            {children}
        </p>
    );
};
