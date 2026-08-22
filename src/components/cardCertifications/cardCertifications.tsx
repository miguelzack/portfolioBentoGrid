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
        <div className="group flex items-center justify-center gap-2.5 self-stretch rounded-xl border border-transparent bg-gray-bg-secondary px-2.5 py-5 transition-all duration-300 ease-out hover:border-purple/40 hover:bg-gray-bg-terciary hover:shadow-[0_8px_24px_rgba(145,108,231,0.12)]">
            <div className="flex size-15 shrink-0 items-center justify-center rounded-md bg-gray-bg-icon p-3.5 transition-all duration-300 group-hover:bg-purple/15">
                <Image src={image} alt={imageAlt} className={"size-full object-contain"}/>
            </div>
            <p className="text-[13px] font-medium text-gray-font-secondary transition-colors duration-300 group-hover:text-white">{text}</p>
        </div>
    )
}
