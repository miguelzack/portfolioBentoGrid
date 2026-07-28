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
        <a target={"_blank"} href={link}
           className={"flex px-2.5 py-2.5 items-center gap-1.5 self-stretch rounded-xl bg-gray-bg-secondary"}>
            <div className={"p-2 rounded-md bg-gray-bg-icon"}>
                {icon}
            </div>
            <span className={"text-gray-font-secondary text-[11px] font-medium"}>{text}</span>
        </a>
    )
}