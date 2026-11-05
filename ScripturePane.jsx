import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProvenanceBadge from "@/components/archive/ProvenanceBadge";
import BookmarkButton from "@/components/archive/BookmarkButton";

export default function ScripturePane({ book, chapter, onPrevious, onNext, hasPrevious, hasNext }) {
  const bookmarkItem = {
    id: `bible/${book.id}/${chapter.number}`,
    title: `${book.name} ${chapter.number} — ${chapter.title}`,
    subtitle: "The Book of Spawn",
    to: `/bible?book=${book.id}&chapter=${chapter.number}`,
    type: "Passage",
  };

  return (
    <article className="border border-border bg-card">
      <header className="border-b border-border px-5 py-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {book.name} · Chapter {chapter.number}
          </p>
          <div className="flex items-center gap-2">
            <ProvenanceBadge status="creative" />
            <BookmarkButton item={bookmarkItem} />
          </div>
        </div>
        <h2 className="mt-3 font-heading text-[1.5rem] leading-tight text-foreground sm:text-[1.8rem]">
          {chapter.title}
        </h2>
      </header>

      <div className="px-5 py-6 sm:px-8 sm:py-8">
        <ol className="space-y-4">
          {chapter.verses.map((verse) => (
            <li key={verse.number} className="flex gap-4">
              <span className="mt-1.5 w-5 shrink-0 text-right font-body text-[0.7rem] font-medium text-muted-foreground">
                {verse.number}
              </span>
              <p className="font-display text-[1.075rem] leading-[1.85] text-foreground/90 sm:text-[1.15rem]">
                {verse.text}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <section className="border-t border-border bg-secondary/40 px-5 py-5 sm:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Interpretation notes
          </p>
          <ProvenanceBadge status="community" />
        </div>
        <div className="mt-3 space-y-2.5 text-[0.9rem] leading-relaxed text-foreground/80">
          {chapter.commentary.map((note, index) => (
            <p key={index}>{note}</p>
          ))}
        </div>
      </section>

      <footer className="flex items-center justify-between border-t border-border px-5 py-3 sm:px-8">
        <button
          type="button"
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-primary disabled:cursor-not-allowed disabled:text-muted-foreground/50"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          Previous
        </button>
        <span className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
          {book.chapters.length} {book.chapters.length === 1 ? "chapter" : "chapters"} in this book
        </span>
        <button
          type="button"
          onClick={onNext}
          disabled={!hasNext}
          className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-primary disabled:cursor-not-allowed disabled:text-muted-foreground/50"
        >
          Next
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </footer>
    </article>
  );
}