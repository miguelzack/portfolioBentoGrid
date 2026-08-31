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
           flex w-full min-h-14.5 px-3 py-3 flex-row justify-center items-center gap-2.5 rounded-[10px] bg-gray-bg-terciary sm:min-h-0 sm:max-h-22.5 sm:flex-col sm:px-2.5 sm:py-4

           border border-transparent transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-purple/40 hover:bg-gray-bg-terciary hover:shadow-[0_8px_24px_rgba(145,108,231,0.12)]">

            {icon}
            <span
                className="text-gray-font-secondary text-[16px] font-medium transition-colors duration-300 group-hover:text-white">{text}</span>
        </a>
    )
}
