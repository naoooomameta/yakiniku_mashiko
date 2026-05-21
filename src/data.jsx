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
    title: "平日1,000円〜のお手頃ランチ",
    body:
      "おすすめランチは焼肉盛合せ・ライス・スープ付きで平日1,000円／土日1,100円。" +
      "黒毛和牛ハンバーグ・レディース・牛尽くしなど、" +
      "ご褒美ランチも1,300〜1,600円でご用意しています。",
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
];

const MENU = {
  // 価格は全て税・サ込
  categories: [
    {
      id: "lunch",
      ja: "ランチ",
      en: "Lunch",
      note: "11:00–15:00 / 焼肉盛合せ・ライス・スープ付き",
      items: [
        { name: "おすすめランチ（平日）", price: "1,000", note: "焼肉盛合せ・ライス・スープ付き", featured: true, img: "assets/menu-lunch.jpg" },
        { name: "おすすめランチ（土日）", price: "1,100", note: "焼肉盛合せ・ライス・スープ付き" },
        { name: "黒毛和牛ハンバーグランチ", price: "1,300", note: "とちぎ和牛・前日光和牛・とちぎ夢ポーク使用／和風オニオンソース／サラダ・小鉢・ご飯・スープ付き", featured: true, img: "assets/menu-dinner.jpg" },
        { name: "レディースランチ", price: "1,400", note: "牛ハラミ・牛カルビ・豚カルビ・鶏もも／サラダ・小鉢・ご飯・スープ・日替りミニデザート付き" },
        { name: "牛尽くしランチ", price: "1,600", note: "ザブトン・牛ハラミ・牛カルビ／小鉢・ご飯・スープ付き", featured: true, img: "assets/strength-1-roaster.jpg" },
        { name: "ランチドリンクバー", price: "+200", note: "ランチご注文の方限定" },
        { name: "ライス大盛", price: "+100" },
        { name: "サラダ追加", price: "200" },
        { name: "ミニデザート", price: "200" },
      ],
    },
    {
      id: "yakiniku",
      ja: "焼肉",
      en: "Grill",
      note: "韓国直送の無煙ロースターでお召し上がりください",
      items: [
        { name: "栃木和牛サーロイン（200g）", price: "6,000", featured: true, img: "assets/hero-roaster.jpg" },
        { name: "和牛上カルビ", price: "2,000" },
        { name: "栃木和牛ましこカルビ", price: "1,200", note: "おすすめ", featured: true, img: "assets/menu-kids.jpg" },
        { name: "牛タン", price: "1,300" },
        { name: "牛ハラミ", price: "880" },
        { name: "牛ザブトン", price: "880" },
        { name: "牛カルビ", price: "650" },
        { name: "牛ホルモン", price: "550" },
        { name: "牛レバー", price: "550" },
        { name: "豚カルビ", price: "500" },
        { name: "トントロ", price: "400" },
        { name: "鶏もも", price: "300" },
        { name: "ウィンナー", price: "350" },
        { name: "牛すじ煮込み", price: "400" },
        { name: "豚もつ煮込み", price: "400" },
      ],
    },
    {
      id: "side",
      ja: "サイド・ご飯",
      en: "Sides & Rice",
      note: "ライスは栃木県産コシヒカリ使用",
      items: [
        { name: "チョレギサラダ", price: "750" },
        { name: "焼き野菜盛合せ", price: "650" },
        { name: "サンチュ", price: "600" },
        { name: "ナムル盛合せ", price: "400" },
        { name: "白菜キムチ", price: "400" },
        { name: "枝豆", price: "350" },
        { name: "わかめスープ", price: "400" },
        { name: "ライス", price: "200" },
        { name: "半ライス", price: "150" },
      ],
    },
    {
      id: "drink",
      ja: "ドリンク",
      en: "Drinks",
      note: "ドリンクバーはディナー +400円 / ランチ +200円",
      items: [
        { name: "ザ・プレミアム・モルツ 神泡（生）", price: "550" },
        { name: "ザ・プレミアム・モルツ 中瓶", price: "650" },
        { name: "ジムビームハイボール", price: "430" },
        { name: "角ハイボール", price: "450" },
        { name: "メガ角ハイボール", price: "800" },
        { name: "こだわり酒場のレモンサワー", price: "450" },
        { name: "翠ジンソーダ", price: "450" },
        { name: "翠ジンレモン／トニック", price: "480" },
        { name: "メガ翠ジンソーダ", price: "800" },
        { name: "サワー（グレープフルーツ／ライチ）", price: "各450" },
        { name: "紀州産 南高梅酒", price: "500" },
        { name: "カルロ ロッシ（赤・白）", price: "各500" },
        { name: "焼酎 大隅（麦・芋）", price: "各500" },
        { name: "焼酎 頑固人（麦・芋）", price: "各550" },
        { name: "日本酒", price: "600〜", note: "各種ございます" },
        { name: "オールフリー樽詰（ノンアル）", price: "400" },
        { name: "ドリンクバー", price: "400" },
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
    quote: "平日1,000円のおすすめランチでこのボリュームはありがたい。黒毛和牛ハンバーグもおすすめ。",
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
