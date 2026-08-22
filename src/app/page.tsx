import {Card} from "@/components/cardGrid/cardGrid";
import {RocketIcon, LinkedinIcon, StacksIcon, ProjectsIcon, GithubIcon} from "@/assets/icons/export";
import {ButtonSocialMedia} from "@/components/buttonSocialMedia/buttonSocialMedia";
import {CardCertifications} from "@/components/cardCertifications/cardCertifications";
import {LogoMicrosoft, LogoSenac, LogoSenai} from "@/assets/images/export";

export default function Home() {
    return (
        <main className="mx-auto grid h-[100vh] max-w-360 grid-cols-8 grid-rows-4 gap-10.5 p-10.5">

            <Card icon={<RocketIcon/>} subTitle={"Follow Me"} title={"Online Presence"}
                  className={"col-start-1 col-span-2 row-start-1 row-span-1 justify-center"}
                  buttons={
                      <div className={"flex flex-col gap-2.5"}>
                          <ButtonSocialMedia text={"miguel-zacharias-da-silva"} icon={<LinkedinIcon/>}
                                             link={"https://www.linkedin.com/in/miguel-zacharias-da-silva-8074b7323/"}/>

                          <ButtonSocialMedia text={"miguelzack"} icon={<GithubIcon/>}
                                             link={"https://github.com/miguelzack"}/>

                      </div>
                  }/>

            <Card icon={<RocketIcon/>} subTitle={"My Certifications"} title={"Certifications"}
                  className={"col-start-1 col-span-2 row-start-2 row-span-3 gap-5 pt-5 flex justify-start"} buttons={
                <div className={"flex flex-col gap-5 max-h-[585.5px]"}>
                    <CardCertifications image={LogoSenac} imageAlt={"Logo Senac"}
                                        text={"SENAC  – Técnico em Informática Integrado ao Ensino Médio"}/>
                    <CardCertifications image={LogoSenac} imageAlt={"Logo Senac"}
                                        text={"SENAC – Assistente de Desenvolvimento de Aplicativos Computacionais"}/>
                    <CardCertifications image={LogoMicrosoft} imageAlt={"Logo Microsoft"}
                                        text={"Microsoft Certified - Azure Fundamentals (AZ-900)"}/>
                    <CardCertifications image={LogoSenai} imageAlt={"Logo Senai"}
                                        text={"SENAI Suíço-Brasileira - Criação de Páginas para Internet  - 120h."}/>
                    <CardCertifications image={LogoSenai} imageAlt={"Logo Senai"}
                                        text={"SENAI Suíço-Brasileira − Designer de Interfaces Web - 60h."}/>
                    <CardCertifications image={LogoSenai} imageAlt={"Logo Senai"}
                                        text={"SENAI Suíço-Brasileira − Interfaces Web com Bootstrap - 60h."}/>
                    <CardCertifications image={LogoSenac} imageAlt={"Logo Senac"}
                                        text={"SENAC Nações Unidas - 1° Etapa da Olimpíada Brasileira de Empreendedorismo"}/>
                </div>

            }/>

            <div className="col-start-3 col-span-4 row-start-1 row-span-2 rounded-3xl border-2 p-6">
                About me
            </div>

            <Card icon={<StacksIcon/>} subTitle={"My Stacks"} title={"Tech Arsenal"}
                  className={"col-start-3 col-span-2 row-start-3 row-span-2 gap-5"} buttons={undefined}/>


            <Card icon={<ProjectsIcon/>} subTitle={"My Projects"} title={"Repositories"}
                  className={"col-start-5 col-span-4 row-start-3 row-span-2 gap-5"} buttons={undefined}/>

            <div className="col-start-7 col-span-2 row-start-1 row-span-2 rounded-3xl border-2 p-6">
                Let's Work Together
            </div>
        </main>
    );
}
