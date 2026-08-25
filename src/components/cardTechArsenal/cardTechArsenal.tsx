import {ReactNode} from "react";

interface CardTechArsenalProps {
    icon: ReactNode;
    text: string;
}

export function CardTechArsenal({
                                    icon,
                                    text
                                }: CardTechArsenalProps) {
    return (
        <div
            className="group flex w-full items-center gap-1.5 rounded-xl border border-transparent bg-gray-bg-secondary p-1.75 transition-all duration-300 ease-out hover:border-purple/40 hover:bg-gray-bg-terciary hover:shadow-[0_8px_24px_rgba(145,108,231,0.12)]">
            <div
                className="flex h-8.75 w-8.75 items-center justify-center rounded-md bg-gray-bg-icon transition-colors duration-300 group-hover:bg-purple/15 group-hover:text-purple">
                {icon}
            </div>
            <p
                className="text-sm font-medium text-gray-font-secondary transition-colors duration-300 group-hover:text-white">{text}</p>
        </div>
    )
}
