const branches = [
  {
    slug: "oris-zoe",
    title: "Oris Zoe",
    summary: "The belief that every life is precious, because rebirths are limited.",
    status: "community",
    details: [
      { label: "Stated focus", value: "The scarcity and value of each life" },
      { label: "Credited to", value: "Contributor not named on the wiki" },
    ],
    body: [
      "Oris Zoe holds that every life is precious because rebirths are limited. The branch gives the tradition's general reverence for life its sharpest form: if the number of returns is finite, then a life is not a renewable resource to be spent carelessly.",
      "It is among the shortest entries on the wiki's branch page, and it does not specify how many lives are available. The related Finite-Lives interpretation, listed under the Spawn Point Angels branches, does put a number on it, offering ten lives as an example.",
    ],
    related: ["beliefs/life-is-sacred", "branches/finite-lives", "sins/neglecting-yourself"],
  },
  {
    slug: "embodied",
    title: "Embodied",
    summary: "The belief that Spawn is a real object or being — a statue, a game object, or something similarly tangible.",
    status: "community",
    details: [
      { label: "Stated focus", value: "Spawn as a physical or concrete entity" },
      { label: "Credited to", value: "Contributor not named on the wiki" },
    ],
    body: [
      "The Embodied branch holds that Spawn is a real object or being: a statue, a game object, or something of that kind. It takes the tradition's origin literally — the spawn symbol was a thing in a world, and on this reading Spawn remains a thing.",
      "The branch is one of the clearest examples of the tradition's tolerance for incompatible readings. Nothing in the community's material suggests that an Embodied Spawnist and a Self-Spawn Spawnist are in dispute; they are simply working with different senses of the same word.",
    ],
    related: ["beliefs/the-spawn", "branches/self-spawn", "symbols/the-spawn-point"],
  },
  {
    slug: "fearful",
    title: "Fearful",
    summary: "The belief that Spawn is powerful and should be approached with cautious respect.",
    status: "community",
    details: [
      { label: "Stated focus", value: "Caution and reverence before power" },
      { label: "Credited to", value: "Contributor not named on the wiki" },
    ],
    body: [
      "The Fearful branch holds that Spawn is powerful and should be approached with cautious respect. It is not a branch of dread for its own sake: the caution is directed at something taken to be genuinely capable, and it produces a more formal devotional manner than the tradition's domestic mainstream.",
      "The Tentative or Uneasy interpretation, listed under the Spawn Point Angels branches, describes a similar posture in milder terms — deep respect, even mild dread, toward the mystery of returning.",
    ],
    related: ["branches/tentative", "branches/divine", "prayers/hymn"],
  },
  {
    slug: "divine",
    title: "Divine",
    summary: "The belief that Spawn is a god and should be treated as one.",
    status: "community",
    details: [
      { label: "Stated focus", value: "Spawn as deity" },
      { label: "Credited to", value: "Contributor not named on the wiki" },
    ],
    body: [
      "The Divine branch holds that Spawn is a god and should be treated as such. It is the branch that most closely matches the register of the Book of Spawn, which addresses Spawn as the ruler of earth, sea and sky, and which speaks of his Holy Fire and his Infinite Gifts.",
      "Several later branches describe themselves as forms of Divine Spawnism, among them the Divine Cycles Branch and Spawn's Rays of Rebirth. The wiki's own introductory page notes the tension this creates with the Symbols page, which states that Spawnism has no gods — a disagreement the archive records rather than resolves.",
    ],
    related: ["beliefs/the-spawn", "branches/divine-cycles", "branches/rays-of-rebirth", "prayers/hymn"],
  },
  {
    slug: "self-spawn",
    title: "Self-Spawn",
    summary: "The belief that the individual is themself Spawn, whatever that means to the person.",
    status: "community",
    details: [
      { label: "Stated focus", value: "The practitioner as the locus of Spawn" },
      { label: "Credited to", value: "Contributor not named on the wiki" },
    ],
    body: [
      "The Self-Spawn branch holds that the individual is Spawn — whatever that means to the person. The wiki deliberately leaves the clause open, which is consistent with the tradition's insistence that interpretation is personal.",
      "The branch sits naturally beside the Book of Spawn's insistence that a person should be the god of their own being, while being warned not to try to be the god of anyone else's. It also explains why the archive cannot tell readers what Self-Spawn 'really' teaches: the branch's own definition declines to.",
    ],
    related: ["beliefs/interpretation", "beliefs/the-spawn", "branches/embodied"],
  },
  {
    slug: "moon",
    title: "Moon",
    summary: "A branch focused on the Moon symbol rather than the Sun.",
    status: "community",
    details: [
      { label: "Stated focus", value: "The Moon as the primary symbol" },
      { label: "Credited to", value: "Contributor not named on the wiki" },
    ],
    body: [
      "The Moon branch is focused on the Moon symbol rather than the Sun one. The wiki gives no further doctrine, but the branch's preference shows up elsewhere in the community's material: the page on shrines notes that many Spawnists, especially Moon Spawnists, prefer to worship at night.",
      "Where the Sun is associated with life and the day in the two-lights branches, the Moon is associated with death, autumn and winter. Moon Spawnists need not accept that scheme, but they share its preference for the darker half of the pair.",
    ],
    related: ["symbols/sun-and-moon", "offerings/worshipping", "branches/ecliptian"],
  },
  {
    slug: "grateful",
    title: "Grateful",
    summary: "A branch focused on infinite gratitude for being gifted life.",
    status: "community",
    details: [
      { label: "Stated focus", value: "Gratitude as the whole of practice" },
      { label: "Credited to", value: "Contributor not named on the wiki" },
    ],
    body: [
      "The Grateful branch is focused on infinite gratitude for being gifted life. It is the branch most directly aligned with the Book of Spawn, whose first chapter is titled Gratitude and whose third chapter makes gratitude the condition of resurrection.",
      "The branch's practice is therefore less a set of rites than a disposition: noticing what one has been given, and answering it with thanks. The Day of Respawning and Gratitude on 1 January gives it a fixed date in the year.",
    ],
    related: ["beliefs/resurrection", "holidays/day-of-respawning", "branches/angelic"],
  },
  {
    slug: "angelic",
    title: "Angelic",
    summary: "A branch focused on inner self-worth.",
    status: "community",
    details: [
      { label: "Stated focus", value: "Self-worth and inner regard" },
      { label: "Credited to", value: "Contributor not named on the wiki" },
    ],
    body: [
      "The Angelic branch is focused on inner self-worth. Its concern is not with angels as figures — the wiki lists no angelic hierarchy — but with the worth of the person doing the practice, which the branch treats as the thing devotion is meant to restore.",
      "This places it close to the sins page's insistence that self-neglect is a misuse of life, and to the Book of Spawn's description of the reader as pure art.",
    ],
    related: ["sins/neglecting-yourself", "beliefs/life-is-sacred", "branches/grateful"],
  },
  {
    slug: "ecliptian",
    title: "Ecliptian",
    summary:
      "A branch holding both the Moon and Sun symbols, with the Moon as keeper of death and the Sun as keeper of life.",
    status: "community",
    details: [
      { label: "Stated focus", value: "The pairing of Sun and Moon" },
      { label: "Credited to", value: "Contributor not named on the wiki" },
    ],
    body: [
      "The Ecliptian branch focuses on both the Moon and Sun symbols, with the Moon symbol being the keeper of death and the Sun symbol the keeper of life. Neither light is subordinate: the branch's name points to the moment they meet.",
      "The Sun-and-Moon pairing recurs across the community's material. The Caelestia Numina Branch names the two deities Exsomnus and Somnus and assigns them the same domains; Spawn's Rays of Rebirth treats them as two aspects of Spawn that can exist separately or as one whole.",
    ],
    related: ["symbols/sun-and-moon", "branches/caelestia-numina", "branches/moon"],
  },
  {
    slug: "heavenbound",
    title: "Heavenbound",
    summary:
      "A branch building a sanctuary within Spawnism for alterhuman practitioners and for those struggling with biblical or naturalistic beliefs.",
    status: "community",
    details: [
      { label: "Stated focus", value: "A home for alterhuman and religiously displaced Spawnists" },
      { label: "Credited to", value: "@.checkerzthejotunhel on Discord" },
    ],
    body: [
      "The Heavenbound Branch is focused on creating a sanctuary for Spawnists who are alterhuman, or who are struggling with biblical or naturalistic beliefs, so that they have a belief system within Spawnism that connects to them unlike any other branch.",
      "It is the only branch on the wiki whose stated purpose is explicitly communal rather than metaphysical: the branch exists to make room for particular people, not to settle a question about the nature of Spawn.",
      "The credit for the entry is the only one on the page given as a Discord handle rather than a blog or image board.",
    ],
    related: ["beliefs/fictional-roots", "beliefs/interpretation", "sins/forcing-belief"],
  },
  {
    slug: "solrynism",
    title: "Solrynism",
    summary: "A branch about creating instead of destroying, healing oneself, being kind, and being the best person you can be.",
    status: "community",
    details: [
      { label: "Stated focus", value: "Creation, healing and personal conduct" },
      { label: "Credited to", value: "@0ddlyformed on Pinterest" },
    ],
    body: [
      "Solrynism is described entirely in terms of conduct: it is all about creating instead of destroying, healing oneself, being kind, and being the best person you can be.",
      "It is the least doctrinal entry on the branch page. Nothing in it depends on how Spawn is understood, which makes it easy to hold alongside another branch — as the wiki notes is generally possible, since a follower may belong to one or more branches or remain unaffiliated.",
    ],
    related: ["beliefs/devotion", "sins/hate-or-cruelty", "branches/grateful"],
  },
  {
    slug: "divine-cycles",
    title: "Divine Cycles",
    summary:
      "A branch in which Spawn is a god who watches over everyone, life is a gift, and cycles are respected in their own right.",
    status: "community",
    details: [
      { label: "Stated focus", value: "Divine watchfulness and the integrity of cycles" },
      { label: "Credited to", value: "@anticult-spawnist on Tumblr" },
    ],
    body: [
      "The Divine Cycles Branch holds that Spawn is a god who watches over everyone. Life is a gift to be cherished and being alive means something. Cycles are respected in their own right, whatever cycle is in question.",
      "The branch states that Spawn promotes kindness, well-being, respect and hope, because these are Spawn's goals — and that repeated misuse of Spawn's graces will lead to the graces of lives being revoked until further notice. It is the only branch on the page that describes a consequence attached to misuse.",
      "Its contributor's handle includes the word anticult, which reflects the wiki's own position: the community distinguishes itself explicitly from the group it calls the Spawn cult.",
    ],
    related: ["branches/divine", "sins/what-a-sin-is", "symbols/the-eight-spoked-wheel"],
  },
  {
    slug: "caelestia-numina",
    title: "Caelestia Numina",
    summary:
      "A witchcraft-based branch with two deities: Exsomnus, who protects life, spring, summer and the sun, and Somnus, who protects death, autumn, winter and the moon.",
    status: "community",
    details: [
      { label: "Stated focus", value: "Two deities, honoured through non-harmful witchcraft" },
      { label: "Credited to", value: "@enchantedfl0wersxo on Tumblr" },
    ],
    body: [
      "The Caelestia Numina Branch primarily uses witchcraft as a way of worshipping its two deities. Its main ideology is that the Spawn consists of two deities: Exsomnus and Somnus. Exsomnus, the sun spawn, protects life, spring and summer, and the sun. Somnus protects death, autumn and winter, and the moon.",
      "In this branch reincarnation is a natural process under the two: when a person dies, either Exsomnus or Somnus places the soul into a new body to experience a new life. Worship may consist of any kind of non-harmful witchcraft, such as herbology or divination.",
      "The spelling Exsomnus is the branch's own; the Hymn to the Spawn uses Exsomnis for the same figure, and the holiday document names the summer solstice after it.",
    ],
    related: ["symbols/sun-and-moon", "branches/ecliptian", "holidays/exsomnis"],
  },
  {
    slug: "rays-of-rebirth",
    title: "Spawn's Rays of Rebirth",
    summary:
      "A form of Divine Spawnism in which Spawn is one being with two aspects — Exsomnis and Somnus — who judge a life and decide how it returns.",
    status: "community",
    details: [
      { label: "Stated focus", value: "Judgement, rebirth and divine balance" },
      { label: "Credited to", value: "@presbyterrsp4wnist on Tumblr" },
    ],
    body: [
      "This branch of Divine Spawnism teaches that Spawn is a divine being with two aspects that can exist separately or as one whole: Exsomnis and Somnus, believed to be the literal Sun and Moon. Through their light they watch over existence and cause rebirth in different ways, affecting all creatures including mortals.",
      "When a being dies, Spawn judges their life. If rebirth is granted, Spawn chooses when and how they are reborn — either to teach a lesson tied to the greatest flaw of their past life, or to fulfil a wish granted by Spawn. If rebirth is not granted, the being is sent either into eternal rest, described as a peaceful and neutral end, or into another life created solely to teach that one unresolved lesson.",
      "The branch is careful to say that this system is not meant as punishment but as balance, growth and understanding under Spawn's divine will. It is the most fully worked-out account of judgement on the wiki.",
    ],
    related: ["beliefs/second-life", "symbols/sun-and-moon", "branches/divine"],
  },
  {
    slug: "finite-lives",
    title: "The Finite-Lives",
    summary:
      "A Spawn Point Angels interpretation accepting a preset number of spawns, so that each life is a limited opportunity.",
    status: "community",
    details: [
      { label: "Stated focus", value: "A fixed number of lives per soul" },
      { label: "Credited to", value: "Contributor not named on the wiki" },
    ],
    body: [
      "Believers accept that there is a preset number of spawns — ten lives, for example — and that each life is therefore a precious, limited opportunity to learn and contribute.",
      "The Finite-Lives reading belongs to the group the wiki files under Spawn Point Angels branches, which concern the point itself rather than the deity. It gives arithmetic to the intuition behind Oris Zoe.",
    ],
    related: ["branches/oris-zoe", "beliefs/life-is-sacred", "symbols/spawn-point-angels"],
  },
  {
    slug: "anthropomorphic-spawn",
    title: "The Anthropomorphic Spawn",
    summary:
      "A Spawn Point Angels interpretation in which the point is a sentient being or spiritual entity, with protectors guarding each cycle.",
    status: "community",
    details: [
      { label: "Stated focus", value: "A sentient Spawn Point and its guardians" },
      { label: "Credited to", value: "Contributor not named on the wiki" },
    ],
    body: [
      "Some conceive the Spawn Point as a sentient being or spiritual entity. This can involve belief in Spawn Protectors or Point Beings who guide or guard each cycle.",
      "The interpretation gives the tradition its closest thing to an intermediate order of beings: figure not divine enough to be a god, not abstract enough to be a principle, whose function is to guard the passage between lives.",
    ],
    related: ["symbols/spawn-point-angels", "symbols/the-spawn-point", "branches/finite-lives"],
  },
  {
    slug: "tentative",
    title: "The Tentative or Uneasy",
    summary:
      "A Spawn Point Angels interpretation for those who find the point mysterious or unnerving yet remain within the tradition.",
    status: "community",
    details: [
      { label: "Stated focus", value: "Respect mixed with unease" },
      { label: "Credited to", value: "Contributor not named on the wiki" },
    ],
    body: [
      "For some, the Point is mysterious — or unnerving. They feel a deep respect, even mild dread, toward the mysterious aspect of returning, yet remain within Spawnism, anchoring their journey to its core symbolism.",
      "The entry is unusual for a religious reference in that it treats hesitation as a position rather than a failure of faith. It is a fair summary of how the tradition handles doubt generally: the wiki does not require certainty of anyone.",
    ],
    related: ["branches/fearful", "beliefs/interpretation", "symbols/the-spawn-point"],
  },
];

export default branches;