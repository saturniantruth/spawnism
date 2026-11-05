import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { articleIndex } from "@/content/categories";

export default function RelatedArticles({ ids = [], heading = "Related entries" }) {
  const entries = ids.map((id) => articleIndex[id]).filter(Boolean);

  if (entries.length === 0) return null;

  return (
    <aside className="mt-8 border-t border-dashed border-border pt-5">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{heading}</p>
      <ul className="mt-3 space-y-2">
        {entries.map((entry) => (
          <li key={entry.id}>
            <Link
              to={entry.href}
              className="group inline-flex items-baseline gap-1.5 text-[0.92rem] text-primary hover:underline hover:underline-offset-4"
            >
              <span className="font-heading">{entry.title}</span>
              <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground">
                {entry.categoryTitle}
              </span>
              <ArrowUpRight className="h-3 w-3 self-center opacity-60" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}