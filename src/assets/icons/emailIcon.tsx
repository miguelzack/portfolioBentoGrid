import * as React from "react"
const EmailIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={21}
        fill="none"
        {...props}
    >
        <path
            fill="#916CE7"
            d="M0 6.091v10.623a3.714 3.714 0 0 0 3.714 3.715h18.572A3.715 3.715 0 0 0 26 16.714V6.091l-11.054 6.801a3.714 3.714 0 0 1-3.892 0L0 6.092Z"
        />
        <path
            fill="#916CE7"
            d="M26 3.91v-.196A3.714 3.714 0 0 0 22.286 0H3.714A3.714 3.714 0 0 0 0 3.714v.196l12.027 7.401a1.857 1.857 0 0 0 1.946 0L26 3.91Z"
        />
    </svg>
)
export default EmailIcon
