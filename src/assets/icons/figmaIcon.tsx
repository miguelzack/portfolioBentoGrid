import * as React from "react"
const FigmaIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={18}
        fill="none"
        {...props}
    >
        <path
            fill="#CCC"
            d="M3 18c1.655 0 3-1.344 3-3v-3H3a3 3 0 0 0 0 6ZM0 9a3 3 0 0 1 3-3h3v6H3a3 3 0 0 1-3-3Zm0-6a3 3 0 0 1 3-3h3v6H3a3 3 0 0 1-3-3Zm6-3h3c1.655 0 3 1.344 3 3s-1.345 3-3 3H6V0Zm6 9a3 3 0 1 1-5.999 0A3 3 0 0 1 12 9Z"
        />
    </svg>
)
export default FigmaIcon
