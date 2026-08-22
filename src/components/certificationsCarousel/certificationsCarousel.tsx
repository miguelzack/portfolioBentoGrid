"use client";

import {PointerEvent, WheelEvent, useRef, useState} from "react";
import {LogoMicrosoft, LogoSenac, LogoSenai} from "@/assets/images/export";
import {CardCertifications} from "@/components/cardCertifications/cardCertifications";

const certifications = [
    {image: LogoSenac, imageAlt: "Logo Senac", text: "SENAC – Técnico em Informática Integrado ao Ensino Médio"},
    {
        image: LogoSenac,
        imageAlt: "Logo Senac",
        text: "SENAC – Assistente de Desenvolvimento de Aplicativos Computacionais"
    },
    {image: LogoMicrosoft, imageAlt: "Logo Microsoft", text: "Microsoft Certified - Azure Fundamentals (AZ-900)"},
    {
        image: LogoSenai,
        imageAlt: "Logo Senai",
        text: "SENAI Suíço-Brasileira - Criação de Páginas para Internet - 120h."
    },
    {image: LogoSenai, imageAlt: "Logo Senai", text: "SENAI Suíço-Brasileira - Designer de Interfaces Web - 60h."},
    {image: LogoSenai, imageAlt: "Logo Senai", text: "SENAI Suíço-Brasileira - Interfaces Web com Bootstrap - 60h."},
    {
        image: LogoSenac,
        imageAlt: "Logo Senac",
        text: "SENAC Nações Unidas - 1ª Etapa da Olimpíada Brasileira de Empreendedorismo"
    },
];

function CertificationsList({hidden = false}: { hidden?: boolean }) {
    return (
        <div className="flex shrink-0 flex-col gap-5" aria-hidden={hidden || undefined}>
            {certifications.map((certification) => (
                <CardCertifications key={certification.text} {...certification}/>
            ))}
        </div>
    );
}

export function CertificationsCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);
    const draggingRef = useRef(false);
    const pointerYRef = useRef(0);
    const [dragging, setDragging] = useState(false);

    const getAnimation = () => trackRef.current?.getAnimations()[0];

    const moveAnimation = (distance: number) => {
        const track = trackRef.current;
        const animation = getAnimation();
        const groups = track?.children;
        if (!track || !animation || !groups || groups.length < 2) return;

        const groupDistance = (groups[1] as HTMLElement).offsetTop - (groups[0] as HTMLElement).offsetTop;
        const duration = Number(animation.effect?.getTiming().duration);
        const currentTime = Number(animation.currentTime ?? 0);
        if (!groupDistance || !duration) return;

        const nextTime = currentTime + (distance / groupDistance) * duration;
        animation.currentTime = ((nextTime % duration) + duration) % duration;
    };

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
        draggingRef.current = true;
        setDragging(true);
        pointerYRef.current = event.clientY;
        getAnimation()?.pause();
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
        if (!draggingRef.current) return;
        moveAnimation(pointerYRef.current - event.clientY);
        pointerYRef.current = event.clientY;
    };

    const stopDragging = () => {
        if (!draggingRef.current) return;
        draggingRef.current = false;
        setDragging(false);
        getAnimation()?.play();
    };

    const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
        event.preventDefault();
        moveAnimation(event.deltaY);
    };

    return (
        <div className="relative h-full max-h-[585.5px] overflow-hidden">
            <div
                className={`certifications-viewport h-full select-none overflow-hidden ${dragging ? "is-dragging cursor-grabbing" : "cursor-grab"}`}
                role="region"
                aria-label="Carrossel de certificações"
                onMouseLeave={stopDragging}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={stopDragging}
                onPointerCancel={stopDragging}
                onWheel={handleWheel}
            >
                <div ref={trackRef} className="certifications-track flex flex-col gap-5">
                    <CertificationsList/>
                    <CertificationsList hidden/>
                </div>
            </div>
        </div>
    );
}
