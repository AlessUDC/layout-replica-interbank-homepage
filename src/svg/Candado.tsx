import React from "react";

export type CandadoProps = React.SVGProps<SVGSVGElement> & {
    className?: string;
    fill?: string;
};

const Candado: React.FC<CandadoProps> = ({
    className,
    fill = "#0F191E",
    ...props
}) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            role="img"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M24 11.3V9.5A7.8 7.8 0 0016 2a7.8 7.8 0 00-8 7.5v1.8A5 5 0 004 16v9.1a5 5 0 005.1 5H23a5 5 0 005.1-5V16a5 5 0 00-4-4.7zM10 9.5A5.8 5.8 0 0116 4a5.8 5.8 0 016 5.5v1.6H10V9.5zm16 15.6a3 3 0 01-3.1 3H9A3 3 0 016 25V16a3 3 0 013-2.9h14a3 3 0 013 2.9v9.1z"
                fill={fill}
                fillRule="evenodd"
            />
        </svg>
    );
};

export default Candado;
