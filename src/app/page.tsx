import {Card} from "@/components/cardGrid/cardGrid";
import {
    RocketIcon,
    LinkedinIcon,
    StacksIcon,
    ProjectsIcon,
    GithubIcon,
    FigmaIcon,
    ReactIcon, NextIcon, TailwindIcon, BootstrapIcon, SassIcon, NodeIcon, GitIcon, JavaIcon
} from "@/assets/icons/export";
import {ButtonSocialMedia} from "@/components/buttonSocialMedia/buttonSocialMedia";
import {CertificationsCarousel} from "@/components/certificationsCarousel/certificationsCarousel";
import {CardTechArsenal} from "@/components/cardTechArsenal/cardTechArsenal";
import {RepositoriesCarousel, RepositoryProject} from "@/components/repositoriesCarousel/repositoriesCarousel";
import {EstouDeAcordo} from "@/assets/images/export";

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

                <div className="col-start-3 col-span-4 row-start-1 row-span-2 rounded-3xl border-2 p-6">About me</div>

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
