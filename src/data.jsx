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
    "遊んで、食べて、益子で一日。",
  ],
  description:
    "栃木県益子町、アドベンチャーヴィレッジ益子の敷地内にある焼肉店。" +
    "韓国直送の無煙ロースターで、煙も匂いも気にせずお肉の香ばしさを愉しめます。" +
    "アスレチック・甘味処「峠の茶屋」と隣り合う、一日中いられる場所です。",
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
    title: "煙が出ない、韓国直送ロースター",
    body:
      "韓国から直送した無煙ロースターを全席に設置。" +
      "焼肉特有の煙と匂いがほとんど立たないので、" +
      "髪や上着のことを気にせず、ゆっくり過ごせます。",
    tag: "Smokeless",
  },
  {
    no: "02",
    title: "980円〜のお手頃ランチ",
    body:
      "おすすめランチは焼肉4種盛り・ライス・スープ・香の物付きで980円。" +
      "ドリンクバー付きは1,180円、家族で取り分けやすい" +
      "ファミリーセットも2人前2,000円〜ご用意しています。",
    tag: "Lunch",
  },
  {
    no: "03",
    title: "遊んで、食べて、家族で一日",
    body:
      "敷地内にはアスレチック「アドベンチャーヴィレッジ益子」を併設。" +
      "子どもが思いきり遊んだあと、そのまま焼肉でひと休み。" +
      "三世代でゆっくり過ごせる、益子の家族の場所です。",
    tag: "Family",
  },
  {
    no: "04",
    title: "甘味処「峠の茶屋」も隣り合わせ",
    body:
      "食後のデザートや喫茶は、敷地内の甘味処「峠の茶屋」で。" +
      "コーヒー・ぜんざい・かき氷など、焼肉のあとに" +
      "立ち寄れる甘いものが揃っています。",
    tag: "Sweets",
  },
  {
    no: "05",
    title: "持ち込みOKのバーベキューハウス",
    body:
      "屋外には食材持ち込み可のバーベキューハウスも。" +
      "焼肉店利用とあわせて、グループや子ども会など" +
      "大人数でのご利用もご相談ください。",
    tag: "BBQ",
  },
];

const MENU = {
  // タブ表示用のカテゴリ
  categories: [
    {
      id: "lunch",
      ja: "ランチ",
      en: "Lunch",
      note: "11:00–15:00 / 土日祝もご利用いただけます",
      items: [
        { name: "おすすめランチ", price: "980", note: "焼肉4種盛り・ライス・スープ・香の物付", featured: true },
        { name: "ドリンクバー付ランチ", price: "1,180", note: "おすすめランチ＋ドリンクバー" },
        { name: "ファミリーセット（2人前〜）", price: "2,000〜", note: "家族で取り分けやすい盛り合わせ" },
      ],
    },
    {
      id: "yakiniku",
      ja: "焼肉",
      en: "Grill",
      note: "韓国直送の無煙ロースターでお召し上がりください",
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
  { label: "席数", value: "テーブル席・座敷席あり" },
  { label: "併設施設", value: "アドベンチャーヴィレッジ益子／甘味処 峠の茶屋" },
  { label: "屋外", value: "持ち込み可のバーベキューハウス" },
  { label: "駐車場", value: "茶力経ヶ坂駐車場をご利用ください" },
  { label: "子ども", value: "アスレチックあり・キッズチェア完備" },
  { label: "ロースター", value: "韓国直送の無煙ロースター" },
];

const INSTAGRAM = {
  handle: "@yakinikumasiko_",
  url: "https://www.instagram.com/yakinikumasiko_/",
  caption:
    "本日の仕入れ・季節のメニュー・アドベンチャーヴィレッジ益子の様子を発信中。" +
    "最新のお知らせはInstagramからご覧ください。",
};

const ACCESS = {
  address: "栃木県芳賀郡益子町益子4413-47",
  tel: "0285-81-5733",
  hours: [
    { day: "ランチ", time: "11:00 – 15:00" },
    { day: "ディナー", time: "17:00 – 21:00" },
  ],
  closed: "毎週水曜・火曜の夜",
  station: "真岡鐵道 益子駅から車で約10分",
  parking: "茶力経ヶ坂駐車場をご利用ください",
};

const VOICE = [
  {
    quote: "アスレチックでひと遊びしたあとに焼肉。子どもがクタクタになって、よく寝てくれます。",
    by: "宇都宮から / 家族4人",
  },
  {
    quote: "980円ランチでこのボリュームはありがたい。土日でも同じ値段でやってくれる。",
    by: "益子町在住 / 30代",
  },
  {
    quote: "煙くないから、陶器市の帰りでも気軽に立ち寄れる。峠の茶屋とセットで丸一日。",
    by: "東京から月1で / 50代",
  },
];

window.MASHIKO_DATA = {
  SITE, NAV, STRENGTHS, MENU, FACILITY, INSTAGRAM, ACCESS, VOICE,
};
