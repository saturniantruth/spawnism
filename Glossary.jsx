import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { glossary } from "@/content/glossary";
import PageHeader from "@/components/archive/PageHeader";
import ProvenanceBadge from "@/components/archive/ProvenanceBadge";
import Notice from "@/components/archive/Notice";
import { cn } from "@/lib/utils";

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
const letters = [...new Set(sorted.map((entry) => entry.term[0].toUpperCase()))];

export default function Glossary() {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("All");

  const filtered = useMemo(() => {
    const cleaned = query.trim().toLowerCase();
    return sorted.filter((entry) => {
      const matchesLetter = letter === "All" || entry.term[0].toUpperCase() === letter;
      if (!matchesLetter) return false;
      if (!cleaned) return true;
      return `${entry.term} ${entry.definition}`.toLowerCase().includes(cleaned);
    });
  }, [query, letter]);

  const isFiltered = query.trim().length > 0 || letter !== "All";

  return (
    <div className="archive-shell py-10 sm:py-14">
      <PageHeader
        kicker="Reference"
        title="Glossary"
        description="The vocabulary of the tradition — Spawn Point, sigil, vessel, Somnus, hoard — and where each word comes from."
      />

      <div className="mt-6">
        <Notice title="Definitions follow the sources">
          Each term is defined as the community's own pages use it, and the entry is labelled accordingly.
          Spellings differ between sources — Exsomnus and Exsomnis are the same figure — and a word used one way
          in a Caelestia Numina circle may carry a different weight in a Self-Spawn reading.
        </Notice>
      </div>

      <div className="mt-8 border border-border bg-card p-4">
        <div className="flex items-center gap-2 border border-border bg-background px-3 py-2">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter terms and definitions…"
            aria-label="Filter glossary terms"
            className="w-full bg-transparent text-[0.9rem] text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          {query ? (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear filter" className="text-muted-foreground hover:text-primary">
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {["All", ...letters].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setLetter(option)}
              className={cn(
                "min-w-7 border px-1.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.08em] transition-colors",
                letter === option
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary"
              )}
            >
              {option}
            </button>
          ))}
        </div>

        <p className="mt-3 text-[0.72rem] uppercase tracking-[0.12em] text-muted-foreground">
          {filtered.length} of {sorted.length} terms shown
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 border border-dashed border-border px-5 py-10 text-center">
          <p className="font-heading text-base text-foreground">No terms match that filter.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a shorter word, or{" "}
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setLetter("All");
              }}
              className="text-primary underline underline-offset-4"
            >
              clear the filters
            </button>
            .
          </p>
        </div>
      ) : (
        <dl className="mt-6 divide-y divide-border border-y border-border">
          {filtered.map((entry) => (
            <div key={entry.term} id={`term-${slugify(entry.term)}`} className="scroll-mt-24 py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <dt className="font-heading text-[1.1rem] text-foreground">{entry.term}</dt>
                <ProvenanceBadge status={entry.status} />
              </div>
              <dd className="mt-2 text-[0.92rem] leading-relaxed text-foreground/80">{entry.definition}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.82rem] text-muted-foreground">
        <span>Related:</span>
        <Link to="/faq" className="text-primary hover:underline hover:underline-offset-4">
          Frequently asked questions
        </Link>
        <Link to="/sources" className="text-primary hover:underline hover:underline-offset-4">
          Editorial method
        </Link>
        <Link to="/beliefs" className="text-primary hover:underline hover:underline-offset-4">
          Beliefs
        </Link>
      </div>
      {isFiltered ? <span className="sr-only">Filters are active</span> : null}
    </div>
  );
}