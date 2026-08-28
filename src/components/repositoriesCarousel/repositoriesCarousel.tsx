"use client";

import Image, {StaticImageData} from "next/image";
import {createPortal} from "react-dom";
import {PointerEvent, useCallback, useEffect, useRef, useState} from "react";

export interface RepositoryProject {
    name: string;
    image: StaticImageData | string;
    description?: string;
    imageAlt?: string;
    projectUrl?: string;
    repositoryUrl?: string;
    apkUrl?: string;
    collaborators?: {
        name: string;
        url?: string;
    }[];
    alert?: string;
}

interface RepositoriesCarouselProps {
    projects: RepositoryProject[];
}

export function RepositoriesCarousel({projects}: RepositoriesCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<-1 | 1>(1);
    const [animationKey, setAnimationKey] = useState(0);
    const [autoPlayKey, setAutoPlayKey] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [selectedProject, setSelectedProject] = useState<RepositoryProject | null>(null);
    const pausedRef = useRef(false);
    const pointerStartRef = useRef(0);
    const draggedRef = useRef(false);
    const hasMultipleProjects = projects.length > 1;

    const changeSlide = useCallback((step: -1 | 1, resetAutoPlay = false) => {
        if (projects.length < 2) return;

        setDirection(step);
        setActiveIndex((currentIndex) => (
            currentIndex + step + projects.length
        ) % projects.length);
        setAnimationKey((key) => key + 1);
        if (resetAutoPlay) setAutoPlayKey((key) => key + 1);
    }, [projects.length]);

    const goToSlide = (projectIndex: number) => {
        if (projectIndex === activeIndex) return;
        setDirection(projectIndex > activeIndex ? 1 : -1);
        setActiveIndex(projectIndex);
        setAnimationKey((key) => key + 1);
        setAutoPlayKey((key) => key + 1);
    };

    useEffect(() => {
        if (!hasMultipleProjects) return;

        const interval = window.setInterval(() => {
            if (!pausedRef.current) changeSlide(1);
        }, 5000);

        return () => window.clearInterval(interval);
    }, [autoPlayKey, changeSlide, hasMultipleProjects]);

    useEffect(() => {
        if (activeIndex >= projects.length && projects.length > 0) {
            setActiveIndex(0);
        }
    }, [activeIndex, projects.length]);

    useEffect(() => {
        if (!selectedProject) return;

        const previousOverflow = document.body.style.overflow;
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSelectedProject(null);
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [selectedProject]);

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
        if (!hasMultipleProjects) return;
        pausedRef.current = true;
        pointerStartRef.current = event.clientX;
        draggedRef.current = false;
        setDragging(true);
    };

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
        if (!dragging) return;
        const offset = event.clientX - pointerStartRef.current;
        if (Math.abs(offset) > 6) draggedRef.current = true;
        setDragOffset(offset);
    };

    const handlePointerUp = () => {
        if (!dragging) return;

        if (Math.abs(dragOffset) >= 55) {
            changeSlide(dragOffset < 0 ? 1 : -1, true);
        }

        setDragging(false);
        setDragOffset(0);
        pausedRef.current = false;
    };

    const activeProject = projects[activeIndex] ?? projects[0];

    const openProject = () => {
        if (draggedRef.current) {
            draggedRef.current = false;
            return;
        }
        pausedRef.current = true;
        setSelectedProject(activeProject);
    };

    return (
        <>
            <div
                className={`group/repositories relative mx-auto h-full max-h-81.5 w-full max-w-125.5 overflow-hidden rounded-xl bg-gray-bg-secondary touch-pan-y ${dragging ? "cursor-grabbing" : hasMultipleProjects ? "cursor-grab" : ""}`}
                role="region"
                aria-roledescription="carousel"
                aria-label="Repositórios"
                onMouseEnter={() => {
                    pausedRef.current = true;
                }}
                onMouseLeave={() => {
                    pausedRef.current = false;
                    handlePointerUp();
                }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
            >
                <article
                    key={`${activeIndex}-${animationKey}`}
                    className={`group/repository-card relative flex h-full w-full flex-col items-center justify-center gap-2.5 rounded-xl border border-transparent px-7.5 py-5 transition-[translate,border-color,background-color,box-shadow] ease-out hover:border-purple/45 hover:bg-gray-bg-terciary hover:shadow-[0_12px_32px_rgba(145,108,231,0.16)] focus-within:border-purple ${dragging ? "duration-0" : "duration-300"} ${direction === 1 ? "repository-slide-next" : "repository-slide-previous"}`}
                    style={{
                        translate: `${dragOffset}px 0`,
                    }}
                >
                    <h3 className="shrink-0 text-center text-xl font-bold text-gray-font-secondary transition-colors duration-300 group-hover/repository-card:text-white">
                        {activeProject.name}
                    </h3>
                    <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-xl bg-gray-bg-icon">
                        <Image
                            src={activeProject.image}
                            alt={activeProject.imageAlt ?? `Prévia do projeto ${activeProject.name}`}
                            fill
                            priority={activeIndex === 0}
                            sizes="(max-width: 768px) 90vw, 442px"
                            className="pointer-events-none object-cover transition-transform duration-500 group-hover/repository-card:scale-[1.025]"
                        />
                        <div
                            className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/repository-card:opacity-100 group-focus-within/repository-card:opacity-100"/>
                    </div>
                    <button
                        type="button"
                        aria-label={`Abrir detalhes de ${activeProject.name}. Projeto ${activeIndex + 1} de ${projects.length}`}
                        onClick={openProject}
                        className="absolute inset-0 z-1 flex items-end justify-center rounded-xl pb-10 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-purple"
                    >
                        <span
                            className="translate-y-2 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/repository-card:translate-y-0 group-hover/repository-card:opacity-100 group-focus-within/repository-card:translate-y-0 group-focus-within/repository-card:opacity-100">
                            View details
                        </span>
                    </button>
                </article>

                {hasMultipleProjects && (
                    <>
                        <button
                            type="button"
                            aria-label="Projeto anterior"
                            onPointerDown={(event) => event.stopPropagation()}
                            onClick={(event) => {
                                event.stopPropagation();
                                changeSlide(-1, true);
                            }}
                            className="absolute left-3 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/65 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple/70 hover:bg-purple group-hover/repositories:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-purple"
                        >
                            <span aria-hidden="true"
                                  className="block size-2.5 translate-x-0.5 rotate-45 border-b-2 border-l-2 border-current"/>
                        </button>
                        <button
                            type="button"
                            aria-label="Próximo projeto"
                            onPointerDown={(event) => event.stopPropagation()}
                            onClick={(event) => {
                                event.stopPropagation();
                                changeSlide(1, true);
                            }}
                            className="absolute right-3 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/65 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple/70 hover:bg-purple group-hover/repositories:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-purple"
                        >
                            <span aria-hidden="true"
                                  className="block size-2.5 -translate-x-0.5 rotate-45 border-r-2 border-t-2 border-current"/>
                        </button>
                        <div
                            className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/60 px-2.5 py-1.5 backdrop-blur-sm">
                            {projects.map((project, projectIndex) => (
                                <button
                                    key={`${project.name}-${projectIndex}`}
                                    type="button"
                                    aria-label={`Ir para ${project.name}`}
                                    aria-current={activeIndex === projectIndex ? "true" : undefined}
                                    onPointerDown={(event) => event.stopPropagation()}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        goToSlide(projectIndex);
                                    }}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === projectIndex ? "w-5 bg-purple" : "w-1.5 bg-white/45 hover:bg-white"}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {selectedProject && createPortal(
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
                    role="presentation"
                    onMouseDown={() => setSelectedProject(null)}
                >
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="repository-modal-title"
                        className="repository-modal-enter relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-y-auto rounded-3xl border border-white/10 bg-gray-bg-primary p-5 shadow-[0_24px_80px_rgba(0,0,0,0.65)] sm:p-7"
                        onMouseDown={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            aria-label="Fechar detalhes do projeto"
                            onClick={() => setSelectedProject(null)}
                            className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full border border-white/10 bg-black/65 text-white transition-all duration-300 hover:rotate-90 hover:border-purple/70 hover:bg-purple focus-visible:outline-2 focus-visible:outline-purple"
                        >
                            <span aria-hidden="true"
                                  className="relative block size-3.5 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0.5 before:-translate-x-1/2 before:rotate-45 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-full after:w-0.5 after:-translate-x-1/2 after:-rotate-45 after:bg-current"/>
                        </button>

                        <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-2xl bg-gray-bg-icon">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.imageAlt ?? `Imagem detalhada do projeto ${selectedProject.name}`}
                                fill
                                sizes="(max-width: 768px) 95vw, 720px"
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-medium text-purple">Projeto em destaque</p>
                            <h2 id="repository-modal-title" className="pr-10 text-2xl font-bold text-white sm:text-3xl">
                                {selectedProject.name}
                            </h2>

                            {selectedProject.alert && (
                                <p
                                    role="note"
                                    className="rounded-xl border border-purple/30 bg-purple/10 px-4 py-3 text-sm leading-6 text-gray-font-secondary"
                                >
                                    {selectedProject.alert}
                                </p>
                            )}

                            {selectedProject.description && (
                                <p className="max-w-2xl text-sm leading-6 text-gray-font-secondary sm:text-base">
                                    {selectedProject.description}
                                </p>
                            )}

                            {selectedProject.collaborators?.length ? (
                                <p className="text-sm text-gray-font-secondary">
                                    In collaboration with {selectedProject.collaborators.map((collaborator, index) => (
                                        <span key={`${collaborator.name}-${index}`}>
                                            {collaborator.url ? (
                                                <a
                                                    href={collaborator.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-semibold text-purple transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-purple"
                                                >
                                                    {collaborator.name}
                                                </a>
                                            ) : (
                                                <span className="font-semibold text-white">{collaborator.name}</span>
                                            )}
                                            {index < selectedProject.collaborators!.length - 1 && ", "}
                                        </span>
                                    ))}
                                </p>
                            ) : null}

                            {(selectedProject.projectUrl || selectedProject.repositoryUrl || selectedProject.apkUrl) && (
                                <div className="mt-2 flex flex-wrap gap-3">
                                    {selectedProject.projectUrl && (
                                        <a
                                            href={selectedProject.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-xl bg-purple px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(145,108,231,0.3)]"
                                        >
                                            View project
                                        </a>
                                    )}
                                    {selectedProject.apkUrl && (
                                        <a
                                            href={selectedProject.apkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={!selectedProject.projectUrl && selectedProject.repositoryUrl
                                                ? "rounded-xl bg-purple px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(145,108,231,0.3)]"
                                                : "rounded-xl border border-white/15 bg-gray-bg-secondary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-purple/60 hover:bg-gray-bg-terciary"
                                            }
                                        >
                                            Download APK
                                        </a>
                                    )}
                                    {selectedProject.repositoryUrl && (
                                        <a
                                            href={selectedProject.repositoryUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={!selectedProject.projectUrl && !selectedProject.apkUrl
                                                ? "rounded-xl bg-purple px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(145,108,231,0.3)]"
                                                : "rounded-xl border border-white/15 bg-gray-bg-secondary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-purple/60 hover:bg-gray-bg-terciary"
                                            }
                                        >
                                            View repository
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </section>
                </div>,
                document.body
            )}
        </>
    );
}
