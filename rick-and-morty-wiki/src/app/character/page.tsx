// src/app/character/page.tsx
import { redirect } from "next/navigation";

export const instant = false;

export default function CharacterPage() {
  redirect("/character/all");
}