import React from "react";

export type LogoWhatsappProps = React.SVGProps<SVGSVGElement> & {
    className?: string;
    strokeColor?: string;
    fillColor?: string;
};

const LogoWhatsapp: React.FC<LogoWhatsappProps> = ({
    className,
    strokeColor = "currentColor",
    fillColor = "currentColor",
    ...props
}) => {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            role="img"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M3.52 25.537l.082-.245-.152-.208A15.381 15.381 0 0 1 .5 16C.5 7.452 7.45.5 15.996.5h.008C24.55.5 31.5 7.454 31.5 16s-6.95 15.5-15.496 15.5c-3.153 0-6.075-.938-8.526-2.56l-.2-.133-.228.073-5.21 1.665 1.68-5.008z"
                stroke={strokeColor}
                fill="none"
            />

            <path
                d="M25.314 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.702-1.948-7.73-6.726-7.966-7.036-.226-.31-1.9-2.53-1.9-4.826S7.87 8.372 8.34 7.892c.386-.394 1.024-.574 1.636-.574.198 0 .376.01.536.018.47.02.706.048 1.016.79.386.93 1.326 3.226 1.438 3.462.114.236.228.556.068.866-.15.32-.282.462-.518.734-.236.272-.46.48-.696.772-.216.254-.46.526-.188.996.272.46 1.212 1.994 2.596 3.226 1.786 1.59 3.234 2.098 3.752 2.314.386.16.846.122 1.128-.178.358-.386.8-1.026 1.25-1.656.32-.452.724-.508 1.148-.348.432.15 2.718 1.28 3.188 1.514.47.236.78.348.894.546.112.198.112 1.128-.274 2.22z"
                fill={fillColor}
            />
        </svg>
    );
};

export default LogoWhatsapp;
