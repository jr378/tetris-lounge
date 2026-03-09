import Link from "next/link";

interface ActCrossLinkProps {
  currentAct: "tetris" | "nowhere";
}

export function ActCrossLink({ currentAct }: ActCrossLinkProps) {
  const other =
    currentAct === "tetris"
      ? { name: "Nowhere Men", href: "/nowhere-men" }
      : { name: "Tetris Lounge", href: "/tetris-lounge" };

  return (
    <div className="bg-ink text-text-on-ink/70 text-sm text-center py-2 px-4">
      Looking for the other show?{" "}
      <Link
        href={other.href}
        className="text-text-on-ink hover:underline decoration-accent underline-offset-2 font-medium"
      >
        {other.name} &rarr;
      </Link>
    </div>
  );
}
