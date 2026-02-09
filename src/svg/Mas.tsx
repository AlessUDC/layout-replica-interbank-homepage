import * as React from "react"

const Mas = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={className}
        {...props}
    >
        <path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z" />
    </svg>
)

export default Mas
