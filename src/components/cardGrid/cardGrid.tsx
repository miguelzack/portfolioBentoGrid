import {ReactNode} from "react";

interface CardProps {
    icon: ReactNode;
    subTitle: string;
    title: string;
    className: string;
    buttons: ReactNode;
}

export function Card({
                         icon,
                         subTitle,
                         title,
                         className = "",
                         buttons
                     }: CardProps) {
    return (
        <div className={`rounded-3xl bg-gray-bg-primary px-5 py-0 justify-center gap-2.5 flex flex-col self-stretch${className}`}>

            <div className="flex flex-col self-stretch items-center gap-1.5">
                <div className="flex items-center gap-2 justify-center">
                    {icon}
                    <h3 className="text-gray-font-primary text-sm font-medium">
                        {subTitle}
                    </h3>
                </div>

                <h2 className="text-white text-base font-semibold leading-6">
                    {title}
                </h2>
            </div>


            <div className="{className}">
                {buttons}
            </div>
        </div>

    );
}