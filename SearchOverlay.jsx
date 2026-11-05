import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { searchIndex } from "@/content/searchIndex";
import { navigationCategories } from "@/content/categories";
import { useArchive } from "@/lib/archive-context";

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useArchive();
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (!searchOpen) return undefined;
    setQuery("");
    const timer = setTimeout(() => inputRef.current?.focus(), 60);
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [searchOpen, setSearchOpen]);

  const results = useMemo(() => {
    const cleaned = query.trim().toLowerCase();
    if (cleaned.length < 2) return [];
    const terms = cleaned.split(/\s+/);
    return searchIndex
      .map((entry) => {
        const haystack = `${entry.title} ${entry.category} ${entry.snippet}`.toLowerCase();
        const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0);
        return { entry, score };
      })
      .filter((row) => row.score === terms.length)
      .slice(0, 14)
      .map((row) => row.entry);
  }, [query]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pb-8 pt-16 sm:pt-24">
      <div
        className="absolute inset-0 bg-foreground/45"
        onClick={() => setSearchOpen(false)}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the archive"
        className="relative w-full max-w-2xl border border-border bg-background shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search beliefs, practices, terms, passages…"
            className="w-full bg-transparent text-[0.95rem] text-foreground placeholder:text-muted-foreground focus:outline-none"
            aria-label="Search query"
          />
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center border border-border text-muted-foreground hover:text-primary"
            aria-label="Close search"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim().length < 2 ? (
            <div className="px-4 py-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Browse sections
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {navigationCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={category.path}
                    onClick={() => setSearchOpen(false)}
                    className="border border-border px-2.5 py-1 text-[0.8rem] text-foreground/80 hover:border-primary/40 hover:text-primary"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Type at least two characters. Results include articles, glossary terms, questions and
                scripture chapters.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-8 text-center">
              <p className="font-heading text-base text-foreground">No entries match “{query.trim()}”.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a broader term, or browse the glossary for spelling variants.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {results.map((entry) => (
                <li key={entry.id}>
                  <Link
                    to={entry.to}
                    onClick={() => setSearchOpen(false)}
                    className="block px-4 py-3 transition-colors hover:bg-secondary/60"
                  >
                    <div className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      <span>{entry.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-primary/70">{entry.kind}</span>
                    </div>
                    <p className="mt-1 font-heading text-[0.98rem] leading-snug text-foreground">{entry.title}</p>
                    <p className="mt-1 line-clamp-2 text-[0.82rem] leading-relaxed text-muted-foreground">
                      {entry.snippet}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border bg-secondary/60 px-4 py-2 text-[0.7rem] text-muted-foreground">
          Press <kbd className="border border-border bg-background px-1">Esc</kbd> to close
        </div>
      </div>
    </div>
  );
}