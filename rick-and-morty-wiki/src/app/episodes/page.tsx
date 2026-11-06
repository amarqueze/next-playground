
export default function EpisodesPage() {
  const episodes = Array.from(
    { length: 5 },
    (_, index) => `Episodio ${index + 1}`
  );

  return (
    <main>
      <div className="grid w-full h-dvh p-4 grid-cols-[240px_1fr_1fr_1fr] grid-rows-[64px_1fr_48px] border border-sky-300">
        <div className="col-span-4 rounded p-4 border border-amber-300">Header</div>
        <div className="row-span-2 rounded p-4 border border-amber-300">Sidebar</div>
        <div className="col-span-3 row-span-2 overflow-y-auto rounded p-4 border border-amber-300">
          <div className="flex flex-wrap gap-4">
            {episodes.map((episode) => (
              <article
                key={episode}
                className="
                  min-w-0
                  basis-full
                  md:basis-[calc((100%-2rem)/3)] 
                  lg:basis-[calc((100%-3rem)/4)]
                  shrink-0
                  rounded-xl border border-amber-300 p-4
                "
              >
                <h2 className="font-bold">{episode}</h2>

                <p className="mt-2">
                  Información del episodio.
                </p>

                <button className="mt-4 rounded bg-brand-green px-4 py-2 text-white">
                  Ver detalles
                </button>
              </article>
            ))}
          </div>
        </div>
        <div className="col-span-4 rounded p-4 border border-amber-300">Footer</div>
      </div>
    </main>
  );
}