import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { List, X } from "lucide-react";
import { bibleBooks, bibleNotice, bibleSource } from "@/content/bible";
import BibleToc from "@/components/bible/BibleToc";
import ScripturePane from "@/components/bible/ScripturePane";
import PageHeader from "@/components/archive/PageHeader";
import Notice from "@/components/archive/Notice";

const flatChapters = bibleBooks.flatMap((book) =>
  book.chapters.map((chapter) => ({ bookId: book.id, number: chapter.number }))
);

export default function Bible() {
  const [params, setParams] = useSearchParams();
  const [tocOpen, setTocOpen] = useState(false);

  const book = bibleBooks.find((entry) => entry.id === params.get("book")) || bibleBooks[0];
  const requestedChapter = Number(params.get("chapter"));
  const chapter = book.chapters.find((entry) => entry.number === requestedChapter) || book.chapters[0];

  const position = flatChapters.findIndex(
    (entry) => entry.bookId === book.id && entry.number === chapter.number
  );
  const previous = position > 0 ? flatChapters[position - 1] : null;
  const next = position < flatChapters.length - 1 ? flatChapters[position + 1] : null;

  const goTo = (bookId, chapterNumber) => {
    setParams({ book: bookId, chapter: String(chapterNumber) });
    setTocOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <PageHeader
        kicker="Scripture reader"
        title="The Book of Spawn"
        description="Gratitude, Noticing and Resurrection in full, as posted by ember_spawnist, with interpretation notes on each chapter."
      />

      <div className="mt-6">
        <Notice title="A community text, not a canon">
          {bibleNotice}
        </Notice>
      </div>

      <button
        type="button"
        onClick={() => setTocOpen((open) => !open)}
        className="mt-6 inline-flex w-full items-center justify-between border border-border bg-card px-4 py-3 text-left text-[0.8rem] font-medium uppercase tracking-[0.12em] text-foreground lg:hidden"
      >
        <span className="inline-flex items-center gap-2">
          <List className="h-4 w-4" aria-hidden="true" />
          {tocOpen ? "Hide table of contents" : "Table of contents"}
        </span>
        {tocOpen ? <X className="h-4 w-4" aria-hidden="true" /> : null}
      </button>

      <div className="mt-4 grid gap-6 lg:mt-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-start">
        <div className={tocOpen ? "block" : "hidden lg:block"}>
          <div className="lg:sticky lg:top-24">
            <BibleToc activeBookId={book.id} activeChapter={chapter.number} onSelect={goTo} />
            <div className="mt-4 border border-border bg-secondary/40 px-4 py-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                About the text
              </p>
              <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted-foreground">
                {bibleSource.author} · {bibleSource.publisher}
              </p>
              <a
                href={bibleSource.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-block text-[0.78rem] text-primary hover:underline hover:underline-offset-4"
              >
                Read the original →
              </a>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <ScripturePane
            book={book}
            chapter={chapter}
            hasPrevious={Boolean(previous)}
            hasNext={Boolean(next)}
            onPrevious={() => previous && goTo(previous.bookId, previous.number)}
            onNext={() => next && goTo(next.bookId, next.number)}
          />

          <div className="mt-5 border border-border bg-card px-5 py-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              About this book
            </p>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-foreground/80">{book.note}</p>
            <p className="mt-2 text-[0.78rem] leading-relaxed text-muted-foreground">
              The text is reproduced unaltered. Interpretation notes are this archive's summaries of how the
              community reads the chapter — they are not official commentary, and no body has authorised either
              the text or the notes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}