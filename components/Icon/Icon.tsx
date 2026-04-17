import { type ComponentProps, JSX } from "react";
import { type StaticImageData } from "next/image";

type IconProps = Omit<ComponentProps<"img">, "src"> & {
    src: StaticImageData;
};

const EMPTY_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E`;

export const Icon = ({ src, width, height, style, alt = "", ...props }: IconProps): JSX.Element => {
    return (
        <img
            width={width ?? src.width}
            height={height ?? src.height}
            src={EMPTY_SVG}
            alt={alt}
            style={{
                ...style,
                backgroundColor: "currentcolor",
                mask: `url("${src.src}") no-repeat center / contain`,
                WebkitMask: `url("${src.src}") no-repeat center / contain`,
            }}
            {...props}
        />
    );
};
