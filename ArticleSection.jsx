import React from "react";
import ProvenanceBadge from "./ProvenanceBadge";
import BookmarkButton from "./BookmarkButton";
import RelatedArticles from "./RelatedArticles";

export default function ArticleSection({ article }) {
  const bookmarkItem = {
    id: article.id,
    title: article.title,
    subtitle: article.categoryTitle,
    to: article.href,
    type: "Entry",
  };

  return (
    <section id={article.slug} className="scroll-mt-24 border-t border-border pt-9 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-center gap-2">
        <ProvenanceBadge status={article.status} />
        <BookmarkButton item={bookmarkItem} />
      </div>

      <h2 className="mt-4 font-heading text-[1.6rem] leading-tight text-foreground sm:text-[1.8rem]">
        {article.title}
      </h2>
      <p className="mt-2 font-heading text-[1.05rem] italic leading-relaxed text-muted-foreground">
        {article.summary}
      </p>

      {article.details ? (
        <dl className="mt-5 grid gap-x-8 gap-y-3 border-y border-border bg-secondary/40 px-4 py-4 sm:grid-cols-2 sm:px-5">
          {article.details.map((detail) => (
            <div key={detail.label}>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {detail.label}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-foreground/85">{detail.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="reading-text mt-5">
        {article.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {article.lines ? (
        <blockquote className="mt-6 border-l-2 border-primary pl-5 font-heading text-[1.05rem] leading-[1.9] text-foreground/90">
          {article.lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          {article.linesNote ? (
            <footer className="mt-3 font-body text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
              {article.linesNote}
            </footer>
          ) : null}
        </blockquote>
      ) : null}

      <RelatedArticles ids={article.related} />
    </section>
  );
}