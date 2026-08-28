import * as React from "react"
const FlagIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={10}
        height={14}
        fill="none"
        {...props}
    >
        <path
            fill="#916CE7"
            d="M.488 0c.27 0 .489.219.489.488v1.205l1.12-.224a5.65 5.65 0 0 1 3.207.295l.133.053a5.212 5.212 0 0 0 3.196.217.782.782 0 0 1 .972.758v4.797a.914.914 0 0 1-.693.887l-.14.035a5.65 5.65 0 0 1-3.469-.236 5.65 5.65 0 0 0-3.206-.295l-1.12.224v5.308a.488.488 0 1 1-.977 0V.488C0 .218.219 0 .488 0Z"
        />
    </svg>
)
export default FlagIcon
