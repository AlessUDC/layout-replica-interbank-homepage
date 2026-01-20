import * as React from "react";

const FlechaSVG = ({
    className,
    ...props
}: React.SVGProps<SVGSVGElement>) => (
    <svg
        className={className}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <polygon
            fill="currentColor"
            points="17.1,5 14,8.1 29.9,24 14,39.9 17.1,43 36,24"
        />
    </svg>
);

export default FlechaSVG;