import * as React from "react"
const FormIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={12}
        fill="none"
        {...props}
    >
        <path
            fill="#916CE7"
            d="M8.144.333a3.446 3.446 0 0 0-2.955 0L.728 2.424C.01 2.76-.176 3.71.166 4.364v3.302a.5.5 0 1 0 1 0V5.115L5.19 7a3.446 3.446 0 0 0 2.955 0l4.461-2.091c.97-.454.97-2.03 0-2.484L8.145.333Z"
        />
        <path
            fill="#916CE7"
            d="M1.998 6.61v2.473c0 .672.336 1.302.923 1.627C3.9 11.253 5.467 12 6.665 12c1.197 0 2.764-.747 3.742-1.29.588-.325.924-.955.924-1.627V6.61L8.567 7.906a4.446 4.446 0 0 1-3.805 0L1.998 6.61Z"
        />
    </svg>
)
export default FormIcon
