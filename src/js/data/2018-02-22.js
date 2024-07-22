dataSetVersion = "2018-05-20"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Hyperdimension Neptunia", key: "hdn" },
      { name: "Hyperdimension Neptunia Mk2", key: "mk2" },
      { name: "Hyperdimension Neptunia Victory", key: "v" },
      { name: "Megadimension Neputnia VII", key: "vii" },
      { name: "Hyperdimension Neptunia: Producing Perfection", key: "pp" },
      { name: "Hyperdevotion Noire: Goddess Black Heart", key: "gbh" },
      { name: "Hyperdimension Neptunia U: Action Unleashed", key: "au" },
      { name: "MegaTagmension Blanc + Neptune VS Zombies", key: "zomb" },
      { name: "Superdimension Neptune vs Sega Hard Girls", key: "sega" },
      { name: "Cyberdimension Neptunia: 4 Goddesses Online", key: "fgo" },
      { name: "Nep-Nep Connect: Chaos Chanpuru", key: "nnc" },
      { name: "Hyperdimension Neptunia Re;birth 1", key: "rb1" },
      { name: "Hyperdimension Neptunia Re;birth 2: Sisters Generation", key: "rb2" },
      { name: "Hyperdimension Neptunia Re;birth 3: V Generation", key: "rb3" },
      { name: "Megadimension Neptunia VIIR", key: "viir" },
    ]
  },
  {
    name: "Filter by Character Type",
    key: "type",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [
      { name: "CPU", key: "cpu" },
      { name: "Maker", key: "mkr" },
      { name: "Monster", key: "msr" },
      { name: "Oracle", key: "orc" },
    ]
  },
  {
    name: "Remove alternate forms",
    key: "form",
    tooltip: "Check this to include alternate form counterparts to characters."
  },
  {
    name: "Remove different dimension duplicates",
    key: "dim",
    tooltip: "Check this to include alternate dimension counterparts to characters."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to include all non-female characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "5pb. (Lyrica)",
    img: "akita_n.jpg",
    opts: {
      series: ['hdn', 'mk2', 'rb2', 'rb3'],
      type: ['mkr'],
      form: false,
      dim: false,
      notgirl: false,
    },
  },
  {
    name: "Abaddon",
    img: "akita_n.jpg",
    opts: {
      series: ['vii', 'viir'],
      type: ['msr'],
      form: false,
      dim: false,
      notgirl: true,
    },
  },
  {
    name: "Abnes",
    img: "akita_n.jpg",
    opts: {
      series: ['v', 'rb3'],
      type: ['mkr'],
      form: false,
      dim: false,
      notgirl: false,
   },
  },
  {
    name: "Affimojas",
    img: "akita_n.jpg",
    opts: {
      series: ['vii', 'viir'],
      type: ['mkr'],
      form: false,
      dim: false,
      notgirl: true,
    },
  }
];
