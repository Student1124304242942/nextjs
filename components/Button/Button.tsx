import { JSX } from "react";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import arrow from "./arrow.svg";
import { Icon } from "../Icon/Icon";
export const Button = ({ children, arrow: arrowDirection="none", appearance, ...props }: ButtonProps): JSX.Element => {
    return (
        <button className={cn({
            "text-white hover:bg-primary-hover transition-all duration-200  border-none bg-primary": appearance === 'primary',
            "text-black hover:bg-primary transition-all duration-200 bg-none border-solid border border-gray-light hover:text-white": appearance === "ghost",
        }, "inline-block box-border p-2.5 cursor-pointer text-center border-0 rounded-[5px] text-[14px]")} {...props}>
            {children}
            {arrowDirection != "none" && <Icon
                src={arrow}
                className={cn({
                    "transform rotate-90": arrowDirection === "down",
                    "transform rotate-0": arrowDirection === "right",
                    "text-white": appearance === "primary",
                }, "inline-block ml-2.5 transition-all duration-200")}
            />}
        </button>
    )
}