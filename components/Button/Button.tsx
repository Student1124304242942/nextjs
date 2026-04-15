import { JSX } from "react";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
export const Button = ({ children, appearance  }: ButtonProps): JSX.Element => {
    return (
        <button className={cn({
            "text-white hover:bg-primary-hover transition-[0.2s]   bg-primary": appearance === 'primary',
            "text-black bg-none border-solid border border-gray-light": appearance === "ghost",
        }, "inline-block box-border p-2.5 cursor-pointer text-center border-0 rounded-[5px] text-[14px]")} >
            {children}
        </button>
    )
}