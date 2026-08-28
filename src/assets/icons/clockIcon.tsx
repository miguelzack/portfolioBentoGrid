import * as React from "react"
const ClockIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        fill="none"
        {...props}
    >
        <path fill="#916CE7" d="M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0Z" />
        <path
            fill="#1A1A1A"
            fillRule="evenodd"
            d="M6 3.15a.45.45 0 0 1 .45.45v2.213L7.816 7.18a.45.45 0 1 1-.636.636l-1.5-1.5A.45.45 0 0 1 5.549 6V3.6A.45.45 0 0 1 6 3.15Z"
            clipRule="evenodd"
        />
    </svg>
)
export default ClockIcon
