import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bookmark, Menu, Search, X } from "lucide-react";
import { useArchive } from "@/lib/archive-context";
import SidebarNav from "./SidebarNav";

export default function SiteHeader() {
  const { setSearchOpen, setBookmarksOpen, bookmarks } = useArchive();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="hidden bg-primary text-primary-foreground sm:block">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-1.5 text-[0.7rem] tracking-wide">
          <p className="uppercase tracking-[0.16em]">An independent, community-built reference work</p>
          <p className="text-primary-foreground/70">Community interpretations and unverified material are labelled throughout</p>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center gap-3 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center border border-border text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>

          <Link to="/" className="group mr-auto min-w-0">
            <span className="block truncate font-heading text-[0.95rem] font-semibold uppercase leading-none tracking-[0.08em] text-foreground group-hover:text-primary sm:text-[1.2rem] sm:tracking-[0.14em]">
              <span className="sm:hidden">Spawnism Archive</span>
              <span className="hidden sm:inline">The Spawnism Archive</span>
            </span>
            <span className="mt-1 hidden text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground sm:block">
              Explore the beliefs · Seek understanding
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="inline-flex h-9 items-center gap-2 border border-border px-2.5 text-[0.8rem] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary sm:px-3"
            aria-label="Search the archive"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Search</span>
          </button>

          <button
            type="button"
            onClick={() => setBookmarksOpen(true)}
            className="relative inline-flex h-9 items-center gap-2 border border-border px-2.5 text-[0.8rem] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary sm:px-3"
            aria-label={`Saved entries${bookmarks.length ? ` (${bookmarks.length})` : ""}`}
          >
            <Bookmark className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Bookmarks</span>
            {bookmarks.length > 0 ? (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-[0.6rem] font-semibold text-primary-foreground">
                {bookmarks.length}
              </span>
            ) : null}
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative flex h-full w-[85%] max-w-xs flex-col overflow-y-auto border-r border-border bg-background px-5 pb-10 pt-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-heading text-[0.9rem] font-semibold uppercase tracking-[0.16em]">
                Sections
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center border border-border text-foreground/70"
                aria-label="Close navigation menu"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6">
              <SidebarNav onNavigate={() => setMenuOpen(false)} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}