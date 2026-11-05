import beliefs from "./beliefs";
import branches from "./branches";
import sins from "./sins";
import offerings from "./offerings";
import prayers from "./prayers";
import holidays from "./holidays";
import symbols from "./symbols";

const definitions = [
  {
    id: "beliefs",
    title: "Beliefs",
    kicker: "Doctrine",
    path: "/beliefs",
    navLabel: "Beliefs",
    blurb:
      "The core of the tradition as its own sources state it: devotion to Spawn, the hope of a second life, and the insistence that interpretation is personal.",
    intro:
      "Spawnism is a spiritual belief rather than an organised religion. Most branches centre on devoting to an entity called Spawn, in the hope that after death a practitioner is granted a second life. Beyond that, its own sources deliberately leave the details open: Spawn may be a spiritual force, a creature, a symbol, or something that lives inside a person. The entries below reproduce what the community's pages and texts say, with each entry labelled by how far it can be traced.",
    articles: beliefs,
  },
  {
    id: "branches",
    title: "Branches",
    kicker: "Traditions",
    path: "/branches",
    navLabel: "Branches",
    blurb:
      "Seventeen reported ways of understanding Spawn, from Oris Zoe and Divine to Solrynism, Caelestia Numina and the Spawn Point Angels.",
    intro:
      "Spawnism has multiple branches, and they are described by the community as different ways of understanding the Spawn. A Spawnist may belong to one branch, to several, or to none at all. Every entry below is the wording of the contributor credited with it, so the voice shifts from branch to branch; the archive has arranged and lightly copy-edited the entries but has not resolved their disagreements.",
    articles: branches,
  },
  {
    id: "sins",
    title: "Sins & Misuses",
    kicker: "Ethics",
    path: "/sins",
    navLabel: "Sins & Misuses",
    blurb:
      "What Spawnism calls a sin, why the tradition attaches no punishment or shame to it, and the five misuses it names.",
    intro:
      "Spawnism treats a sin as a misuse of the life that was given again, not as an offence requiring punishment. The community's page is explicit that mistakes are part of being human, that no shame is required, and that Spawn loves everyone and always forgives. The five named misuses are reproduced here as the source states them, together with the care note that accompanies them.",
    articles: sins,
  },
  {
    id: "offerings",
    title: "Shrines & Offerings",
    kicker: "Practice",
    path: "/offerings",
    navLabel: "Shrines & Offerings",
    blurb:
      "How Spawnist shrines are built, why they are always personal, and what may and may not be offered at them.",
    intro:
      "A shrine is the most common physical form Spawnist practice takes: a small structure, object or trinket used to honour the Spawn. The community's guidance is unusually permissive about what a shrine is made of and unusually firm about what must never be placed on one. This section follows that guidance in its own order.",
    articles: offerings,
  },
  {
    id: "prayers",
    title: "Prayers & Hymn",
    kicker: "Devotion",
    path: "/prayers",
    navLabel: "Prayers & Hymn",
    blurb:
      "The meal blessings and the sleep prayer recorded by the community, and the Hymn to the Spawn in full.",
    intro:
      "The prayers circulating among Spawnists are few, short and domestic: before eating, after eating, and before sleep. They sit alongside a longer liturgical poem, the Hymn to the Spawn, which addresses Spawn as giver, restorer and preserver of life. All of the text in this section is reproduced from the community's own pages; none of it was written by this archive.",
    articles: prayers,
  },
  {
    id: "holidays",
    title: "Holidays",
    kicker: "Observance",
    path: "/holidays",
    navLabel: "Holidays",
    blurb:
      "The Spawnist calendar: monthly observances, the solstices of Exsomnis and Somnis, Veilfall, Devotees Week and the Day of Returning.",
    intro:
      "The Spawnist calendar is compiled rather than decreed. It mixes a practice specific to one Discord community, a monthly day of rest kept by Spawnists generally, and a set of annual observances tied to the solstices, the full moon and the turning of the year. Dates and instructions below are reproduced from the community's holiday document, with its contributors credited on each entry.",
    articles: holidays,
  },
  {
    id: "symbols",
    title: "Symbols",
    kicker: "Material Culture",
    path: "/symbols",
    navLabel: "Symbols",
    blurb:
      "The spawn sigil, the Spawn Point, the Sun and Moon of Exsomnis and Somnus, and the eight-spoked wheel.",
    intro:
      "Spawnism's symbolic vocabulary is small: a spiked circle, a point from which existence radiates, the two lights of sun and moon, and a wheel with eight spokes. The meanings recorded here are those given in the community's own pages and in the Book of Spawn; where sources name the same figure differently, both names are noted.",
    articles: symbols,
  },
];

export const categories = definitions;

export const categoryById = definitions.reduce((accumulator, category) => {
  accumulator[category.id] = category;
  return accumulator;
}, {});

export const navigationCategories = definitions.map((category) => ({
  id: category.id,
  title: category.title,
  path: category.path,
  navLabel: category.navLabel,
  kicker: category.kicker,
}));

export const allArticles = definitions.flatMap((category) =>
  category.articles.map((article) => ({
    ...article,
    id: `${category.id}/${article.slug}`,
    categoryId: category.id,
    categoryTitle: category.title,
    path: category.path,
    href: `${category.path}#${article.slug}`,
  }))
);

export const articleIndex = allArticles.reduce((accumulator, article) => {
  accumulator[article.id] = article;
  return accumulator;
}, {});