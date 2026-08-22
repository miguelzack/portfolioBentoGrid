import {ReactNode} from "react";

interface ButtonSocialMediaProps {
    icon: ReactNode;
    text: string;
    link: string,
}

export function ButtonSocialMedia({
                                      icon,
                                      text,
                                      link
                                  }: ButtonSocialMediaProps) {
    return (
        <a target="_blank" rel="noopener noreferrer" href={link}
           className="group flex items-center gap-1.5 self-stretch rounded-xl border border-transparent bg-gray-bg-secondary px-2.5 py-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-purple/40 hover:bg-gray-bg-terciary hover:shadow-[0_8px_24px_rgba(145,108,231,0.12)]">
            <div className="rounded-md bg-gray-bg-icon p-2 transition-all duration-300 group-hover:bg-purple/15 group-hover:text-purple">
                {icon}
            </div>
            <span className="text-[11px] font-medium text-gray-font-secondary transition-colors duration-300 group-hover:text-white">{text}</span>
        </a>
    )
}
