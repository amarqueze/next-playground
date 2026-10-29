// src/app/character/[characterName]/page.tsx
import { notFound } from "next/navigation";

import { getCharacterByName } from "./_data/characters";

type CharacterPageProps = {
  params: Promise<{ characterName: string }>;
};

export const instant = false;

export default async function CharacterPage({
  params,
}: CharacterPageProps) {
  const { characterName } = await params;

  const character = await getCharacterByName(characterName);

  if (!character) {
    notFound();
  }

  return (
    <main className="space-y-3 p-6">
      <h1 className="text-3xl font-bold">{character.name}</h1>

      <dl className="space-y-2">
        <div>
          <dt className="font-bold">Status</dt>
          <dd>{character.status}</dd>
        </div>

        <div>
          <dt className="font-bold">Species</dt>
          <dd>{character.species}</dd>
        </div>

        <div>
          <dt className="font-bold">Origin</dt>
          <dd>{character.origin.name}</dd>
        </div>

        <div>
          <dt className="font-bold">Location</dt>
          <dd>{character.location.name}</dd>
        </div>

        <div>
          <dt className="font-bold">Episode count</dt>
          <dd>{character.episode.length}</dd>
        </div>
      </dl>
    </main>
  );
}