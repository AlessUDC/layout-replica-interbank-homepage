import * as React from "react";

const Menos = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={className}
        {...props}
    >
        <title>minus</title>
        <path d="M64 232H448V280H64z" />
    </svg>
);

export default Menos;
