import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom"
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SidebarNav from "./SidebarNav";
import SearchOverlay from "./SearchOverlay";
import BookmarksPanel from "./BookmarksPanel";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 90);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
    return undefined;
  }, [location.pathname, location.hash, location.key]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <div className="mx-auto flex w-full max-w-[1280px] flex-1 items-start">
        <aside className="sticky top-[3.8125rem] hidden max-h-[calc(100vh-3.8125rem)] w-[16.5rem] shrink-0 overflow-y-auto border-r border-border px-5 py-8 lg:block">
          <SidebarNav />
          <div className="mt-8 border-t border-border pt-5">
            <p className="text-[0.68rem] leading-relaxed text-muted-foreground">
              Entries are labelled by evidence. Read the{" "}
              <Link to="/sources" className="text-primary underline decoration-primary/40 underline-offset-4">
                editorial method
              </Link>
              .
            </p>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>

      <SiteFooter />
      <SearchOverlay />
      <BookmarksPanel />
    </div>
  );
}