import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProvenanceBadge from "./ProvenanceBadge";

export default function ArticleCard({ title, summary, to, category, status, compact = false }) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="flex items-center justify-between gap-3">
        {category ? (
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {category}
          </span>
        ) : (
          <span />
        )}
        {status ? <ProvenanceBadge status={status} className="shrink-0" /> : null}
      </div>
      <h3 className="mt-3 font-heading text-lg leading-snug text-foreground group-hover:text-primary">
        {title}
      </h3>
      {!compact && summary ? (
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{summary}</p>
      ) : null}
      <span className="mt-4 inline-flex items-center gap-1.5 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-primary">
        Read entry
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}