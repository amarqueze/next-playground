
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="bg-yellow-100 text-yellow-600 text-xl font-bold p-4 mb-4 rounded">Rick and Morty Wiki</h1>
      <h2 className="bg-yellow-100 text-yellow-600 text-lg font-light p-4 mb-4 rounded">Explore characters, episodes, and locations from the Rick and Morty universe.</h2>
      <h3 className="bg-yellow-100 text-yellow-600 text-sm italic h-20 m-4 font-light p-4 rounded">
        This wiki is a fan-made project and is not affiliated with the official Rick and Morty franchise. All information is sourced from the show and its creators.
      </h3>
    </div>
  );
}
