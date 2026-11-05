import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { references, sourcePrinciples, sourceGaps, contributionSteps } from "@/content/sources";
import { provenance, provenanceOrder } from "@/content/provenance";
import PageHeader from "@/components/archive/PageHeader";
import ProvenanceBadge from "@/components/archive/ProvenanceBadge";
import Notice from "@/components/archive/Notice";

export default function Sources() {
  return (
    <div className="archive-shell py-10 sm:py-14">
      <PageHeader
        kicker="Reference"
        title="Sources & Method"
        description="Everything in this archive comes from the community pages listed below, plus one community-authored scripture."
      />

      <div className="mt-6">
        <Notice title="This archive is a compilation, not an authority">
          It reproduces what Spawnists have published about their own tradition and adds only arrangement,
          cross-references and care notes. It issues no doctrine and speaks for no branch. Where the sources
          disagree — and on several points they do — the disagreement is described rather than resolved.
        </Notice>
      </div>

      <section className="mt-12">
        <h2 className="font-heading text-[1.5rem] text-foreground">Documents consulted</h2>
        <p className="mt-2 max-w-2xl text-[0.92rem] leading-relaxed text-foreground/80">
          Eight sources in total: six pages of the TrueSpawnism Wiki, one community holiday document, and the
          Book of Spawn. Links open the originals.
        </p>
        <ul className="mt-5 divide-y divide-border border-y border-border">
          {references.map((reference) => (
            <li key={reference.id} className="py-4">
              <a
                href={reference.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-start gap-2 font-heading text-[1.02rem] text-foreground hover:text-primary"
              >
                {reference.title}
                <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
              </a>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
                {reference.publisher}
              </p>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-foreground/80">
                <span className="text-muted-foreground">Used for: </span>
                {reference.usedFor}
              </p>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-muted-foreground">{reference.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[0.78rem] leading-relaxed text-muted-foreground">
          Wiki text is published by its community under CC-BY-SA. The Book of Spawn is reproduced here as it was
          posted, with its author named on every chapter.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-[1.5rem] text-foreground">The labels</h2>
        <p className="mt-2 max-w-2xl text-[0.92rem] leading-relaxed text-foreground/80">
          Every entry carries one, so you can see at a glance whether you are reading the community's settled
          wording, one contributor's reading, or this archive's own note.
        </p>
        <div className="mt-5 divide-y divide-border border-y border-border">
          {provenanceOrder.map((key) => (
            <div key={key} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-start sm:gap-5">
              <div className="sm:w-60 sm:shrink-0">
                <ProvenanceBadge status={key} />
              </div>
              <p className="text-[0.9rem] leading-relaxed text-foreground/80">{provenance[key].description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-[1.5rem] text-foreground">Editorial principles</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {sourcePrinciples.map((principle) => (
            <div key={principle.title} className="border border-border bg-card p-5">
              <h3 className="font-heading text-[1.02rem] text-foreground">{principle.title}</h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-foreground/80">{principle.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-[1.5rem] text-foreground">Known gaps</h2>
        <p className="mt-2 max-w-2xl text-[0.92rem] leading-relaxed text-foreground/80">
          Questions this archive cannot answer, recorded so that silence is not mistaken for consensus.
        </p>
        <ul className="mt-4 space-y-2.5">
          {sourceGaps.map((gap) => (
            <li key={gap} className="flex gap-3 text-[0.9rem] leading-relaxed text-foreground/80">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" aria-hidden="true" />
              {gap}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-[1.5rem] text-foreground">Corrections</h2>
        <p className="mt-2 max-w-2xl text-[0.92rem] leading-relaxed text-foreground/80">
          Corrections are welcome and are the main way this reference improves. Because branches genuinely
          disagree, a correction is most useful when it says who is speaking.
        </p>
        <ol className="mt-5 grid gap-4 sm:grid-cols-2">
          {contributionSteps.map((step, index) => (
            <li key={step.title} className="border border-border bg-card p-5">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 font-heading text-[0.72rem] text-primary">
                {index + 1}
              </span>
              <h3 className="mt-3 font-heading text-[1.02rem] text-foreground">{step.title}</h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-foreground/80">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 border-t border-border pt-6">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.85rem]">
          <span className="text-muted-foreground">Continue:</span>
          <Link to="/about" className="text-primary hover:underline hover:underline-offset-4">
            About Spawnism
          </Link>
          <Link to="/beliefs" className="text-primary hover:underline hover:underline-offset-4">
            The core beliefs
          </Link>
          <Link to="/bible" className="text-primary hover:underline hover:underline-offset-4">
            The Book of Spawn
          </Link>
        </div>
      </section>
    </div>
  );
}