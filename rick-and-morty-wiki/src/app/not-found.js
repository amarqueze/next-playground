import Link from "next/link";

export default function GuideNotFound() {
  return (
    <section>
      <h1>404 Not found</h1>
      <p>The requested guide does not exist.</p>

      <Link href="/guide/characters">
        Read the characters guide
      </Link>
    </section>
  );
}