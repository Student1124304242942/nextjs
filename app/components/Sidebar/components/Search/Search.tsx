import { JSX } from "react";

export const Search = (): JSX.Element => {
    return (
        <form>
            <input type="search" placeholder="Поиск..." />
            <button type="submit" aria-label="Найти">Найти</button>
        </form>
    );
};
