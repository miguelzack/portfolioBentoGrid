import Image, {StaticImageData} from "next/image";

interface CardCertificationsProps {
    image: StaticImageData;
    imageAlt: string;
    text: string;
}

export function CardCertifications({
                                       image,
                                       imageAlt,
                                       text
                                   }: CardCertificationsProps) {
    return (
        <div className={"flex py-5 px-2.5 justify-center items-center gap-2.5 self-stretch rounded-xl bg-gray-bg-secondary"}>
            <div className={"flex size-[60px] shrink-0 p-3.5 justify-center items-center rounded-md bg-gray-bg-icon"}>
                <Image src={image} alt={imageAlt} className={"size-full object-contain"}/>
            </div>
            <p className={"text-gray-font-secondary text-[13px] font-medium"}>{text}</p>
        </div>
    )
}
