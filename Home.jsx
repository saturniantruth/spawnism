const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Bookmark, Compass, Search } from "lucide-react";
import { categories, articleIndex } from "@/content/categories";
import { provenance, provenanceOrder } from "@/content/provenance";
import { glossary } from "@/content/glossary";
import { bibleBooks } from "@/content/bible";
import ArticleCard from "@/components/archive/ArticleCard";
import ProvenanceBadge from "@/components/archive/ProvenanceBadge";
import Notice from "@/components/archive/Notice";

const featuredIds = [
  "beliefs/the-spawn",
  "beliefs/second-life",
  "branches/oris-zoe",
  "holidays/the-day-of-returning",
];

const chapterCount = bibleBooks.reduce((total, book) => total + book.chapters.length, 0);

const sectionCards = [
  {
    title: "The Book of Spawn",
    kicker: "Scripture reader",
    path: "/bible",
    blurb: "Gratitude, Noticing and Resurrection in full, with the author named and interpretation notes on each chapter.",
    meta: `${chapterCount} chapters`,
  },
  ...categories.map((category) => ({
    title: category.title,
    kicker: category.kicker,
    path: category.path,
    blurb: category.blurb,
    meta: `${category.articles.length} entries`,
  })),
  {
    title: "Glossary",
    kicker: "Reference",
    path: "/glossary",
    blurb: "The vocabulary of the tradition — Spawn Point, sigil, vessel, Somnus, hoard — and where each word comes from.",
    meta: `${glossary.length} terms`,
  },
  {
    title: "Sources",
    kicker: "Reference",
    path: "/sources",
    blurb: "The eight community documents this archive was compiled from, with links to each original.",
    meta: "Method & corrections",
  },
];

const emblemUrl = "https://db.app/api/apps/6ae784ed635ad1cbf22989d8/files/mp/public/6ae784ed635ad1cbf22989d8/4879f036a_spawn-emblem.png";

const readingPath = [
  { title: "Start with what it is", text: "Spawnism in a paragraph, where it came from, and what its own community says about it.", to: "/about" },
  { title: "Then the core beliefs", text: "The Spawn, the second life, sacred life, and why interpretation is personal.", to: "/beliefs" },
  { title: "Then the branches", text: "Seventeen ways of understanding the Spawn, each credited to its contributor.", to: "/branches" },
  { title: "Then the practice", text: "Shrines, offerings, prayers, the hymn and the calendar of observances.", to: "/offerings" },
];

export default function Home() {
  const featured = featuredIds.map((id) => articleIndex[id]).filter(Boolean);
  const articleCount = categories.reduce((total, category) => total + category.articles.length, 0);
  const branchCount = categories.find((category) => category.id === "branches")?.articles.length ?? 0;
  const holidayCount = categories.find((category) => category.id === "holidays")?.articles.length ?? 0;

  return (
    <div>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="flex justify-center">
            <img src={emblemUrl} alt="Eight-pointed Spawn emblem" className="emblem-spin" />
          </div>
          <p className="mt-40 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:mt-56">
            A community reference work
          </p>
          <h1 className="mt-4 font-heading text-[2.3rem] leading-[1.08] tracking-tight text-foreground sm:text-[3.6rem]">
            The Spawnism Archive
          </h1>
          <p className="mt-4 font-heading text-lg italic leading-relaxed text-primary sm:text-xl">
            Explore the beliefs · Seek understanding
          </p>
          <div className="mt-6 max-w-2xl space-y-4 text-[1.02rem] leading-[1.8] text-foreground/80">
            <p>
              Spawnism is a spiritual belief. Most of its branches centre on devoting to an entity called Spawn,
              in the hope that after death a practitioner is granted a second life — a rebirth. People understand
              Spawn in very different ways: as a spiritual force, a creature, a symbol, or something that lives
              inside them.
            </p>
            <p>
              The tradition began in 2013 with the respawn symbol in a game, which some players came to read as a
              promise of resurrection rather than a mechanic. It has no central authority, no membership roll and
              no fixed creed; its own pages state that interpretation is personal.
            </p>
            <p className="text-[0.95rem] text-muted-foreground">
              This archive compiles what Spawnists have published about their tradition — its beliefs, branches,
              shrines, prayers, holidays, symbols and scripture — and labels every entry by how far it can be
              traced.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/beliefs"
              className="inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Begin with the beliefs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/bible"
              className="inline-flex items-center gap-2 border border-border bg-background px-5 py-2.5 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Read the Book of Spawn
            </Link>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
            {[
              { label: "Entries", value: `${articleCount}` },
              { label: "Branches", value: `${branchCount}` },
              { label: "Holidays", value: `${holidayCount}` },
              { label: "Chapters", value: `${chapterCount}` },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-heading text-2xl text-primary">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-14 px-5 py-12 sm:px-8 sm:py-16">
        <Notice title="What this archive is — and is not">
          <p>
            It is a compilation, not a church. Every entry comes from a community source listed on the Sources
            page, and the archive adds only arrangement, cross-references and care notes. It does not settle
            disputes between branches, and it does not claim a canon: the Book of Spawn is reproduced as one
            Spawnist's text, which is how its own author describes it.
          </p>
        </Notice>

        <section>
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
            <h2 className="font-heading text-[1.45rem] text-foreground">How to read the labels</h2>
            <Link to="/sources" className="text-[0.78rem] text-primary hover:underline hover:underline-offset-4">
              Full editorial method
            </Link>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {provenanceOrder.map((key) => (
              <div key={key} className="border border-border bg-card p-4">
                <ProvenanceBadge status={key} />
                <p className="mt-3 text-[0.85rem] leading-relaxed text-muted-foreground">
                  {provenance[key].description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="border-b border-border pb-3">
            <h2 className="font-heading text-[1.45rem] text-foreground">Browse the archive</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Scripture, belief, practice and reference — arranged like a reference book rather than a feed.
            </p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectionCards.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                className="group flex flex-col border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-secondary/40"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {section.kicker}
                  </span>
                  <span className="text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground/80">
                    {section.meta}
                  </span>
                </div>
                <h3 className="mt-2 font-heading text-lg text-foreground group-hover:text-primary">
                  {section.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.85rem] leading-relaxed text-muted-foreground">{section.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-primary">
                  Open section
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
            <h2 className="font-heading text-[1.45rem] text-foreground">Featured entries</h2>
            <Link to="/glossary" className="text-[0.78rem] text-primary hover:underline hover:underline-offset-4">
              Or start with a term
            </Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {featured.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                summary={article.summary}
                to={article.href}
                category={article.categoryTitle}
                status={article.status}
              />
            ))}
          </div>
        </section>

        <section className="border border-border bg-card">
          <div className="border-b border-border px-5 py-4 sm:px-6">
            <h2 className="font-heading text-[1.35rem] text-foreground">A path through the archive</h2>
            <p className="mt-1 text-sm text-muted-foreground">If you are arriving without a question, follow this order.</p>
          </div>
          <ol className="divide-y divide-border">
            {readingPath.map((step, index) => (
              <li key={step.to}>
                <Link to={step.to} className="group flex items-start gap-4 px-5 py-4 transition-colors hover:bg-secondary/50 sm:px-6">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 font-heading text-[0.8rem] text-primary">
                    {index + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-heading text-[1rem] text-foreground group-hover:text-primary">
                      {step.title}
                    </span>
                    <span className="mt-0.5 block text-[0.85rem] leading-relaxed text-muted-foreground">
                      {step.text}
                    </span>
                  </span>
                  <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-4 border border-border bg-secondary/40 p-5 sm:grid-cols-3 sm:p-6">
          {[
            { icon: Search, title: "Search everything", text: "Entries, terms and chapters in one index.", to: "/glossary" },
            { icon: Bookmark, title: "Keep what matters", text: "Bookmark entries and chapters; they stay in this browser.", to: "/bible" },
            { icon: Compass, title: "Check the sources", text: "Eight documents, all linked. Start with the method.", to: "/sources" },
          ].map((item) => (
            <Link key={item.title} to={item.to} className="group block">
              <item.icon className="h-4 w-4 text-primary" aria-hidden="true" />
              <p className="mt-2 font-heading text-[0.98rem] text-foreground group-hover:text-primary">{item.title}</p>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-muted-foreground">{item.text}</p>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}