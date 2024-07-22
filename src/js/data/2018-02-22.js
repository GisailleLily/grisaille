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
    tooltip: "Check this to restrict to characters to a type",
    checked: false,
    sub: [
      { name: "Tantou", key: "tan" },
      { name: "Wakizashi", key: "waki" },
      { name: "Uchigatana", key: "uchi" },
      { name: "Tachi", key: "tachi" },
      { name: "Ootachi", key: "oot" },
      { name: "Yari", key: "yari" },
      { name: "Naginata", key: "nagi" },
      { name: "Tsurugi", key: "tsu" },
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
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Aizen",
    img: "aizen_n.jpg",
    opts: {

    },
  },
  {
    name: "Akashi",
    img: "akashi_n.jpg",
    opts: {

    },
  },
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
    name: "Azuki",
    img: "azuki_n.jpg",
    opts: {

    },
  },
  {
    name: "Buzen",
    img: "buzen_n.jpg",
    opts: {

    },
  },
  {
    name: "Chatannakiri",
    img: "chat_n.jpg",
    opts: {

    },
  },
  {
    name: "Chiganemaru",
    img: "chiga_n.jpg",
    opts: {

    },
  },
  {
    name: "Chiyoganemaru",
    img: "chiyo_n.jpg",
    opts: {

    },
  },
  {
    name: "Chougi",
    img: "chougi_n.jpg",
    opts: {

    },
  },
  {
    name: "Daihannya",
    img: "dai_n.jpg",
    opts: {

    },
  },
  {
    name: "Doudanuki",
    img: "dou_n.jpg",
    opts: {

    },
  },
];
