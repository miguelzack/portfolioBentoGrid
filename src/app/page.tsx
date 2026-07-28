import SvgComponent from "@/assets/icons/rocketIcon";
import {Card} from "@/components/cardGrid/cardGrid";
import RocketIcon from "@/assets/icons/rocketIcon";
import StacksIcon from "@/assets/icons/stacksIcon";
import ProjectsIcon from "@/assets/icons/projectsIcon";

export default function Home() {
    return (
        <main className="mx-auto grid min-h-screen max-w-360 grid-cols-8 grid-rows-4 gap-10.5 p-10.5">

            <Card icon={<RocketIcon/>} subTitle={"Follow Me"} title={"Online Presence"}
                  className={"col-start-1 col-span-2 row-start-1 row-span-1"}/>

            <Card icon={<RocketIcon/>} subTitle={"My Certifications"} title={"Certifications"}
                  className={"col-start-1 col-span-2 row-start-2 row-span-3"}/>

            <div className="col-start-3 col-span-4 row-start-1 row-span-2 rounded-3xl border-2 p-6">
                About me
            </div>

            <Card icon={<StacksIcon/>} subTitle={"My Stacks"} title={"Tech Arsenal"}
                  className={"col-start-3 col-span-2 row-start-3 row-span-2"}/>


            <Card icon={<ProjectsIcon/>} subTitle={"My Projects"} title={"Repositories"}
                  className={"col-start-5 col-span-4 row-start-3 row-span-2"}/>

            <div className="col-start-7 col-span-2 row-start-1 row-span-2 rounded-3xl border-2 p-6">
                Let's Work Together
            </div>
        </main>
    );
}
