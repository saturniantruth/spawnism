import React from "react";
import { Link } from "react-router-dom";
import { categoryById } from "@/content/categories";
import { provenanceOrder, provenance } from "@/content/provenance";
import PageHeader from "./PageHeader";
import Notice from "./Notice";
import ArticleSection from "./ArticleSection";

export default function CategoryPage({ categoryId }) {
  const category = categoryById[categoryId];

  if (!category) {
    return <p className="p-10">This section is not catalogued.</p>;
  }

  return (
    <div className="archive-shell py-10 sm:py-14">
      <PageHeader kicker={category.kicker} title={category.title} description={category.blurb}>
        <p className="max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">{category.intro}</p>
      </PageHeader>

      <div className="mt-6">
        <Notice title="How to read these entries">
          Every entry carries a label describing the strength of its evidence —{" "}
          {provenanceOrder.map((key, index) => (
            <span key={key}>
              <span className="font-medium text-foreground">{provenance[key].label.toLowerCase()}</span>
              {index < provenanceOrder.length - 2 ? ", " : index === provenanceOrder.length - 2 ? " or " : "."}
            </span>
          ))}{" "}
          <Link to="/sources" className="text-primary underline decoration-primary/40 underline-offset-4">
            The sources page
          </Link>{" "}
          explains what each means.
        </Notice>
      </div>

      <nav aria-label="On this page" className="mt-8 border border-border bg-card p-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          On this page
        </p>
        <ol className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
          {category.articles.map((article, index) => (
            <li key={article.slug} className="flex gap-2 text-sm">
              <span className="w-5 shrink-0 text-right text-muted-foreground">{index + 1}.</span>
              <a
                href={`#${article.slug}`}
                className="text-foreground/85 hover:text-primary hover:underline hover:underline-offset-4"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 space-y-12">
        {category.articles.map((article) => (
          <ArticleSection
            key={article.slug}
            article={{ ...article, id: `${category.id}/${article.slug}`, categoryTitle: category.title }}
          />
        ))}
      </div>
    </div>
  );
}