type GuidePageProps = {
  params: Promise<{ slug: string[] }>;
};

export const instant = false;

export default async function GuidePage({
  params,
}: GuidePageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Guide</h1>

      <p>Segments: {slug.length}</p>

      <ol>
        {slug.map((segment, index) => (
          <li key={index}>{segment}</li>
        ))}
      </ol>
    </main>
  );
}