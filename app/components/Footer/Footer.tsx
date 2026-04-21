import { JSX, ComponentPropsWithoutRef } from "react";
import { P } from "@/components";

export const Footer = ({ ...props }: ComponentPropsWithoutRef<"footer">): JSX.Element => {
    return (
        <footer {...props}>
            <P size="s">OwlTop © 2020 - {new Date().getFullYear()} Все права защищены</P>
            <a href="#">Пользовательское соглашение</a>
            <a href="#">Политика конфиденциальности</a>
        </footer>
    );
};
