import * as React from "react"
const PinLocalIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={11}
        height={14}
        fill="none"
        {...props}
    >
        <path
            fill="#916CE7"
            d="M5.1 0C3.748.002 2.452.582 1.495 1.613.54 2.643.002 4.042 0 5.5c0 4.706 4.636 8.26 4.834 8.41a.441.441 0 0 0 .532 0c.198-.15 4.834-3.705 4.834-8.41-.002-1.458-.54-2.856-1.496-3.887C7.748.582 6.452.002 5.1 0Zm0 3.5c.492 0 .963.21 1.311.586.348.375.543.883.543 1.414 0 .53-.195 1.039-.543 1.414-.348.375-.82.586-1.311.586-.492 0-.964-.21-1.311-.586A2.082 2.082 0 0 1 3.245 5.5c0-.53.196-1.04.544-1.414.347-.375.819-.586 1.31-.586Z"
        />
    </svg>
)
export default PinLocalIcon
