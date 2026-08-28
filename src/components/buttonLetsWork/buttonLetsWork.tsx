import {ReactNode} from "react";

interface ButtonLetsWorkProps {
    icon: ReactNode;
    text: string;
    link: string,
}

export function ButtonLetsWork({
                                   icon,
                                   text,
                                   link
                               }: ButtonLetsWorkProps) {
    return (
        <a target="_blank" rel="noopener noreferrer" href={link}
           className="
           flex w-full max-h-22.5 py-4 px-2.5 flex-col justify-center items-center gap-2.5 rounded-[10px] bg-gray-bg-terciary

           border border-transparent transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-purple/40 hover:bg-gray-bg-terciary hover:shadow-[0_8px_24px_rgba(145,108,231,0.12)]">

            {icon}
            <span
                className="text-gray-font-secondary text-[16px] font-medium transition-colors duration-300 group-hover:text-white">{text}</span>
        </a>
    )
}
