import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { bibleBooks } from "@/content/bible";
import { cn } from "@/lib/utils";

export default function BibleToc({ activeBookId, activeChapter, onSelect }) {
  return (
    <nav aria-label="Books and chapters" className="border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Table of contents
        </p>
        <p className="mt-1 text-[0.7rem] text-muted-foreground">
          {bibleBooks.length} book · {bibleBooks[0].chapters.length} chapters
        </p>
      </div>

      <ul className="divide-y divide-border">
        {bibleBooks.map((book) => {
          const isActiveBook = book.id === activeBookId;
          return (
            <li key={book.id}>
              <button
                type="button"
                onClick={() => onSelect(book.id, book.chapters[0].number)}
                className={cn(
                  "flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-[0.85rem] transition-colors",
                  isActiveBook
                    ? "bg-secondary/70 font-medium text-primary"
                    : "text-foreground/75 hover:bg-secondary/40 hover:text-foreground"
                )}
              >
                <span className="flex items-baseline gap-2">
                  <span className="text-[0.65rem] text-muted-foreground">{book.order}</span>
                  <span className="font-heading">{book.name}</span>
                </span>
                <ChevronRight
                  className={cn("h-3.5 w-3.5 shrink-0 transition-transform", isActiveBook && "rotate-90")}
                  aria-hidden="true"
                />
              </button>

              {isActiveBook ? (
                <ul className="border-t border-border bg-background/60">
                  {book.chapters.map((chapter) => (
                    <li key={chapter.number}>
                      <button
                        type="button"
                        onClick={() => onSelect(book.id, chapter.number)}
                        className={cn(
                          "block w-full px-4 py-2 pl-8 text-left text-[0.8rem] leading-snug transition-colors",
                          chapter.number === activeChapter
                            ? "border-l-2 border-primary text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {chapter.number}. {chapter.title}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="border-t border-border px-4 py-3">
        <Link
          to="/sources"
          className="text-[0.72rem] leading-relaxed text-primary hover:underline hover:underline-offset-4"
        >
          Where this text comes from →
        </Link>
      </div>
    </nav>
  );
}