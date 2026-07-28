import SvgComponent from "@/assets/icons/rocketIcon";
import {Card} from "@/components/cardGrid/cardGrid";
import RocketIcon from "@/assets/icons/rocketIcon";
import StacksIcon from "@/assets/icons/stacksIcon";
import ProjectsIcon from "@/assets/icons/projectsIcon";
import {ButtonSocialMedia} from "@/components/buttonSocialMedia/buttonSocialMedia";
import LinkedinIcon from "@/assets/icons/linkedinIcon";
import Link from "next/link";
import GithubIcon from "@/assets/icons/githubIcon";

export default function Home() {
    return (
        <main className="mx-auto grid h-[100vh] max-w-360 grid-cols-8 grid-rows-4 gap-10.5 p-10.5">

            <Card icon={<RocketIcon/>} subTitle={"Follow Me"} title={"Online Presence"}
                  className={"col-start-1 col-span-2 row-start-1 row-span-1"}
                  buttons={
                      <div className={"flex flex-col gap-2.5"}>
                          <ButtonSocialMedia text={"miguel-zacharias-da-silva"} icon={<LinkedinIcon/>}
                                             link={"https://www.linkedin.com/in/miguel-zacharias-da-silva-8074b7323/"}/>

                          <ButtonSocialMedia text={"miguelzack"} icon={<GithubIcon/>}
                                             link={"https://github.com/miguelzack"}/>

                      </div>
                  }/>

            <Card icon={<RocketIcon/>} subTitle={"My Certifications"} title={"Certifications"}
                  className={"col-start-1 col-span-2 row-start-2 row-span-3"} buttons={undefined}/>

            <div className="col-start-3 col-span-4 row-start-1 row-span-2 rounded-3xl border-2 p-6">
                About me
            </div>

            <Card icon={<StacksIcon/>} subTitle={"My Stacks"} title={"Tech Arsenal"}
                  className={"col-start-3 col-span-2 row-start-3 row-span-2"} buttons={undefined}/>


            <Card icon={<ProjectsIcon/>} subTitle={"My Projects"} title={"Repositories"}
                  className={"col-start-5 col-span-4 row-start-3 row-span-2"} buttons={undefined}/>

            <div className="col-start-7 col-span-2 row-start-1 row-span-2 rounded-3xl border-2 p-6">
                Let's Work Together
            </div>
        </main>
    );
}
