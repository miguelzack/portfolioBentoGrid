"use client";

import {PointerEvent, useCallback, useEffect, useRef, useState} from "react";
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
    const viewportRef = useRef<HTMLDivElement>(null);
    const draggingRef = useRef(false);
    const pointerYRef = useRef(0);
    const [dragging, setDragging] = useState(false);

    const keepScrollInfinite = useCallback(() => {
        const viewport = viewportRef.current;
        if (!viewport) return;

        const groups = viewport.firstElementChild?.children;
        if (!groups || groups.length < 3) return;

        const groupDistance = (groups[1] as HTMLElement).offsetTop - (groups[0] as HTMLElement).offsetTop;
        if (groupDistance <= 0) return;

        if (viewport.scrollTop < groupDistance || viewport.scrollTop >= groupDistance * 2) {
            const relativePosition = viewport.scrollTop - groupDistance;
            const normalizedPosition = ((relativePosition % groupDistance) + groupDistance) % groupDistance;
            viewport.scrollTop = groupDistance + normalizedPosition;
        }
    }, []);

    useEffect(() => {
        const viewport = viewportRef.current;
        if (!viewport) return;

        const groups = viewport.firstElementChild?.children;
        if (!groups || groups.length < 2) return;
        viewport.scrollTop = (groups[1] as HTMLElement).offsetTop - (groups[0] as HTMLElement).offsetTop;
    }, []);

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
        draggingRef.current = true;
        setDragging(true);
        pointerYRef.current = event.clientY;
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
        if (!draggingRef.current || !viewportRef.current) return;
        viewportRef.current.scrollTop -= event.clientY - pointerYRef.current;
        pointerYRef.current = event.clientY;
        keepScrollInfinite();
    };

    const stopDragging = () => {
        draggingRef.current = false;
        setDragging(false);
    };

    return (
        <div className="relative h-full max-h-[585.5px] overflow-hidden">
            <div
                ref={viewportRef}
                className={`certifications-viewport h-full select-none overflow-y-auto ${dragging ? "is-dragging cursor-grabbing" : "cursor-grab"}`}
                role="region"
                aria-label="Carrossel de certificações"
                onMouseLeave={stopDragging}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={stopDragging}
                onPointerCancel={stopDragging}
                onScroll={keepScrollInfinite}
            >
                <div className="certifications-track flex flex-col gap-5">
                    <CertificationsList hidden/>
                    <CertificationsList/>
                    <CertificationsList hidden/>
                </div>
            </div>
        </div>
    );
}
