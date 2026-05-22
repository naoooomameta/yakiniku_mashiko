// app.jsx — 焼肉ましこ メインApp + Tweaks統合

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "forest",
  "heading": "auto",
  "accent": "mashiko",
  "hero": "collage",
  "bg": "paper",
  "menuMode": "tabs"
}/*EDITMODE-END*/;

// 方向ごとのプリセット（auto を解決するのに使う）
const DIR_PRESETS = {
  forest: {
    accent: "moss",      // 森のモス
    bg: "cream",
    heading: "gothic",
  },
  postcard: {
    accent: "vermilion", // 朱
    bg: "paper",
    heading: "mincho",
  },
};

// アクセントカラー
const ACCENT_PALETTES = {
  vermilion: { name: "朱", hex: "#C7472E" },
  sumi:      { name: "墨", hex: "#2A2722" },
  mashiko:   { name: "益子土色", hex: "#8B5A3C" },
  moss:      { name: "森", hex: "#4A6A3A" },
};

// 背景の暖かさ
const BG_PALETTES = {
  white:  { paper: "#FBFAF6", paperAlt: "#F1EDE2", ink: "#1A1410", inkSoft: "#6C6357" },
  cream:  { paper: "#F6EFE2", paperAlt: "#ECE2CC", ink: "#2A2218", inkSoft: "#766B55" },
  paper:  { paper: "#EFE6D2", paperAlt: "#E0D4B8", ink: "#27201A", inkSoft: "#7A6F5C" },
  sumi:   { paper: "#1B1612", paperAlt: "#26201A", ink: "#F5EFE2", inkSoft: "#A99C84" },
};

// 見出しフォント
const HEADING_FONTS = {
  mincho:    "'Shippori Mincho', 'Noto Serif JP', serif",
  gothic:    "'Zen Maru Gothic', 'Zen Kaku Gothic New', 'Noto Sans JP', sans-serif",
  handwritten: "'Yusei Magic', 'Klee One', 'Noto Sans JP', sans-serif",
};

function resolve(t, key) {
  if (t[key] && t[key] !== "auto") return t[key];
  return DIR_PRESETS[t.direction]?.[key] || DIR_PRESETS.forest[key];
}

function MashikoApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const direction = t.direction;
  const heading = resolve(t, "heading");
  const accent = resolve(t, "accent");
  const bg = resolve(t, "bg");
  const hero = t.hero;
  const menuMode = t.menuMode;

  // CSS変数を <html> に流す
  React.useEffect(() => {
    const root = document.documentElement;
    const accentHex = ACCENT_PALETTES[accent]?.hex || "#C7472E";
    const bgPal = BG_PALETTES[bg] || BG_PALETTES.cream;
    root.style.setProperty("--mk-accent", accentHex);
    root.style.setProperty("--mk-paper", bgPal.paper);
    root.style.setProperty("--mk-paper-alt", bgPal.paperAlt);
    root.style.setProperty("--mk-ink", bgPal.ink);
    root.style.setProperty("--mk-ink-soft", bgPal.inkSoft);
    root.style.setProperty("--mk-heading", HEADING_FONTS[heading] || HEADING_FONTS.gothic);
    root.setAttribute("data-direction", direction);
    root.setAttribute("data-bg", bg);
    root.setAttribute("data-heading", heading);
  }, [direction, accent, bg, heading]);

  return (
    <>
      <MkNav direction={direction} />
      <main className="mk-main">
        <MkHero direction={direction} hero={hero} />
        <MkStrengths />
        <MkMenu menuMode={menuMode} />
        <MkFacility />
        <MkVoices />
        <MkInstagram />
        <MkAccess />
      </main>
      <MkFooter />

      <TweaksPanel title="Tweaks">
        <TweakSection label="方向" />
        <TweakRadio
          label="Direction"
          value={t.direction}
          options={[
            { value: "forest",   label: "案A 森" },
            { value: "postcard", label: "案B 葉書" },
          ]}
          onChange={(v) => setTweak("direction", v)}
        />

        <TweakSection label="タイポグラフィ" />
        <TweakRadio
          label="見出しフォント"
          value={t.heading}
          options={[
            { value: "auto",        label: "Auto" },
            { value: "mincho",      label: "明朝" },
            { value: "gothic",      label: "ゴシック" },
            { value: "handwritten", label: "手書き" },
          ]}
          onChange={(v) => setTweak("heading", v)}
        />

        <TweakSection label="カラー" />
        <TweakColor
          label="アクセント"
          value={t.accent === "auto" ? resolve(t, "accent") : t.accent}
          options={[
            ACCENT_PALETTES.vermilion.hex,
            ACCENT_PALETTES.sumi.hex,
            ACCENT_PALETTES.mashiko.hex,
            ACCENT_PALETTES.moss.hex,
          ]}
          onChange={(hex) => {
            const k = Object.keys(ACCENT_PALETTES).find(
              (k) => ACCENT_PALETTES[k].hex.toLowerCase() === String(hex).toLowerCase()
            ) || "vermilion";
            setTweak("accent", k);
          }}
        />
        <TweakRadio
          label="背景"
          value={t.bg}
          options={[
            { value: "auto",  label: "Auto" },
            { value: "white", label: "白" },
            { value: "cream", label: "クリーム" },
            { value: "sumi",  label: "墨" },
          ]}
          onChange={(v) => setTweak("bg", v)}
        />

        <TweakSection label="レイアウト" />
        <TweakRadio
          label="ヒーロー"
          value={t.hero}
          options={[
            { value: "collage",   label: "コラージュ" },
            { value: "fullbleed", label: "フルブリード" },
            { value: "video",     label: "動画風" },
          ]}
          onChange={(v) => setTweak("hero", v)}
        />
        <TweakRadio
          label="メニュー表示"
          value={t.menuMode}
          options={[
            { value: "tabs", label: "タブ" },
            { value: "list", label: "一覧" },
          ]}
          onChange={(v) => setTweak("menuMode", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("mk-root")).render(<MashikoApp />);
