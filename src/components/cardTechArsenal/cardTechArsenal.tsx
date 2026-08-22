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
            className="w-full flex p-1.75 items-center gap-1.5 rounded-xl bg-gray-bg-secondary">
            <div
                className="w-8.75 h-8.75 rounded-md bg-gray-bg-icon flex items-center justify-center">
                {icon}
            </div>
            <p
                className="font-medium text-sm">{text}</p>
        </div>
    )
}
