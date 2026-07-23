export default function Home() {
    return (
        <main className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-8 grid-rows-4 gap-[42px] p-[42px]">

            {/*TRANSFORMAR ESSAS DIV EM COMPONENT (Follow, Certifications, My Sctacks, Projects*/}

            <div className="col-start-1 col-span-2 row-start-1 row-span-1 rounded-3xl border-2 p-6">
                Follow Me
            </div>

            <div className="col-start-1 col-span-2 row-start-2 row-span-3   rounded-3xl border-2  p-6">
                Certifications
            </div>

            <div className="col-start-3 col-span-4 row-start-1 row-span-2 rounded-3xl border-2 p-6">
                About me
            </div>

            <div className="col-start-3 col-span-2 row-start-3 row-span-2 rounded-3xl border-2 p-6">
                Tech Arsenal
            </div>

            <div className="col-start-5 col-span-4 row-start-3 row-span-2 rounded-3xl border-2 p-6">
                Repositories
            </div>

            <div className="col-start-7 col-span-2 row-start-1 row-span-2 rounded-3xl border-2 p-6">
                Let's Work Together
            </div>
        </main>
    );
}
