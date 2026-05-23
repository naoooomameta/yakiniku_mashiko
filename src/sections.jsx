// sections.jsx — 焼肉ましこ 各セクションのReactコンポーネント
// 「方向(direction)」と「ヒーローレイアウト(hero)」だけが構造的に分岐する。
// それ以外の見た目はCSS変数(--mk-*)で全て切り替わる。

const { SITE, NAV, STRENGTHS, MENU, FACILITY, INSTAGRAM, ACCESS, VOICE } = window.MASHIKO_DATA;

// image-slot id → assets/ パス。<image-slot src=...> のデフォルト画像。
const SLOT_SRC = {
  "hero-bg":    "assets/hero-roaster.jpg",
  "hero-a":     "assets/hero-roaster.jpg",
  "hero-b":     "assets/hero-interior.jpg",
  "hero-c":     "assets/strength-2-nature.jpg",
  "hero-video": "assets/hero-roaster.jpg",
  "strength-01": "assets/strength-1-roaster.jpg",
  "strength-02": "assets/menu-lunch.jpg",
  "strength-03": "assets/strength-3-family.jpg?v=2",
  "strength-04": "assets/menu-dinner.jpg",
  "strength-05": "assets/facility-dessert.jpg",
  "fac-main": "assets/facility-seats.jpg",
  "fac-1":    "assets/facility-bbq.jpg",
  "fac-2":    "assets/facility-athletic.jpg",
  "fac-3":    "assets/facility-seasons.jpg",
  "ig-1": "assets/menu-dinner.jpg",
  "ig-2": "assets/strength-1-roaster.jpg",
  "ig-3": "assets/facility-seasons.jpg",
  "ig-4": "assets/menu-lunch.jpg",
  "ig-5": "assets/strength-3-family.jpg?v=2",
  "ig-6": "assets/facility-bbq.jpg",
  "ig-7": "assets/menu-kids.jpg",
  "ig-8": "assets/strength-2-nature.jpg",
  "ig-9": "assets/facility-dessert.jpg",
};
const slotSrc = (id) => SLOT_SRC[id] || undefined;

// ──────────────────────────────────────────────────────────────────────
// Nav

function MkNav({ direction }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`mk-nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="mk-nav__logo" aria-label="焼肉ましこ トップへ">
        <span className="mk-nav__logo-ja">焼肉ましこ</span>
        <span className="mk-nav__logo-en">YAKINIKU · MASHIKO</span>
      </a>
      <nav className={`mk-nav__links ${open ? "is-open" : ""}`}>
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
            <span className="mk-nav__ja">{n.ja}</span>
            <span className="mk-nav__en">{n.en}</span>
          </a>
        ))}
        <a href={`tel:${ACCESS.tel}`} className="mk-nav__tel">
          <span aria-hidden="true">☎</span> ご予約
        </a>
      </nav>
      <button
        type="button"
        className="mk-nav__burger"
        aria-label="メニュー"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>
    </header>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Hero — 3 variants: fullbleed / collage / video

function MkHero({ direction, hero }) {
  if (hero === "fullbleed") return <MkHeroFullBleed direction={direction} />;
  if (hero === "video") return <MkHeroVideo direction={direction} />;
  return <MkHeroCollage direction={direction} />;
}

function MkHeroFullBleed({ direction }) {
  return (
    <section id="top" className="mk-hero mk-hero--fullbleed">
      <div className="mk-hero__bg">
        <image-slot
          id="hero-bg"
          shape="rect"
          src={slotSrc("hero-bg")}
          placeholder="ヒーロー背景（森・店外観など 横長）"
          style={{ width: "100%", height: "100%" }}
        ></image-slot>
        <div className="mk-hero__scrim" />
      </div>
      <div className="mk-hero__card">
        <div className="mk-hero__eyebrow">栃木 · 益子 / Tochigi · Mashiko</div>
        <h1 className="mk-hero__title">
          <span className="mk-hero__title-ja">焼肉 ましこ</span>
          <span className="mk-hero__title-en">YAKINIKU · MASHIKO</span>
        </h1>
        <p className="mk-hero__lead">
          {SITE.lead[0]}<br />{SITE.lead[1]}
        </p>
        <div className="mk-hero__meta">
          <span>無煙ロースター</span><span>·</span>
          <span>家族歓迎</span><span>·</span>
          <span>駐車場あり</span>
        </div>
        <div className="mk-hero__cta">
          <a href={`tel:${ACCESS.tel}`} className="mk-btn mk-btn--primary">
            <span aria-hidden="true">☎</span> {ACCESS.tel}
          </a>
          <a href="#menu" className="mk-btn mk-btn--ghost">メニューを見る →</a>
        </div>
      </div>
      <div className="mk-hero__scroll" aria-hidden="true">
        <span>SCROLL</span>
        <i />
      </div>
    </section>
  );
}

function MkHeroCollage({ direction }) {
  return (
    <section id="top" className="mk-hero mk-hero--collage">
      <div className="mk-hero__collage">
        {/* 大きい背景タイル */}
        <div className="mk-coll mk-coll--a">
          <image-slot
            id="hero-a"
            shape="rect"
            src={slotSrc("hero-a")}
            placeholder="メイン写真（焼肉の網）"
            style={{ width: "100%", height: "100%" }}
          ></image-slot>
        </div>
        <div className="mk-coll mk-coll--b">
          <image-slot
            id="hero-b"
            shape="rect"
            src={slotSrc("hero-b")}
            placeholder="店内・家族写真"
            style={{ width: "100%", height: "100%" }}
          ></image-slot>
        </div>
        <div className="mk-coll mk-coll--c">
          <image-slot
            id="hero-c"
            shape="rect"
            src={slotSrc("hero-c")}
            placeholder="益子の風景"
            style={{ width: "100%", height: "100%" }}
          ></image-slot>
        </div>
        <div className="mk-coll mk-coll--stamp" aria-hidden="true">
          <svg viewBox="0 0 120 120">
            <defs>
              <path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
            </defs>
            <text fontSize="11" letterSpacing="2.5">
              <textPath href="#circ">
                YAKINIKU · MASHIKO · TOCHIGI · MASHIKO ·
              </textPath>
            </text>
            <text x="60" y="56" textAnchor="middle" fontSize="14" fontWeight="700">無煙</text>
            <text x="60" y="74" textAnchor="middle" fontSize="14" fontWeight="700">ロースター</text>
          </svg>
        </div>
      </div>

      <div className="mk-hero__text">
        <div className="mk-hero__eyebrow">— 栃木 · 益子 / Tochigi · Mashiko</div>
        <h1 className="mk-hero__title">
          <span className="mk-hero__title-ja">
            ふらりと、<br />焼肉時間。
          </span>
        </h1>
        <p className="mk-hero__lead">{SITE.description}</p>
        <div className="mk-hero__cta">
          <a href={`tel:${ACCESS.tel}`} className="mk-btn mk-btn--primary">
            <span aria-hidden="true">☎</span> ご予約 {ACCESS.tel}
          </a>
          <a href="#menu" className="mk-btn mk-btn--ghost">メニューを見る →</a>
        </div>
      </div>
    </section>
  );
}

function MkHeroVideo({ direction }) {
  return (
    <section id="top" className="mk-hero mk-hero--video">
      <div className="mk-hero__videoFrame">
        <image-slot
          id="hero-video"
          shape="rect"
          src={slotSrc("hero-video")}
          placeholder="動画風プレースホルダ（焼いている網のシズル）"
          style={{ width: "100%", height: "100%" }}
        ></image-slot>
        <div className="mk-hero__playBadge" aria-hidden="true">
          <i className="mk-play" />
          <span>0:24 / Sizzle Reel</span>
        </div>
        <div className="mk-hero__timecode" aria-hidden="true">
          <span>● REC</span>
          <span>MASHIKO · TOCHIGI</span>
          <span>26.05.21</span>
        </div>
      </div>
      <div className="mk-hero__textBelow">
        <div className="mk-hero__eyebrow">焼肉ましこ / Yakiniku Mashiko</div>
        <h1 className="mk-hero__title">
          <span className="mk-hero__title-ja">{SITE.lead[0]}</span>
          <span className="mk-hero__title-ja mk-hero__title-ja--sub">{SITE.lead[1]}</span>
        </h1>
        <div className="mk-hero__cta">
          <a href={`tel:${ACCESS.tel}`} className="mk-btn mk-btn--primary">
            <span aria-hidden="true">☎</span> {ACCESS.tel}
          </a>
          <a href="#menu" className="mk-btn mk-btn--ghost">メニューを見る →</a>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// 強み

function MkStrengths() {
  return (
    <section id="strengths" className="mk-section mk-strengths">
      <header className="mk-secHead">
        <div className="mk-secHead__no">— 01</div>
        <h2 className="mk-secHead__title">
          <span className="mk-secHead__ja">焼肉ましこの、3つの約束。</span>
          <span className="mk-secHead__en">Three Promises from Mashiko</span>
        </h2>
        <p className="mk-secHead__lead">
          煙の出ない焼き台、手の届く価格、家族で過ごせる一日。<br />
          焼肉ましこが大切にしている、3つの軸です。
        </p>
      </header>

      <ol className="mk-strengths__list">
        {STRENGTHS.map((s, i) => (
          <li key={s.no} className="mk-card mk-strength">
            <div className="mk-strength__no">{s.no}</div>
            <div className="mk-strength__body">
              <div className="mk-strength__tag">{s.tag}</div>
              <h3 className="mk-strength__title">{s.title}</h3>
              <p className="mk-strength__text">{s.body}</p>
            </div>
            <div className="mk-strength__img">
              <image-slot
                id={`strength-${s.no}`}
                shape="rounded"
                radius="6"
                src={slotSrc(`strength-${s.no}`)}
                placeholder={`${s.title} 写真`}
                style={{ width: "100%", height: "100%" }}
              ></image-slot>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// メニュー — タブ or 一覧

function MkMenu({ menuMode }) {
  const [active, setActive] = React.useState(MENU.categories[0].id);
  const showAll = menuMode === "list";
  const visibleCats = showAll
    ? MENU.categories
    : MENU.categories.filter((c) => c.id === active);

  return (
    <section id="menu" className="mk-section mk-menu">
      <header className="mk-secHead">
        <div className="mk-secHead__no">— 02</div>
        <h2 className="mk-secHead__title">
          <span className="mk-secHead__ja">お品書き</span>
          <span className="mk-secHead__en">Menu</span>
        </h2>
        <p className="mk-secHead__lead">
          季節と仕入れに合わせて、内容は日々変わります。<br />
          価格は全て税・サ込です。
        </p>
      </header>

      {!showAll && (
        <div className="mk-menu__tabs" role="tablist">
          {MENU.categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              className={`mk-menu__tab ${active === c.id ? "is-active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              <span className="mk-menu__tabJa">{c.ja}</span>
              <span className="mk-menu__tabEn">{c.en}</span>
            </button>
          ))}
        </div>
      )}

      <div className={`mk-menu__cats ${showAll ? "is-list" : ""}`}>
        {visibleCats.map((c) => (
          <article key={c.id} className="mk-menu__cat">
            <header className="mk-menu__catHead">
              <h3>
                <span className="mk-menu__catJa">{c.ja}</span>
                <span className="mk-menu__catEn">{c.en}</span>
              </h3>
              <p className="mk-menu__catNote">{c.note}</p>
            </header>
            <ul className="mk-menu__items">
              {c.items.map((it) => {
                const isCard = it.featured && it.img;
                return (
                  <li
                    key={it.name}
                    className={`mk-menu__item ${it.featured ? "is-featured" : ""} ${isCard ? "mk-menu__item--card" : ""}`}
                  >
                    {isCard && (
                      <div className="mk-menu__itemImg">
                        <img src={it.img} alt={it.name} loading="lazy" decoding="async" />
                      </div>
                    )}
                    <div className="mk-menu__itemBody">
                      <div className="mk-menu__itemHead">
                        <span className="mk-menu__itemName">{it.name}</span>
                        <span className="mk-menu__itemDots" aria-hidden="true" />
                        <span className="mk-menu__itemPrice">¥{it.price}</span>
                      </div>
                      {it.note && <div className="mk-menu__itemNote">{it.note}</div>}
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>

      <p className="mk-menu__foot">
        ※ コース・大人数のご予約は、お電話で承ります。
        アレルギー・苦手食材もお気軽にどうぞ。
      </p>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// 店内 / 施設

function MkFacility() {
  return (
    <section id="facility" className="mk-section mk-facility">
      <header className="mk-secHead">
        <div className="mk-secHead__no">— 03</div>
        <h2 className="mk-secHead__title">
          <span className="mk-secHead__ja">店内の様子</span>
          <span className="mk-secHead__en">Facility</span>
        </h2>
        <p className="mk-secHead__lead">
          小さな町の、小さなお店。<br />
          ふらりと来ても、家族と来ても、ちょうどよいサイズで。
        </p>
      </header>

      <div className="mk-facility__grid">
        <div className="mk-facility__lead">
          <image-slot
            id="fac-main"
            shape="rounded"
            radius="6"
            src={slotSrc("fac-main")}
            placeholder="店内メイン（座敷席）"
            style={{ width: "100%", height: "100%" }}
          ></image-slot>
          <span className="mk-facility__cap">お席 / Seats</span>
        </div>
        <div className="mk-facility__sub mk-facility__sub--1">
          <image-slot id="fac-1" shape="rounded" radius="6" src={slotSrc("fac-1")}
            placeholder="テーブル席" style={{ width: "100%", height: "100%" }}></image-slot>
          <span className="mk-facility__cap">バーベキューハウス / BBQ House</span>
        </div>
        <div className="mk-facility__sub mk-facility__sub--2">
          <image-slot id="fac-2" shape="rounded" radius="6" src={slotSrc("fac-2")}
            placeholder="個室・カウンター" style={{ width: "100%", height: "100%" }}></image-slot>
          <span className="mk-facility__cap">アスレチック / Athletic</span>
        </div>
        <div className="mk-facility__sub mk-facility__sub--3">
          <image-slot id="fac-3" shape="rounded" radius="6" src={slotSrc("fac-3")}
            placeholder="外観・看板" style={{ width: "100%", height: "100%" }}></image-slot>
          <span className="mk-facility__cap">外観 / Front</span>
        </div>
      </div>

      <dl className="mk-facility__specs">
        {FACILITY.map((f) => (
          <div key={f.label} className="mk-facility__spec">
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Voices (お客様の声)

function MkVoices() {
  return (
    <section className="mk-section mk-voices" aria-label="お客様の声">
      <div className="mk-voices__inner">
        <div className="mk-voices__label">— Voices / お品書きから、お客さまの声</div>
        <p className="mk-voices__intro">
          いただいた一皿について、お客さまから届いたひとこと。
        </p>
        <ul className="mk-voices__list">
          {VOICE.map((v, i) => (
            <li key={i} className="mk-voice">
              <div className="mk-voice__order">
                <span className="mk-voice__cat">{v.category}</span>
                <span className="mk-voice__dish">{v.menu}</span>
                <span className="mk-voice__price">¥{v.price}</span>
              </div>
              <span className="mk-voice__quote" aria-hidden="true">"</span>
              <p className="mk-voice__text">{v.quote}</p>
              <div className="mk-voice__by">— {v.by}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Instagram

function MkInstagram() {
  const tiles = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <section id="instagram" className="mk-section mk-ig">
      <header className="mk-secHead">
        <div className="mk-secHead__no">— 04</div>
        <h2 className="mk-secHead__title">
          <span className="mk-secHead__ja">きょうの、ましこ</span>
          <span className="mk-secHead__en">Instagram / @yakiniku_mashiko</span>
        </h2>
        <p className="mk-secHead__lead">
          {INSTAGRAM.caption}
        </p>
      </header>

      <div className="mk-ig__grid">
        {tiles.map((n) => (
          <a key={n} href={INSTAGRAM.url} target="_blank" rel="noreferrer noopener"
             className="mk-ig__tile" aria-label={`Instagram投稿 ${n}`}>
            <image-slot
              id={`ig-${n}`}
              shape="rect"
              src={slotSrc(`ig-${n}`)}
              placeholder={`IG ${n}`}
              style={{ width: "100%", height: "100%" }}
            ></image-slot>
            <span className="mk-ig__heart" aria-hidden="true">♡</span>
          </a>
        ))}
      </div>
      <a href={INSTAGRAM.url} target="_blank" rel="noreferrer noopener"
         className="mk-btn mk-btn--ghost mk-ig__follow">
        Instagramで見る →
      </a>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// アクセス

function MkAccess() {
  return (
    <section id="access" className="mk-section mk-access">
      <header className="mk-secHead">
        <div className="mk-secHead__no">— 05</div>
        <h2 className="mk-secHead__title">
          <span className="mk-secHead__ja">ご予約・アクセス</span>
          <span className="mk-secHead__en">Access</span>
        </h2>
      </header>

      <div className="mk-access__grid">
        <div className="mk-access__map" aria-label="Google マップ">
          <iframe
            title="焼肉ましこの地図"
            src={`https://www.google.com/maps?q=${encodeURIComponent(ACCESS.address)}&hl=ja&z=15&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            className="mk-access__mapBadge"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ACCESS.address)}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Google マップで開く →
          </a>
        </div>

        <div className="mk-access__info">
          <dl className="mk-access__info-list">
            <div>
              <dt>住所</dt>
              <dd>{ACCESS.address}</dd>
            </div>
            <div>
              <dt>電話</dt>
              <dd>
                <a href={`tel:${ACCESS.tel}`}>{ACCESS.tel}</a>
              </dd>
            </div>
            <div>
              <dt>営業時間</dt>
              <dd>
                {ACCESS.hours.map((h) => (
                  <div key={h.day}>
                    <span className="mk-access__day">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </dd>
            </div>
            <div>
              <dt>定休日</dt>
              <dd>{ACCESS.closed}</dd>
            </div>
            <div>
              <dt>交通</dt>
              <dd>{ACCESS.station}</dd>
            </div>
            <div>
              <dt>駐車場</dt>
              <dd>{ACCESS.parking}</dd>
            </div>
          </dl>

          <div className="mk-access__cta">
            <a href={`tel:${ACCESS.tel}`} className="mk-btn mk-btn--primary">
              <span aria-hidden="true">☎</span> 予約・お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Footer

function MkFooter() {
  return (
    <footer className="mk-footer">
      <div className="mk-footer__top">
        <div className="mk-footer__brand">
          <div className="mk-footer__brand-ja">焼肉ましこ</div>
          <div className="mk-footer__brand-en">YAKINIKU · MASHIKO</div>
          <p className="mk-footer__brand-sub">
            無煙ロースターで愉しむ、<br />益子の本格焼肉。
          </p>
        </div>
        <div className="mk-footer__cols">
          <div>
            <div className="mk-footer__h">店舗</div>
            <ul>
              <li>{ACCESS.address}</li>
              <li>TEL {ACCESS.tel}</li>
            </ul>
          </div>
          <div>
            <div className="mk-footer__h">営業</div>
            <ul>
              {ACCESS.hours.map((h) => (
                <li key={h.day}>{h.day} {h.time}</li>
              ))}
              <li>定休：{ACCESS.closed}</li>
            </ul>
          </div>
          <div>
            <div className="mk-footer__h">Follow</div>
            <ul>
              <li><a href={INSTAGRAM.url} target="_blank" rel="noreferrer noopener">Instagram {INSTAGRAM.handle}</a></li>
              <li><a href={`tel:${ACCESS.tel}`}>電話で予約</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mk-footer__bottom">
        <span>© 焼肉ましこ</span>
        <span>益子町, 栃木 / Mashiko, Tochigi</span>
      </div>
    </footer>
  );
}

Object.assign(window, {
  MkNav, MkHero, MkStrengths, MkMenu, MkFacility, MkVoices, MkInstagram, MkAccess, MkFooter,
});
