import { Fragment, type ReactNode } from "react";

// Minimal allow-listed inline formatter for content strings authored in
// `src/content.ts`. Supports <em>…</em> and <strong>…</strong> only; everything
// else is rendered as plain text. Avoids dangerouslySetInnerHTML.
const TAG_PATTERN = /<(em|strong)>([\s\S]*?)<\/\1>/gi;

export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  TAG_PATTERN.lastIndex = 0;
  while ((match = TAG_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const tag = match[1].toLowerCase();
    const inner = match[2];
    nodes.push(
      tag === "em" ? <em key={match.index}>{inner}</em> : <strong key={match.index}>{inner}</strong>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return (
    <>
      {nodes.map((n, i) => (
        <Fragment key={i}>{n}</Fragment>
      ))}
    </>
  );
}
