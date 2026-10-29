import { cacheLife } from "next/cache";

type CharacterReference = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: CharacterReference;
  location: CharacterReference;
  episode: string[];
};

type CharacterSearchResponse = {
  results: Character[];
};

export async function getCharacterByName(
  name: string,
): Promise<Character | null> {
  "use cache";

  cacheLife({
    stale: 30,
    revalidate: 60,
    expire: 300,
  });

  const url = new URL(
    "https://rickandmortyapi.com/api/character",
  );

  url.searchParams.set("name", name);

  console.log("[API request]", name, new Date().toISOString());

  const response = await fetch(url);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch character");
  }

  const data: CharacterSearchResponse = await response.json();

  const exactMatch = data.results.find(
    character =>
      character.name.toLowerCase() === name.toLowerCase(),
  );

  return exactMatch ?? data.results[0] ?? null;
}