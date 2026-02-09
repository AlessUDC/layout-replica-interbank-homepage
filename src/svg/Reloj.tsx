import * as React from "react";

const Reloj = ({
    className,
    ...props
}: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={className}
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M12 2c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10S2 17.5228475 2 12 6.4771525 2 12 2zm0 2c-4.418278 0-8 3.581722-8 8s3.581722 8 8 8 8-3.581722 8-8-3.581722-8-8-8zm0 2c.5128358 0 .9355072.3860402.9932723.8833789L13 7v4.5857864l1.7071068 1.7071068c.3905243.3905243.3905243 1.0236893 0 1.4142136-.360484.3604839-.927715.3882135-1.3200062.0831886l-.0942074-.0831886-2-2A.996.996 0 0 1 11.0086724 12.131444L11 12V7c0-.55228475.4477153-1 1-1z"
        />
    </svg>
);

export default Reloj;
