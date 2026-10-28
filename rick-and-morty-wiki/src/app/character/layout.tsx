// src/app/character/layout.tsx
import type { ReactNode } from "react";
import Link from "next/link";

export default function CharacterLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section>
      <h1>Characters</h1>

      <nav>
        <Link href="/episodes">show Episodes</Link>
      </nav>

      {children}
    </section>
  );
}