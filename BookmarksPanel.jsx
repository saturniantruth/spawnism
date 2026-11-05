import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Bookmark, Trash2, X } from "lucide-react";
import { useArchive } from "@/lib/archive-context";

export default function BookmarksPanel() {
  const { bookmarks, bookmarksOpen, setBookmarksOpen, removeBookmark } = useArchive();

  useEffect(() => {
    if (!bookmarksOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setBookmarksOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [bookmarksOpen, setBookmarksOpen]);

  if (!bookmarksOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-foreground/45"
        onClick={() => setBookmarksOpen(false)}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Saved entries"
        className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-border bg-background shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <p className="font-heading text-base font-semibold text-foreground">Saved entries</p>
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
              {bookmarks.length} {bookmarks.length === 1 ? "item" : "items"} · stored in this browser
            </p>
          </div>
          <button
            type="button"
            onClick={() => setBookmarksOpen(false)}
            className="inline-flex h-8 w-8 items-center justify-center border border-border text-muted-foreground hover:text-primary"
            aria-label="Close saved entries"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {bookmarks.length === 0 ? (
            <div className="py-10 text-center">
              <Bookmark className="mx-auto h-6 w-6 text-muted-foreground" aria-hidden="true" />
              <p className="mt-3 font-heading text-[0.98rem] text-foreground">Nothing saved yet.</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Use the bookmark control on any entry or scripture chapter to keep it here.
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {bookmarks.map((item) => (
                <li key={item.id} className="border border-border bg-card p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {item.subtitle || item.type || "Entry"}
                      </p>
                      <Link
                        to={item.to}
                        onClick={() => setBookmarksOpen(false)}
                        className="mt-1 block font-heading text-[0.95rem] leading-snug text-foreground hover:text-primary hover:underline hover:underline-offset-4"
                      >
                        {item.title}
                      </Link>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeBookmark(item.id)}
                      className="shrink-0 p-1 text-muted-foreground hover:text-destructive"
                      aria-label={`Remove ${item.title} from bookmarks`}
                    >
                      <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-5 py-3 text-[0.7rem] leading-relaxed text-muted-foreground">
          Bookmarks are kept in this browser only. Clearing site data will remove them.
        </div>
      </aside>
    </div>
  );
}