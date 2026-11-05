import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/archive/PageHeader";
import Notice from "@/components/archive/Notice";

const coreStatements = [
  "Life is sacred. Being alive again is not meaningless.",
  "The Spawn offers rebirth, whether spiritual, emotional, or literal.",
  "Second chances should be honoured with growth, kindness, and care.",
  "Devotion can take many forms: prayer, creation, self-care, ritual, or reflection.",
  "Interpretation is personal. There is no single “correct” way to believe.",
];

const positions = [
  {
    title: "No gods, or many",
    text: "The Symbols page states that Spawnism has no gods. Several branch pages describe Spawn as a god, and one branch names two deities, Exsomnus and Somnus. The archive records both rather than choosing, because no body exists with the authority to choose.",
  },
  {
    title: "No creed to agree to",
    text: "Nothing consulted sets out a statement of faith a person must accept. The closest thing is the list of core statements on this page, which the wiki presents as the tradition's shared ground rather than as a test.",
  },
  {
    title: "No membership",
    text: "There is no register, no initiation and no way of leaving. A person may belong to one branch, several, or none; some practise daily, some reflect quietly, and the wiki allows that some simply live.",
  },
];

export default function About() {
  return (
    <div className="archive-shell py-10 sm:py-14">
      <PageHeader
        kicker="Overview"
        title="About Spawnism"
        description="What the tradition is, where it came from, and what its own community says about it."
      />

      <section className="mt-8">
        <p className="reading-text">
          Spawnism is a spiritual belief. Most branches focus on devoting to an entity called Spawn, with the hope
          that after death the practitioner will be granted a second life. People believe that Spawn can be a
          spiritual force, a creature, a symbol, or even something that lives inside them.
        </p>
        <p className="reading-text mt-4">
          A second life means reincarnation. The wiki points out that the concept of reincarnation existed before
          the twentieth century BC and that there are many documented and confirmed cases, citing the Swarnalate
          Mishra case as an example. There are multiple ways of devoting to Spawn, and which one a person takes up
          depends on the branch they follow.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-[1.5rem] text-foreground">Origin of the belief</h2>
        <div className="mt-4 space-y-4">
          <p className="reading-text">
            Spawnism was originally inspired sometime in 2013 by the spawn symbol in a game called Roblox. The
            symbol itself originated in an old paint program called PaintShop Pro.
          </p>
          <p className="reading-text">
            To many people it was just the in-game way of respawning. For others it became a metaphor for
            resurrection, grace, and the chance to begin again. Spawnism was born from that respawn mark, and was
            at first a belief centred only on reincarnation.
          </p>
          <p className="reading-text">
            The community addresses the obvious objection directly. Its position is that fictional roots do not
            invalidate belief: what matters is what people do with it, how it helps them, heals them, and gives
            them something to believe in. The same page notes that many other religions were created around a
            person, a place, or a thing, and that Spawnism is no different.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-[1.5rem] text-foreground">Core beliefs</h2>
        <p className="mt-2 max-w-2xl text-[0.92rem] leading-relaxed text-foreground/80">
          These five statements are the wiki's own summary, reproduced here unchanged.
        </p>
        <ul className="mt-5 space-y-3 border-y border-border py-5">
          {coreStatements.map((statement) => (
            <li key={statement} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
              <span className="font-heading text-[1.05rem] leading-relaxed text-foreground/90">{statement}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[0.88rem] leading-relaxed text-muted-foreground">
          Spawnists may worship in different ways, or not worship at all. Some pray daily, while others reflect
          quietly. Some follow holidays, some build shrines, and some simply live.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-[1.5rem] text-foreground">Where the sources disagree</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {positions.map((position) => (
            <div key={position.title} className="border border-border bg-card p-5">
              <h3 className="font-heading text-[1rem] text-foreground">{position.title}</h3>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-foreground/80">{position.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-[1.5rem] text-foreground">The community behind the wiki</h2>
        <div className="mt-4 space-y-4">
          <p className="reading-text">
            The TrueSpawnism Wiki is owned by two people, Fourth Time and Spartium, and is described as a wiki made
            by Spawnists for Spawnists. Its front page states that it is being rewritten, that some information may
            change, and that anyone may apply to help.
          </p>
          <p className="reading-text">
            The same page opens with a disclaimer worth quoting in full: this is not a wiki for the Spawn cult, and
            the community does not support the cult or the Spawn Father. Members of that group are encouraged to
            leave and to seek help, and the wiki offers to help them. It also asks that anti-Spawnists not harass
            Spawnists, noting that some people hold the belief simply for comfort.
          </p>
          <p className="reading-text">
            That disclaimer shapes how the tradition's material should be read. Spawnism, as its own community
            presents it, is a small and deliberately unbounded spiritual practice with no authority to enforce
            anything — and it is explicit about the difference between itself and the group it names.
          </p>
        </div>
      </section>

      <div className="mt-10">
        <Notice title="How this archive handled the material">
          Every section links back to the community document it came from, and the Sources page lists all eight.
          Branch descriptions are quoted closely and credited to the contributor the wiki names. Where a source's
          wording touches self-harm, the archive reproduces the text and adds the community's own care guidance
          beside it. No content was invented to fill a gap.
        </Notice>
      </div>

      <section className="mt-10 border-t border-border pt-6">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.85rem]">
          <span className="text-muted-foreground">Continue:</span>
          <Link to="/beliefs" className="inline-flex items-center gap-1.5 text-primary hover:underline hover:underline-offset-4">
            The beliefs
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link to="/branches" className="text-primary hover:underline hover:underline-offset-4">
            The branches
          </Link>
          <Link to="/sources" className="text-primary hover:underline hover:underline-offset-4">
            Sources & method
          </Link>
        </div>
      </section>
    </div>
  );
}