import React from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useArchive } from "@/lib/archive-context";
import { cn } from "@/lib/utils";

export default function BookmarkButton({ item, label = true, className }) {
  const { isBookmarked, toggleBookmark } = useArchive();
  const saved = isBookmarked(item.id);

  return (
    <button
      type="button"
      onClick={() => toggleBookmark(item)}
      aria-pressed={saved}
      aria-label={saved ? `Remove bookmark: ${item.title}` : `Bookmark: ${item.title}`}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] transition-colors",
        saved
          ? "border-primary/40 bg-primary/10 text-primary"
          : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary",
        className
      )}
    >
      {saved ? <BookmarkCheck className="h-3.5 w-3.5" aria-hidden="true" /> : <Bookmark className="h-3.5 w-3.5" aria-hidden="true" />}
      {label ? (saved ? "Saved" : "Bookmark") : null}
    </button>
  );
}