type CharacterPageProps = {
  params: Promise<{ characterName: string }>;
};

export const instant = false;

export default async function CharacterPage({
  params,
}: CharacterPageProps) {
  const { characterName } = await params;

  return <h1>Character: {characterName}</h1>;
}