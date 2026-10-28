export default async function CharacterSummary() {
  await new Promise<void>(resolve => {
    setTimeout(resolve, 2000);
  });

  return (
    <section className="rounded border p-4">
      <h2 className="text-xl font-bold">Character</h2>
      <p>Name: Rick Sanchez</p>
      <p>Species: Human</p>
    </section>
  );
}