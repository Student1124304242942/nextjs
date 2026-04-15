import { JSX } from "react"
import { HtagProps } from "./Htag.props"

export const Htag = ({tag,children}:HtagProps): JSX.Element => {
    switch(tag) {
        case "h1":
            return <h1 className=" text-black leading-6.5  text-2xl m-0  font-semibold font-sans">{children}</h1>;
        case "h2":
            return <h2 className=" text-black leading-5.5 text-xl font-semibold font-sans m-0">{children}</h2>;
        case "h3":
            return <h3 className=" text-black leading-5 text-xl font-bold font-sans m-0">{children}</h3>;
        default:
            return <></> ;
    }
    
}