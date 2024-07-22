dataSetVersion = "2018-02-22"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by School Entry",
    key: "series",
    tooltip: "Check this to restrict to certain schools.",
    checked: false,
    sub: [
      { name: "Aoe", key: "aoe" },
      { name: "Awataguchi", key: "awa" },
      { name: "Bungonokuni Yukihira", key: "by" },
      { name: "Fukuoka Ichimonji", key: "fi" },
      { name: "Gou", key: "gou" },
      { name: "Hiromitsu", key: "hi" },
      { name: "Horikawa", key: "ho" },
      { name: "Kanesada", key: "kane" },
      { name: "Kobizen", key: "kobi" },
      { name: "Kotetsu", key: "kote" },
      { name: "Masamune", key: "masa" },
      { name: "Miike", key: "mii" },
      { name: "Muramasa", key: "mura" },
      { name: "Osafune", key: "osa" },
      { name: "Sadamune", key: "sada" },
      { name: "Samonji", key: "samo" },
      { name: "Sanjou", key: "san" },
      { name: "Unlisted", key: "ul" },
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
    name: "Akita",
    img: "akita_n.jpg",
    opts: {

    },
  },
  {
    name: "Atsushi",
    img: "atsushi_n.jpg",
    opts: {

    },
  },
  {
    name: "Gokotai",
    img: "Gokotai_n.jpg",
    opts: {

   },
  },
  {
    name: "Gotou",
    img: "gotou_n.jpg",
    opts: {

    },
  },
  {
    name: "Hakata",
    img: "hakata_n.jpg",
    opts: {

    },
  },
  {
    name: "Hirano",
    img: "Hirano_n.jpg",
    opts: {

    },
  },
  {
    name: "Honebami",
    img: "honebami_n.jpg",
    opts: {

    },
  },
  {
    name: "Kogitsunemaru",
    img: "kogi_n.jpg",
    opts: {

    },
  },
  {
    name: "Mikazuki",
    img: "mikazuki_n.jpg",
    opts: {

    },
  }
];
