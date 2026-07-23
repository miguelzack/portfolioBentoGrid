export default function Home() {
    return (
        <main className="grid min-h-screen grid-cols-4 grid-rows-4 gap-6 p-6">
            <div className="col-span-2 row-span-2 rounded-3xl border-2 p-6">
                Sobre Mim
            </div>

            <div className="col-span-2 rounded-3xl border-2  p-6">
                Projetos
            </div>

            <div className="col-span-1 row-span-2 rounded-3xl border-2 p-6">
                Skills
            </div>

            <div className="col-span-1 row-span-2 rounded-3xl border-2 p-6">
                Contato
            </div>

            <div className="col-span-2 rounded-3xl border-2 p-6">
                Experiência
            </div>
        </main>
    );
}
