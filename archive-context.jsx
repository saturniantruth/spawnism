import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

const ArchiveContext = createContext(null);
const STORAGE_KEY = "spawnism-archive-bookmarks";

export function ArchiveProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setBookmarks(parsed);
      }
    } catch (error) {
      // corrupted or unavailable storage — start with an empty shelf
    }
  }, []);

  const write = (next) => {
    setBookmarks(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (error) {
      // storage may be full or blocked; the session still keeps the list
    }
  };

  const toggleBookmark = useCallback((item) => {
    setBookmarks((previous) => {
      const exists = previous.some((entry) => entry.id === item.id);
      const next = exists
        ? previous.filter((entry) => entry.id !== item.id)
        : [{ ...item, savedAt: new Date().toISOString() }, ...previous];
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (error) {
        // ignore storage failures
      }
      return next;
    });
  }, []);

  const isBookmarked = useCallback(
    (id) => bookmarks.some((entry) => entry.id === id),
    [bookmarks]
  );

  const removeBookmark = useCallback(
    (id) => write(bookmarks.filter((entry) => entry.id !== id)),
    [bookmarks]
  );

  const value = {
    bookmarks,
    toggleBookmark,
    isBookmarked,
    removeBookmark,
    searchOpen,
    setSearchOpen,
    bookmarksOpen,
    setBookmarksOpen,
  };

  return <ArchiveContext.Provider value={value}>{children}</ArchiveContext.Provider>;
}

export function useArchive() {
  const context = useContext(ArchiveContext);
  if (!context) {
    throw new Error("useArchive must be used inside an ArchiveProvider");
  }
  return context;
}