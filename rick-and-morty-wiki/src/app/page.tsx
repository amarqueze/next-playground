
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <h1 className="bg-brand-green text-brand-charcoal text-xl font-bold p-4 mb-4 rounded">Rick and Morty Wiki</h1>
      <h2 className="bg-brand-green text-brand-charcoal text-lg font-light p-4 mb-4 rounded hover:bg-slate-400 hover:text-white hover:cursor-pointer">Explore characters, episodes, and locations from the Rick and Morty universe.</h2>
      <h3 className="bg-brand-green text-brand-charcoal text-sm font-extrabold italic h-20 m-4 p-4 rounded">
        This wiki is a fan-made project and is not affiliated with the official Rick and Morty franchise. All information is sourced from the show and its creators.
      </h3>
    </div>
  );
}
