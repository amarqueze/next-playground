
export default async function EpisodeList() {
  await new Promise<void>(resolve => {
    setTimeout(resolve, 5000);
  });

  return (
    <section className="rounded border p-4">
      <h2 className="text-xl font-bold">Episodes</h2>

      <ul>
        <li>Pilot</li>
        <li>Lawnmower Dog</li>
        <li>Anatomy Park</li>
      </ul>
    </section>
  );
}