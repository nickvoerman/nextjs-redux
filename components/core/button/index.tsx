import React, { FC } from "react";
import { createClassName } from "../../../lib/helpers/react-helpers";

type ButtonProps = {
    variant: "primary" | "secondary" | "unstyled";
    loading?: boolean | undefined;
    url?: string;
    arrowRight?: string;
    download?: boolean;
}

export const Button: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const { variant, loading, url, arrowRight, download, ...filteredProps } = props;

    const variantClassNames = props.variant === "primary" ?
        // Primary
        `bg-orange-gr hover:brightness-110 active:brightness-100` :
        props.variant === "secondary" ?
            // Secondary
            `text-primary-700 bg-white border-primary-700 border hover:bg-primary-700 hover:border-white active:brightness-95` :

            // unstyled
            `text-primary-700 text-sm !p-0 border-none py-0 hover:brightness-110 active:brightness-110`;

    if (url) {
        return (
            <a href={url} target={url.includes("http") && !download ? "_blank" : "_self"} download={download ? true : false} rel="noreferrer">
                <button
                    {...filteredProps}
                    disabled={props.disabled || props.loading}
                    className={createClassName(props, `flex select-none items-center justify-center font-normal disabled:opacity-50 px-3 py-2 rounded-lg w-fit outline-none transition-all group ${variantClassNames}`)}
                >
                    {props.children}

                    {arrowRight ?
                        <div className="relative ml-2 w-3 h-3">
                            <img className="w-3 h-3 absolute transition-all left-0" src={`/icons/${arrowRight}.svg`} />
                        </div>
                        : props.variant === "unstyled" ?
                            <div className="relative ml-2 w-3 h-2">
                                <img className="w-3 h-2 absolute transition-all left-0 group-hover:left-1" src="/icons/arrow-right-orange.svg" />
                            </div>
                            : null}
                </button>
            </a>
        )
    }

    return (
        <button
            {...filteredProps}
            disabled={props.disabled || props.loading}
            className={createClassName(props, `flex select-none items-center justify-center font-normal disabled:opacity-50 px-3 py-2 rounded-lg w-fit outline-none transition-all group ${variantClassNames}`)}
        >
            {props.children}

            {props.variant === "unstyled" ?
                <div className="relative ml-2 w-2 h-2">
                    <img className="w-2 h-2 absolute transition-all left-0 group-hover:left-1" src="/icons/arrow-right-orange.svg" />
                </div>
                : null}
        </button>
    )
}