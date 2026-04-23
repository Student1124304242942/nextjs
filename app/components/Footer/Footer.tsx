import { JSX, ComponentPropsWithoutRef } from "react";
import { P } from "@/components";
import cn from "classnames";
import style from  './Footer.module.css';
import  {format} from "date-fns"
export const Footer = ({className, ...props }: ComponentPropsWithoutRef<"footer">): JSX.Element => {
    return (
        <footer {...props} className={cn(className, style.footer, "bg-primary px-6.25 py-7.5 text-white text-[16px] leading-6")}>
            <div className="">
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a href="#" target="_blank" className="hover:text-gray-light">Пользовательское соглашение</a>
            <a href="#" target="_blank" className="hover:text-gray-light">Политика конфиденциальности</a>
        </footer>
    );
};
