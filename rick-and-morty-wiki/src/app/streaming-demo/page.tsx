
import { Suspense } from "react";

import CharacterSummary from "./_components/character-summary";
import EpisodeList from "./_components/episode-list";
import { CharacterSkeleton, EpisodesSkeleton } from "./_components/skeletons";

export default function StreamingDemoPage() {
  return (
    <main className="space-y-6 p-6">
        <header>
            <h1 className="text-3xl font-bold">Streaming demo</h1>
            <p>Each section appears when it is ready.</p>
        </header>

        <Suspense fallback={<CharacterSkeleton />}>
            <CharacterSummary />
        </Suspense>

        <Suspense fallback={<EpisodesSkeleton />}>
            <EpisodeList />
        </Suspense>
    </main>
  );
}