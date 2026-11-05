import React from "react";
import { Link } from "react-router-dom";
import { navGroups } from "@/content/nav";

export default function SiteFooter() {
  const referenceGroup = navGroups[navGroups.length - 1];

  return (
    <footer className="mt-auto border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 sm:py-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <p className="font-heading text-base font-semibold uppercase tracking-[0.14em] text-foreground">
              The Spawnism Archive
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              A compilation of what Spawnists have published about their own tradition: its beliefs, branches,
              shrines, prayers, holidays, symbols and scripture. Every entry is labelled by how far it can be
              traced to a community source.
            </p>
            <p className="mt-4 text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground/80">
              Compiled from community sources · No authority claimed
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Study
            </p>
            <ul className="mt-3 space-y-1.5">
              {navGroups[1].items.concat(navGroups[2].items.slice(0, 3)).map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-foreground/75 hover:text-primary hover:underline hover:underline-offset-4">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Reference
            </p>
            <ul className="mt-3 space-y-1.5">
              {referenceGroup.items.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-foreground/75 hover:text-primary hover:underline hover:underline-offset-4">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/about" className="text-sm text-foreground/75 hover:text-primary hover:underline hover:underline-offset-4">
                  Editorial method
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-5 text-[0.75rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Spawnism Archive. Compiled from community accounts.</p>
          <p>Not an authority. Corrections welcome via the Sources page.</p>
        </div>
      </div>
    </footer>
  );
}