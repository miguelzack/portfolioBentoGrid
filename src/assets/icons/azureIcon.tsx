import * as React from "react"

const AzureIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        viewBox="0 0 48 48"
        {...props}
    >
        <linearGradient
            id="a"
            x1={-1254.397}
            x2={-1261.911}
            y1={877.268}
            y2={899.466}
            gradientTransform="translate(1981.75 -1362.063) scale(1.5625)"
            gradientUnits="userSpaceOnUse"
        >
            <stop offset={0} stopColor="#CCC"/>
            <stop offset={1} stopColor="#CCC"/>
        </linearGradient>
        <path
            fill="url(#a)"
            d="M17.634 6h11.305L17.203 40.773a1.801 1.801 0 0 1-1.708 1.226H6.697a1.8 1.8 0 0 1-1.706-2.376L15.926 7.227A1.802 1.802 0 0 1 17.634 6z"
        />
        <path
            fill="#CCC"
            d="M34.062 29.324H16.135a.83.83 0 0 0-.567 1.437l11.52 10.752a1.81 1.81 0 0 0 1.236.487h10.151l-4.413-12.676z"
        />
        <linearGradient
            id="b"
            x1={-1252.05}
            x2={-1253.788}
            y1={887.612}
            y2={888.2}
            gradientTransform="translate(1981.75 -1362.063) scale(1.5625)"
            gradientUnits="userSpaceOnUse"
        >
            <stop offset={0} stopColor="#CCC"/>
            <stop offset={0.071} stopColor="#CCC"/>
            <stop offset={0.321} stopColor="#CCC"/>
            <stop offset={0.623} stopColor="#CCC"/>
            <stop offset={1} stopColor="#CCC"/>
        </linearGradient>
        <path
            fill="url(#b)"
            d="M17.634 6a1.789 1.789 0 0 0-1.712 1.25L5.005 39.595A1.798 1.798 0 0 0 6.702 42h9.026a1.93 1.93 0 0 0 1.481-1.259l2.177-6.416 7.776 7.253c.326.27.735.419 1.158.422h10.114l-4.436-12.676-12.931.003L28.98 6H17.634z"
        />
        <linearGradient
            id="c"
            x1={-1252.952}
            x2={-1244.704}
            y1={876.6}
            y2={898.575}
            gradientTransform="translate(1981.75 -1362.063) scale(1.5625)"
            gradientUnits="userSpaceOnUse"
        >
            <stop offset={0} stopColor="#CCC"/>
            <stop offset={1} stopColor="#CCC"/>
        </linearGradient>
        <path
            fill="url(#c)"
            d="M32.074 7.225A1.8 1.8 0 0 0 30.368 6h-12.6a1.8 1.8 0 0 1 1.705 1.224l10.935 32.399A1.8 1.8 0 0 1 28.703 42h12.6a1.8 1.8 0 0 0 1.705-2.376L32.074 7.225z"
        />
    </svg>
)
export default AzureIcon
