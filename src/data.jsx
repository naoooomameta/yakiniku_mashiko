// data.jsx — 焼肉ましこ コンテンツデータ
// 全セクションで使うテキスト・メニュー・アクセス情報。
// 画像は <image-slot id="..."> でユーザー差込み。

const SITE = {
  nameJa: "焼肉ましこ",
  nameEn: "YAKINIKU · MASHIKO",
  tagline: "無煙ロースターで愉しむ、益子の本格焼肉",
  // ヒーローのコピー(2行)。案によって表示の組み方が変わる
  lead: [
    "煙くないから、もう一口。",
    "森のような町で、家族と囲む焼肉。",
  ],
  description:
    "栃木・益子の中心から少し離れた、緑のなかの小さな焼肉店。" +
    "韓国直送の無煙ロースターで、煙も匂いも気にせず、" +
    "炭火と変わらない香ばしさをお楽しみいただけます。",
};

const NAV = [
  { id: "strengths", ja: "ましこの強み", en: "Strengths" },
  { id: "menu", ja: "メニュー", en: "Menu" },
  { id: "facility", ja: "店内", en: "Facility" },
  { id: "instagram", ja: "Instagram", en: "Gallery" },
  { id: "access", ja: "アクセス", en: "Access" },
];

const STRENGTHS = [
  {
    no: "01",
    title: "煙が出ない、無煙ロースター",
    body:
      "韓国から直送した無煙ロースターを全席に設置。" +
      "焼肉特有の煙と匂いがほとんど立ちません。" +
      "髪や上着のことを気にせず、ゆっくり過ごせます。",
    tag: "Smokeless",
  },
  {
    no: "02",
    title: "益子の食卓を、そのまま",
    body:
      "栃木県産の和牛・地野菜を中心に、" +
      "農家さんや地元の市場から毎朝仕入れています。" +
      "黒板にその日の入荷を書き出すのが日課です。",
    tag: "Local",
  },
  {
    no: "03",
    title: "家族で囲むテーブル",
    body:
      "小さなお子さま用の椅子・食器、座敷席もご用意。" +
      "ベビーカーのまま入れる入口、おむつ替え台も完備。" +
      "三世代でいらっしゃるお客さまも多くいます。",
    tag: "Family",
  },
  {
    no: "04",
    title: "毎朝、捌く。",
    body:
      "ブロックで仕入れたお肉は、開店前に店主が手切り。" +
      "厚みも筋の入り方も、その日の状態に合わせて変えます。" +
      "だから同じ部位でも、来るたび少し違います。",
    tag: "Hand-cut",
  },
  {
    no: "05",
    title: "5種類の自家製ダレ",
    body:
      "醤油・塩・味噌・コチュジャン・柚子の5種類。" +
      "それぞれ仕込みに3日かけて作ります。" +
      "席の小さな器で並べてお出しします。",
    tag: "House-made",
  },
];

const MENU = {
  // タブ表示用のカテゴリ
  categories: [
    {
      id: "yakiniku",
      ja: "焼肉",
      en: "Grill",
      note: "肉は全て店内で手切りしています",
      items: [
        { name: "本日の特上カルビ", price: "2,400", note: "黒板にて部位ご確認ください" },
        { name: "上ロース", price: "1,980" },
        { name: "ハラミ", price: "1,680" },
        { name: "厚切りタン塩", price: "1,980" },
        { name: "和牛イチボ", price: "2,200", note: "数量限定" },
        { name: "ましこ盛り合わせ（2〜3人前）", price: "4,800", featured: true },
        { name: "豚トロ・豚カルビ", price: "1,280" },
        { name: "鶏もも 柚子こしょう", price: "980" },
      ],
    },
    {
      id: "ippin",
      ja: "一品料理",
      en: "Sides",
      note: "韓国の食卓から、毎日仕込んでいます",
      items: [
        { name: "三種ナムル", price: "680" },
        { name: "本日のキムチ盛り", price: "780" },
        { name: "チャプチェ", price: "880" },
        { name: "海鮮チヂミ", price: "1,180" },
        { name: "サムギョプサル（150g）", price: "1,680" },
        { name: "ましこサラダ（地野菜たっぷり）", price: "980", featured: true },
      ],
    },
    {
      id: "rice",
      ja: "ご飯・〆",
      en: "Rice & Soup",
      note: "石焼ビビンバは、土鍋ごとお持ちします",
      items: [
        { name: "石焼ビビンバ", price: "1,280", featured: true },
        { name: "テールスープ", price: "980" },
        { name: "冷麺（ハーフ／レギュラー）", price: "780 / 1,180" },
        { name: "クッパ（牛・キムチ）", price: "1,080" },
        { name: "白ごはん", price: "300" },
      ],
    },
    {
      id: "drink",
      ja: "ドリンク",
      en: "Drinks",
      note: "栃木の地酒・益子の焼酎もご用意",
      items: [
        { name: "生ビール（中）", price: "680" },
        { name: "ハイボール／レモンサワー", price: "580" },
        { name: "マッコリ（ボトル）", price: "1,980" },
        { name: "栃木の地酒（日替わり3種）", price: "780〜" },
        { name: "ノンアルコールカクテル", price: "580" },
        { name: "ソフトドリンク各種", price: "380" },
      ],
    },
    {
      id: "kids",
      ja: "お子さま",
      en: "For Kids",
      note: "0歳から、ご家族で安心して",
      items: [
        { name: "お子さまプレート", price: "880", note: "ごはん・スープ・ジュース付き" },
        { name: "やわらかミニハンバーグ", price: "580" },
        { name: "フルーツ盛り合わせ", price: "480" },
      ],
    },
  ],
};

const FACILITY = [
  { label: "席数", value: "32席（テーブル6・座敷4卓）" },
  { label: "個室", value: "あり（4〜8名／要予約）" },
  { label: "駐車場", value: "12台（無料）" },
  { label: "支払い", value: "現金・各種クレジット・QR決済" },
  { label: "子ども", value: "ベビーカー可・キッズチェア・絵本あり" },
  { label: "言語", value: "日本語・かんたんな英語" },
];

const INSTAGRAM = {
  handle: "@yakiniku_mashiko",
  url: "https://www.instagram.com/",
  caption:
    "本日の仕入れ・季節の献立を毎日更新しています。" +
    "予約状況のお知らせもこちらから。",
};

const ACCESS = {
  address: "〒321-4217 栃木県芳賀郡益子町益子1234-5",
  tel: "0285-00-0000",
  hours: [
    { day: "平日", time: "17:00 – 22:00（L.O. 21:00）" },
    { day: "土・日・祝", time: "11:30 – 14:30 / 17:00 – 22:00" },
  ],
  closed: "火曜日（祝日の場合は営業、翌水曜休）",
  station: "真岡鐵道 益子駅から徒歩12分／車で4分",
  parking: "店舗前 12台 無料",
};

const VOICE = [
  {
    quote: "煙くないから、上着のままで来られる。それだけで気が楽。",
    by: "宇都宮から / 30代",
  },
  {
    quote: "子どもがビビンバ好きになって、月一の家族行事に。",
    by: "益子町在住 / 家族4人",
  },
  {
    quote: "肉の厚みが日によって違うのが、逆にうれしい。",
    by: "東京から月1で / 50代",
  },
];

window.MASHIKO_DATA = {
  SITE, NAV, STRENGTHS, MENU, FACILITY, INSTAGRAM, ACCESS, VOICE,
};
