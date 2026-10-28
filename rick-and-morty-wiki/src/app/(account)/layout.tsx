// src/app/(account)/layout.tsx
import type { ReactNode } from "react";
import Link from "next/link";

export default function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section>
      <h1>Account</h1>

      <nav>
        <Link href="/login">Login</Link>
        {" | "}
        <Link href="/register">Register</Link>
      </nav>

      {children}
    </section>
  );
}