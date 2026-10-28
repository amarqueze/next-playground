
function SkeletonLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-4 rounded bg-gray-300 ${className}`}
    />
  );
}

export function CharacterSkeleton() {
  return (
    <section
      aria-label="Loading character"
      className="animate-pulse space-y-3 rounded border p-4"
    >
      <SkeletonLine className="h-6 w-32" />
      <SkeletonLine className="w-48" />
      <SkeletonLine className="w-28" />
    </section>
  );
}

export function EpisodesSkeleton() {
  return (
    <section
      aria-label="Loading episodes"
      className="animate-pulse space-y-3 rounded border p-4"
    >
      <SkeletonLine className="h-6 w-32" />

      {[1, 2, 3].map(item => (
        <SkeletonLine key={item} className="w-48" />
      ))}
    </section>
  );
}