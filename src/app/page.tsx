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
    PinLocalIcon, GlobeIcon, FlagIcon, FormIcon, ClockIcon, KingIcon, EmailIcon, LinkedinPurpleIcon
} from "@/assets/icons/export";
import {ButtonSocialMedia} from "@/components/buttonSocialMedia/buttonSocialMedia";
import {CertificationsCarousel} from "@/components/certificationsCarousel/certificationsCarousel";
import {CardTechArsenal} from "@/components/cardTechArsenal/cardTechArsenal";
import {RepositoriesCarousel, RepositoryProject} from "@/components/repositoriesCarousel/repositoriesCarousel";
import {
    BpPort,
    CinemoodPort,
    ConsumeBrasilAPIPort, CourseFournelPort, EcommercePort,
    EstouDeAcordo, ExchangePort, GlassUIPort, LandwindPort, LoginPort,
    MiguelPhoto,
    PokedexPort,
    PokemonSearchFormPort, SenaiCursosPort, SpringPort
} from "@/assets/images/export";
import Image from "next/image";
import {MiniCardsInfos} from "@/components/miniCardsInfos/miniCardsInfos";
import {ButtonLetsWork} from "@/components/buttonLetsWork/buttonLetsWork";

const projects: RepositoryProject[] = [
    {
        name: "Estou de acordo",
        image: EstouDeAcordo,
        imageAlt: "Foto do portal 'Estou de Acordo' mostrando a página inicial.",
        projectUrl: "https://app.estoudeacordo.com.br/",
        description: "Estou de Acordo is a solution that transforms your offer into a legally valid contract with legal assurance, equivalent to a notarized document. The project is hosted by the company that owns the group, which is also responsible for the website.",
    },
    {
        name: "BusPoint",
        image: BpPort,
        imageAlt: "Foto do site e app 'BusPoint' mostrando suas páginas.",
        projectUrl: "https://buspoint-landpage.vercel.app/",
        collaborators: [
            {name: "@marloikhodi", url: "https://github.com/marloikhodi"},
            {name: "@LyanBrito ", url: "https://github.com/LyanBrito"}
        ],
        alert: "COMING SOON TO APP STORES.",
        description: "BusPoint is an application designed to facilitate the public transportation experience, ensuring users never miss their stop by providing precise alerts. Our goal is to ensure a smooth and worry-free trip by offering a practical, intuitive, and reliable solution for daily commutes.",
    },
    {
        name: "Ecommerce - Nexo.",
        image: EcommercePort,
        imageAlt: "Foto do site e app 'Ecommerce' mostrando suas páginas.",
        projectUrl: "https://frontend-ecommerce-ebon.vercel.app/",
        repositoryUrl: "https://github.com/miguelzack/frontendEcommerce",
        alert: "Academic project developed exclusively for educational purposes, with no commercial intent. Any brands or companies mentioned were used solely as references and have no affiliation with this project. FOR TESTING PURPOSES, PLEASE WAIT A MOMENT FOR THE BACKEND TO START. ONLY RELOAD THE PAGE AFTER A SHORT WHILE.",
        description: "E-commerce project developed with React, Styled Components, and JavaScript. The project is a front-end application that consumes a back-end API to provide a complete shopping experience for users.",
    },
    {
        name: "CineMood",
        image: CinemoodPort,
        imageAlt: "Fotos do app 'CineMood' mostrando suas páginas.",
        apkUrl: "https://github.com/miguelzack/cinemood/releases/tag/v1.0.0",
        repositoryUrl: "https://github.com/miguelzack/cinemood",
        alert: "Academic project developed exclusively for educational purposes, with no commercial intent. Any brands or companies mentioned were used solely as references and have no affiliation with this project.",
        description: "CineMood is a mobile app for discovering and organizing movies. Instead of starting with a title, you start with the mood: want action, romance, something light to watch with the family, or a surprise? The app turns this intention into suggestions, lists, and sessions to share.",
    },
    {
        name: "Pokédex de Bolso",
        image: PokedexPort,
        imageAlt: "Fotos do app 'Pokédex de Bolso' mostrando suas páginas.",
        apkUrl: "https://github.com/miguelzack/pokedex-de-bolso/releases/tag/v1.0.0",
        repositoryUrl: "https://github.com/miguelzack/pokedex-de-bolso",
        alert: "Academic project developed exclusively for educational purposes, with no commercial intent. Any brands or companies mentioned were used solely as references and have no affiliation with this project.",
        description: "Pokédex de Bolso is a mobile application that allows users to explore the Pokémon Pokédex. With an intuitive interface, the app offers a fun experience for fans of the Pokémon universe.",
    },
    {
        name: "SENAI Cursos",
        image: SenaiCursosPort,
        imageAlt: "Fotos do app 'SENAI Cursos' mostrando suas páginas.",
        apkUrl: "https://github.com/miguelzack/senai-cursos-app/releases/tag/v1.0.0",
        repositoryUrl: "https://github.com/miguelzack/senai-cursos-app",
        alert: "Academic project developed exclusively for educational purposes, with no commercial intent. Any brands or companies mentioned were used solely as references and have no affiliation with this project.",
        description: "SENAI Cursos is an app that allows users to access information about the courses available at SENAI. With a simple interface, the app offers a practical experience for its users.",},
    {
        name: "APIs built with Spring Boot",
        image: SpringPort,
        imageAlt: "Logo do Spring Boot.",
        repositoryUrl: "https://github.com/miguelzack/spring-back-third-semester-senai",
        alert: "Academic project developed exclusively for educational purposes, with no commercial intent. Any brands or companies mentioned were used solely as references and have no affiliation with this project.",
        description: "APIs built with Spring Boot.",
    },
    {
        name: "SENAI Exchange",
        image: ExchangePort,
        imageAlt: "Foto do site e app 'SENAI Exchange' mostrando suas páginas.",
        projectUrl: "https://senai-exchange.vercel.app/",
        collaborators: [
            {name: "@th-cs", url: "https://github.com/th-cs"},
            {name: "@Manuela0894", url: "https://github.com/Manuela0894"},
            {name: "@nikidsy", url: "https://github.com/nikidsy"},
            {name: "@sarahsj-dot ", url: "https://github.com/sarahsj-dot"},
        ],
        alert: "Academic project developed exclusively for educational purposes, with no commercial intent. Any brands or companies mentioned were used solely as references and have no affiliation with this project.",
        description: "Academic project with the purpose of creating a social network for study.",
    },
    {
        name: "Pokémon - Search Form",
        image: PokemonSearchFormPort,
        imageAlt: "Fotos do app 'Pokémon - Search Form' mostrando suas páginas.",
        projectUrl: "https://pokemon-search-form-seven.vercel.app/",
        alert: "Academic project developed exclusively for educational purposes, with no commercial intent. Any brands or companies mentioned were used solely as references and have no affiliation with this project.",
        description: "Pokémon Search Form is a website that allows users to search for information about different Pokémon. With a user-friendly interface, the app provides an interactive experience for fans of the Pokémon universe.",
    },
    {
        name: "Consume Brasil API",
        image: ConsumeBrasilAPIPort,
        imageAlt: "Fotos do app 'Consume Brasil API' mostrando suas páginas.",
        projectUrl: "https://consume-brasil-api.vercel.app/",
        alert: "Academic project developed exclusively for educational purposes, with no commercial intent. Any brands or companies mentioned were used solely as references and have no affiliation with this project.",
        description: "Consume Brasil API is a project that allows users to consume the Brasil API in a practical and efficient way. With a simple interface, the app provides a streamlined experience for its users.",
        collaborators: [
            {
                name: "@th-cs",
                url: "https://github.com/th-cs",
            },
        ],
    },
    {
        name: "Landwind",
        image: LandwindPort,
        imageAlt: "Foto do site e app 'Landwind' mostrando suas páginas.",
        projectUrl: "https://landwind-tailwind-three.vercel.app/",
        alert: "Academic project developed exclusively for educational purposes, with no commercial intent. Any brands or companies mentioned were used solely as references and have no affiliation with this project.",
        description: "Landing Page with Tailwind.",
    },
    {
        name: "Glass UI",
        image: GlassUIPort,
        imageAlt: "Foto do site e app 'Glass UI' mostrando suas páginas.",
        projectUrl: "https://glass-ui-taupe.vercel.app/",
        alert: "Academic project developed exclusively for educational purposes, with no commercial intent. Any brands or companies mentioned were used solely as references and have no affiliation with this project.",
        description: "Landing Page with Tailwind.",
    },
    {
        name: "Course Funnel Test",
        image: CourseFournelPort,
        imageAlt: "Foto do site e app 'Course Funnel Test' mostrando suas páginas.",
        projectUrl: "https://course-funnel-test.vercel.app/",
        alert: "Academic project developed exclusively for educational purposes, with no commercial intent. Any brands or companies mentioned were used solely as references and have no affiliation with this project.",
        description: "Landing Page with Tailwind.",
    },


    {
        name: "Login",
        image: LoginPort,
        imageAlt: "Foto do site e app 'Login' mostrando suas páginas.",
        projectUrl: "https://login-with-tailwind.vercel.app/",
        alert: "Academic project developed exclusively for educational purposes, with no commercial intent. Any brands or companies mentioned were used solely as references and have no affiliation with this project.",
        description: "Login Page with Tailwind.",
    },

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

                <div
                    className="col-start-7 col-span-2 row-start-1 row-span-2 rounded-4xl bg-gray-bg-primary px-5 flex flex-col justify-center items-center w-full gap-6">
                    <div className="flex flex-col gap-6.25 items-center">
                        <div
                            className="flex max-h-16.25 max-w-16.25 items-center justify-center rounded-full bg-gray-bg-terciary p-5">
                            <KingIcon/>
                        </div>
                        <div className="flex flex-col gap-1.25 items-center">
                            <h2 className="text-white text-[20px] font-semibold">Let’s Work Together</h2>
                            <h3 className="text-gray-font-primary text-[14px] font-medium">Let's Make Magic Happen
                                Together!</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <ButtonLetsWork
                            icon={<EmailIcon/>}
                            text="Email Me"
                            link="https://mail.google.com/mail/?view=cm&fs=1&to=mzsilvaw@gmail.com&su=Work%20opportunity&body=Hello%2C%20my%20name%20is%20Miguel%20and%20I%20would%20like%20to%20work%20with%20you."

                        />
                        <ButtonLetsWork icon={<LinkedinPurpleIcon/>} text="LinkedIn"
                                        link="https://www.linkedin.com/in/miguel-zacharias-da-silva-8074b7323/"/>

                    </div>
                </div>
            </main>
        </>
    );
}
