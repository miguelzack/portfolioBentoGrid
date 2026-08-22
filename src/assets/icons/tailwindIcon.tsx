import * as React from "react"
const TailwindIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <path
            fill="#CCC"
            d="M5.063 7.706C5.588 5.606 6.9 4.556 9 4.556c3.15 0 3.544 2.363 5.119 2.757 1.05.262 1.968-.132 2.756-1.182-.525 2.1-1.838 3.15-3.938 3.15-3.15 0-3.543-2.362-5.118-2.756-1.05-.262-1.969.131-2.756 1.181Zm-3.938 4.725c.525-2.1 1.837-3.15 3.938-3.15 3.15 0 3.543 2.363 5.118 2.756 1.05.263 1.969-.13 2.757-1.18-.526 2.1-1.838 3.15-3.938 3.15-3.15 0-3.544-2.363-5.119-2.757-1.05-.262-1.968.131-2.756 1.181Z"
        />
    </svg>
)
export default TailwindIcon
