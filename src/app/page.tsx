import {Card} from "@/components/cardGrid/cardGrid";
import {
    RocketIcon,
    LinkedinIcon,
    StacksIcon,
    ProjectsIcon,
    GithubIcon,
    FigmaIcon,
    ReactIcon,
    NextIcon,
    TailwindIcon,
    BootstrapIcon,
    SassIcon,
    NodeIcon,
    GitIcon,
    JavaIcon,
    GitHubPurpleIcon,
    PinLocalIcon, GlobeIcon, FlagIcon, FormIcon, ClockIcon
} from "@/assets/icons/export";
import {ButtonSocialMedia} from "@/components/buttonSocialMedia/buttonSocialMedia";
import {CertificationsCarousel} from "@/components/certificationsCarousel/certificationsCarousel";
import {CardTechArsenal} from "@/components/cardTechArsenal/cardTechArsenal";
import {RepositoriesCarousel, RepositoryProject} from "@/components/repositoriesCarousel/repositoriesCarousel";
import {EstouDeAcordo, MiguelPhoto} from "@/assets/images/export";
import Image from "next/image";
import {MiniCardsInfos} from "@/components/miniCardsInfos/miniCardsInfos";

const projects: RepositoryProject[] = [
    {
        name: "Estou de acordo",
        image: EstouDeAcordo,
        imageAlt: "Foto do portal 'Estou de Acordo' mostrando a página inicial com o menu de navegação, uma seção de destaque e uma lista de acordos.",
        projectUrl: "https://app.estoudeacordo.com.br/",
        description: "Plataforma de gestão de acordos",
    },
    {name: "Estou de acordo", image: EstouDeAcordo},
    {name: "Estou de acordo", image: EstouDeAcordo}
];

export default function Home() {
    return (
        <>
            <main className="mx-auto grid h-screen max-w-360 grid-cols-8 grid-rows-4 gap-10.5 p-10.5">
                <Card icon={<RocketIcon/>} subTitle="Follow Me" title="Online Presence"
                      className="col-start-1 col-span-2 row-start-1 row-span-1 justify-center"
                      buttons={
                          <div className="flex flex-col gap-2.5">
                              <ButtonSocialMedia text="miguel-zacharias-da-silva" icon={<LinkedinIcon/>}
                                                 link="https://www.linkedin.com/in/miguel-zacharias-da-silva-8074b7323/"/>
                              <ButtonSocialMedia text="miguelzack" icon={<GithubIcon/>}
                                                 link="https://github.com/miguelzack"/>
                          </div>
                      }/>

                <Card icon={<RocketIcon/>} subTitle="My Certifications" title="Certifications"
                      className="col-start-1 col-span-2 row-start-2 row-span-3 gap-5 pt-5 flex justify-start" buttons={
                    <CertificationsCarousel/>
                }/>

                <div
                    className="col-start-3 col-span-4 row-start-1 row-span-2 p-6 flex flex-col gap-2.5 rounded-4xl bg-gray-bg-primary h-full justify-center ">
                    <div className="flex py-2.5 flex-col justify-between items-center h-full max-h-47.5">
                        <div className="flex justify-center items-center gap-3.75">
                            <Image src={MiguelPhoto} alt="Foto de Miguel Silva"/>
                            <div className="flex flex-col items-start gap-2.5">
                                <h1 className="text-white text-[22px] font-semibold">Miguel Silva</h1>
                                <h2 className="text-gray-font-primary text-sm font-medium">I’m a <span
                                    className="text-purple font-semibold">Front-End Developer & UI/UX Designer</span>
                                </h2>
                            </div>
                        </div>
                        <p className="text-center text-white-full text-sm font-semibold">I’m a Junior Developer with
                            experience in full-stack web development using JavaScript, React, and Node.js. With a
                            background in Informatics and Systems Development, I’m open to new projects, collaborations,
                            and opportunities in technology.</p>

                    </div>
                    <div
                        className="flex flex-wrap items-center justify-center gap-2.5 self-stretch rounded-[10px] border-[0.8px] border-[rgba(255,255,255,0.06)] bg-black-principal-card p-3">
                        <MiniCardsInfos icon={<PinLocalIcon/>} text="Brazil"/>
                        <MiniCardsInfos icon={<GlobeIcon/>} text="Portuguese and English"/>
                        <MiniCardsInfos icon={<FlagIcon/>} text="Front-End Developer"/>
                        <MiniCardsInfos icon={<FlagIcon/>} text="UI/UX Designer"/>
                        <MiniCardsInfos icon={<FormIcon/>} text="SENAI Suíço-Brasileira"/>
                        <MiniCardsInfos icon={<ClockIcon/>} text="BRT"/>
                    </div>

                    <a href="https://github.com/miguelzack" target="_blank"
                       className="flex py-4 px-2.5 justify-center items-center gap-2.5 rounded-[10px] bg-gray-bg-terciary border border-transparent transition-all duration-300 ease-out hover:border-purple/40 hover:bg-gray-bg-terciary hover:shadow-[0_8px_24px_rgba(145,108,231,0.12)]">
                        <GitHubPurpleIcon/> <span className="text-[13px] font-medium text-gray-font-secondary">Visit my Github</span>
                    </a>


                </div>

                <Card icon={<StacksIcon/>} subTitle="My Stacks" title="Tech Arsenal"
                      className="col-start-3 col-span-2 row-start-3 row-span-2 gap-2.5" buttons={
                    <div className={"flex flex-col gap-3.5"}>
                        <div className={"flex gap-2.5 w-full"}>
                            <CardTechArsenal icon={<FigmaIcon/>} text={"Figma"}/>
                            <CardTechArsenal icon={<ReactIcon/>} text={"React"}/>
                        </div>
                        <div className={"flex gap-2.5 w-full"}>
                            <CardTechArsenal icon={<NextIcon/>} text={"Next.js"}/>
                            <CardTechArsenal icon={<TailwindIcon/>} text={"Tailwind"}/>
                        </div>
                        <div className={"flex gap-2.5 w-full"}>
                            <CardTechArsenal icon={<BootstrapIcon/>} text={"Bootstrap"}/>
                            <CardTechArsenal icon={<SassIcon/>} text={"Sass"}/>
                        </div>
                        <div className={"flex gap-2.5 w-full"}>
                            <CardTechArsenal icon={<NodeIcon/>} text={"Node.js"}/>
                            <CardTechArsenal icon={<GitIcon/>} text={"Git"}/>
                        </div>
                        <div className={"flex gap-2.5 w-full"}>
                            <CardTechArsenal icon={<JavaIcon/>} text={"Java"}/>
                            <CardTechArsenal icon={<ReactIcon/>} text={"R. Native"}/>
                        </div>
                    </div>

                }/>

                <Card icon={<ProjectsIcon/>} subTitle="My Projects" title="Repositories"
                      className="col-start-5 col-span-4 row-start-3 row-span-2 gap-1"
                      contentClassName="flex h-81.5 min-h-0 w-full self-stretch items-center justify-center" buttons={
                    <RepositoriesCarousel projects={projects}/>
                }/>

                <div className="col-start-7 col-span-2 row-start-1 row-span-2 rounded-3xl border-2 p-6">
                    Let&apos;s Work Together
                </div>
            </main>
        </>
    );
}
