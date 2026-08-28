import {ReactNode} from "react";

interface MiniCardsInfosProps {
    icon: ReactNode;
    text: string;
}

export function MiniCardsInfos({
                                   icon,
                                   text
                               }: MiniCardsInfosProps) {
    return (
        <div
            className="flex items-center justify-center gap-2.5 rounded-[40px] border-[0.5px] border-[rgba(255,255,255,0.05)] bg-gray-bg-secondary px-2.5 py-1.5 transition-all duration-300 ease-out hover:border-purple/40 hover:bg-gray-bg-terciary hover:shadow-[0_8px_24px_rgba(145,108,231,0.12)]">  {icon}
            <p
                className="text-[13px] text-gray-font-secondary font-medium transition-colors duration-300 group-hover:text-white">{text}</p>
        </div>
    )
}
