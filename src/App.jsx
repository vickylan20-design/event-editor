import { useEffect, useMemo, useState } from "react";
import tvbsLogo from "./assets/header-tvbs-logo.svg";
import adDesktop from "./assets/ad-desktop-970x250.jpg";
import adMobile from "./assets/ad-mobile-320x100.jpg";
import elegantHeroPlaceholder from "./assets/elegant-hero-placeholder.jpg";

const kitStyles = {
  minimal: {
    label: "簡約",
    kit: "Vibe kit",
    className: "kit-vibe",
    tone: "清楚、模組化、快速掃讀",
  },
  playful: {
    label: "活潑",
    kit: "Pulse kit",
    className: "kit-pulse",
    tone: "明亮、親近、有節奏感",
  },
  pro: {
    label: "專業",
    kit: "Audi kit",
    className: "kit-audi",
    tone: "俐落、精準、資訊權威",
  },
  editorial: {
    label: "優雅",
    kit: "Elegant kit",
    className: "kit-spectrum",
    tone: "柔和、精緻、留白優先",
  },
  race: {
    label: "競賽感",
    kit: "Aalto University kit",
    className: "kit-aalto",
    tone: "高對比、賽事節奏、醒目分區",
  },
};

const pageTypes = [
  { key: "home", label: "賽事焦點首頁" },
  { key: "videos", label: "影音專區" },
  { key: "moments", label: "精彩瞬間" },
  { key: "athletes", label: "健將點名" },
  { key: "medals", label: "亞運獎牌榜" },
];

const initialPageOrder = pageTypes.map((page) => page.key);

const moduleLibrary = [
  { type: "eventHero", label: "賽事主視覺", hint: "Logo、主標、運動員圖層" },
  { type: "scoreCards", label: "最新比分", hint: "最新三場賽事與 CTA" },
  { type: "adBanner", label: "廣告版位", hint: "頁首或段落間贊助版位" },
  { type: "newsGrid", label: "焦點新聞", hint: "首頁卡片與文章列表" },
  { type: "videoShelf", label: "影音播放區", hint: "主影片與 Playlist" },
  { type: "galleryGrid", label: "精彩瞬間", hint: "照片牆與燈箱" },
  { type: "athleteCards", label: "健將點名", hint: "選手卡、項目、焦點數據" },
  { type: "taiwanMedals", label: "中華台北獎牌榜", hint: "首頁重點獎牌卡" },
  { type: "medalTable", label: "獎牌榜", hint: "排名、國家、金銀銅總計" },
  { type: "textBlock", label: "說明文字", hint: "賽事規則、轉播資訊、註記" },
];

const imagePool = {
  badminton:
    "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80",
  elegantHero: elegantHeroPlaceholder,
  boxing:
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80",
  runner:
    "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1200&q=80",
  court:
    "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
  stadium:
    "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1200&q=80",
  training:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
};

const initialPages = {
  home: {
    title: "賽事焦點首頁",
    sections: [
      createModule("eventHero", "hero-home"),
      createModule("adBanner", "ad-home"),
      createModule("scoreCards", "scores-home"),
      createModule("taiwanMedals", "taiwan-medals-home"),
      createModule("medalTable", "medals-home", { compact: true, title: "各國獎牌排行榜" }),
      createModule("newsGrid", "news-home", { title: "賽事焦點" }),
      createModule("videoShelf", "video-home", { title: "影音專區", compact: true }),
      createModule("textBlock", "terms-home"),
    ],
  },
  videos: {
    title: "影音專區",
    sections: [
      createModule("eventHero", "hero-videos"),
      createModule("adBanner", "ad-videos"),
      createModule("videoShelf", "video-main", { title: "主打影音", compact: false }),
      createModule("videoShelf", "playlist-1", { title: "Playlist 1", compact: true }),
      createModule("videoShelf", "playlist-2", { title: "Playlist 2", compact: true }),
    ],
  },
  moments: {
    title: "精彩瞬間",
    sections: [
      createModule("eventHero", "hero-moments"),
      createModule("adBanner", "ad-moments"),
      createModule("galleryGrid", "gallery-moments"),
    ],
  },
  athletes: {
    title: "健將點名",
    sections: [
      createModule("eventHero", "hero-athletes"),
      createModule("adBanner", "ad-athletes"),
      createModule("athleteCards", "athletes-list"),
      createModule("newsGrid", "athletes-news", { title: "健將最新消息" }),
    ],
  },
  medals: {
    title: "亞運獎牌榜",
    sections: [
      createModule("eventHero", "hero-medals"),
      createModule("adBanner", "ad-medals"),
      createModule("medalTable", "medal-full", { compact: false, title: "各國獎牌排行榜" }),
    ],
  },
};

const editableFields = {
  eyebrow: "眉標",
  title: "標題",
  subtitle: "副標",
  cta: "按鈕",
  image: "圖片網址",
  sponsor: "贊助標籤",
  body: "說明文字",
  updatedAt: "更新時間",
  countdownTarget: "比賽開始時間",
};

const heroTextControls = [
  { field: "eyebrow", visibleField: "showEyebrow", label: "眉標", input: "input" },
  { field: "title", visibleField: "showTitle", label: "標題", input: "textarea", rows: 4 },
  { field: "subtitle", visibleField: "showSubtitle", label: "副標", input: "textarea", rows: 3 },
  {
    field: "countdownTarget",
    visibleField: "showCountdown",
    label: "比賽開始",
    input: "input",
    placeholder: "YYYY/MM/DD HH:mm，例如 2026/04/30 20:00",
    hint: "支援 YYYY/MM/DD HH:mm 或 YYYY/MM/DD HH:mm:ss，系統會自動換算天、時、分。",
  },
];

const STORAGE_KEY = "sports-event-studio-state-v1";
const PREVIEW_STORAGE_KEY = "sports-event-studio-preview-v1";

const previewDevices = {
  desktop: {
    label: "桌機",
    breakpoint: "xl",
    width: 1280,
    height: 900,
  },
  mobile: {
    label: "手機",
    breakpoint: "base",
    width: 390,
    height: 844,
  },
};

function App() {
  const previewMode = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("preview") : "";
  if (previewMode === "desktop" || previewMode === "mobile") {
    return <PreviewOnly initialMode={previewMode} />;
  }

  return <StudioApp />;
}

function StudioApp() {
  const initialStudioState = useMemo(() => getInitialStudioState(), []);
  const [styleKey, setStyleKey] = useState(initialStudioState.styleKey);
  const [pageKey, setPageKey] = useState(initialStudioState.pageKey);
  const [pages, setPages] = useState(initialStudioState.pages);
  const [pageOrder, setPageOrder] = useState(initialStudioState.pageOrder);
  const [selectedId, setSelectedId] = useState(initialStudioState.selectedId);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [currentTime, setCurrentTime] = useState(() => Date.now());
  const [saveStatus, setSaveStatus] = useState(initialStudioState.restored ? "已載入已儲存資料" : "尚未儲存");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [previewMenuOpen, setPreviewMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setCurrentTime(Date.now()), 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  function markUnsaved() {
    setHasUnsavedChanges(true);
    setSaveStatus("尚未儲存變更");
  }

  function saveStudioState() {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          styleKey,
          pageKey,
          pages,
          pageOrder,
          selectedId,
          savedAt: new Date().toISOString(),
        }),
      );
      setHasUnsavedChanges(false);
      setSaveStatus("已儲存");
    } catch (error) {
      const isQuotaError =
        error?.name === "QuotaExceededError" ||
        error?.name === "NS_ERROR_DOM_QUOTA_REACHED" ||
        error?.code === 22 ||
        error?.code === 1014;
      setSaveStatus(isQuotaError ? "儲存失敗：圖片容量過大" : "儲存失敗");
    }
  }

  const activeStyle = kitStyles[styleKey];
  const activePage = pages[pageKey] ?? pages.home ?? initialPages.home;
  const activeSections = activePage.sections ?? [];
  const activePageTitle = activePage.title || "未命名頁面";
  const selectedSection = activeSections.find((section) => section.id === selectedId) ?? activeSections[0];

  const activeSchema = useMemo(
    () =>
      JSON.stringify(
        {
          industry: "sports",
          visualSystem: kitStyles[styleKey].kit,
          page: pageKey,
          title: activePageTitle,
          sections: activeSections,
        },
        null,
        2,
      ),
    [activePageTitle, activeSections, pageKey, styleKey],
  );

  function switchPage(nextPageKey) {
    if (!pages[nextPageKey]) return;
    setPageKey(nextPageKey);
    setSelectedId(pages[nextPageKey].sections?.[0]?.id ?? "");
    setLightboxItem(null);
    markUnsaved();
  }

  function switchStyle(nextStyleKey) {
    setStyleKey(nextStyleKey);
    markUnsaved();
  }

  function addSection(type) {
    const module = createModule(type);
    setPages((current) => ({
      ...current,
      [pageKey]: {
        ...current[pageKey],
        sections: [...(current[pageKey].sections ?? []), module],
      },
    }));
    setSelectedId(module.id);
    markUnsaved();
  }

  function renamePage(targetPageKey, title) {
    setPages((current) => ({
      ...current,
      [targetPageKey]: {
        ...current[targetPageKey],
        title,
      },
    }));
    markUnsaved();
  }

  function addBlankPage() {
    const nextPageKey = `page-${Date.now()}`;
    setPages((current) => ({
      ...current,
      [nextPageKey]: {
        title: "空白頁面",
        sections: [],
      },
    }));
    setPageOrder((current) => [...current, nextPageKey]);
    setPageKey(nextPageKey);
    setSelectedId("");
    setLightboxItem(null);
    markUnsaved();
  }

  function deletePage(targetPageKey) {
    if (pageOrder.length <= 1) return;
    const nextOrder = pageOrder.filter((key) => key !== targetPageKey);
    const nextPageKey = targetPageKey === pageKey ? nextOrder[0] : pageKey;

    setPages((current) => {
      const { [targetPageKey]: _removed, ...nextPages } = current;
      return nextPages;
    });
    setPageOrder(nextOrder);

    if (targetPageKey === pageKey) {
      setPageKey(nextPageKey);
      setSelectedId(pages[nextPageKey]?.sections?.[0]?.id ?? "");
      setLightboxItem(null);
    }

    markUnsaved();
  }

  function updateSection(id, patch) {
    setPages((current) => ({
      ...current,
      [pageKey]: {
        ...current[pageKey],
        sections: current[pageKey].sections.map((section) => (section.id === id ? { ...section, ...patch } : section)),
      },
    }));
    markUnsaved();
  }

  function updateNestedItem(sectionId, index, patch) {
    setPages((current) => ({
      ...current,
      [pageKey]: {
        ...current[pageKey],
        sections: current[pageKey].sections.map((section) => {
          if (section.id !== sectionId || !section.items) return section;
          return {
            ...section,
            items: section.items.map((item, itemIndex) => (itemIndex === index ? { ...item, ...patch } : item)),
          };
        }),
      },
    }));
    markUnsaved();
  }

  function updateMedalRow(sectionId, index, patch) {
    setPages((current) => ({
      ...current,
      [pageKey]: {
        ...current[pageKey],
        sections: current[pageKey].sections.map((section) => {
          if (section.id !== sectionId || !section.medals) return section;
          return {
            ...section,
            medals: section.medals.map((row, rowIndex) => (rowIndex === index ? { ...row, ...patch } : row)),
          };
        }),
      },
    }));
    markUnsaved();
  }

  function moveSection(id, direction) {
    const index = activeSections.findIndex((section) => section.id === id);
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= activeSections.length) return;
    const nextSections = [...activeSections];
    const [section] = nextSections.splice(index, 1);
    nextSections.splice(nextIndex, 0, section);
    setPages((current) => ({
      ...current,
      [pageKey]: { ...current[pageKey], sections: nextSections },
    }));
    markUnsaved();
  }

  function removeSection(id) {
    const nextSections = activeSections.filter((section) => section.id !== id);
    setPages((current) => ({
      ...current,
      [pageKey]: { ...current[pageKey], sections: nextSections },
    }));
    setSelectedId(nextSections[0]?.id ?? "");
    markUnsaved();
  }

  function openPreview(mode) {
    if (typeof window === "undefined") return;
    const device = previewDevices[mode];
    setPreviewMenuOpen(false);
    const previewPayload = {
      styleKey,
      pageKey,
      pages,
      pageOrder,
      selectedId,
      openedAt: new Date().toISOString(),
    };
    window.sessionStorage.setItem(PREVIEW_STORAGE_KEY, JSON.stringify(previewPayload));

    const previewUrl = new URL(window.location.href);
    previewUrl.searchParams.set("preview", mode);
    const left = Math.max(0, Math.round((window.screen.width - device.width) / 2));
    const top = Math.max(0, Math.round((window.screen.height - device.height) / 2));
    window.open(
      previewUrl.toString(),
      `sports-event-preview-${mode}`,
      `width=${device.width},height=${device.height},left=${left},top=${top},resizable=yes,scrollbars=yes`,
    );
  }

  return (
    <main className={`builder-app ${activeStyle.className}`}>
      <aside className="builder-sidebar" aria-label="專題站設定">
        <div className="brand-lockup">
          <span>AG</span>
          <div>
            <strong>Sports Event Studio</strong>
            <p>賽事專題站編輯器</p>
          </div>
        </div>

        <section className="control-group">
          <div className="group-heading">
            <h2>風格 Kit</h2>
            <p>{activeStyle.kit} / {activeStyle.tone}</p>
          </div>
          <div className="style-grid">
            {Object.entries(kitStyles).map(([key, kit]) => (
              <button
                className={`style-chip ${styleKey === key ? "is-active" : ""}`}
                key={key}
                onClick={() => switchStyle(key)}
                type="button"
              >
                <span>{kit.label}</span>
                <small>{kit.kit}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="control-group">
          <div className="group-heading">
            <h2>頁面</h2>
            <p>目前共 {pageOrder.length} 頁</p>
          </div>
          <div className="page-list">
            {pageOrder.map((key) => (
              <div className={`page-row ${pageKey === key ? "is-active" : ""}`} key={key}>
                <button
                  aria-label={`切換到${pages[key]?.title || "未命名頁面"}`}
                  className="page-select"
                  onClick={() => switchPage(key)}
                  type="button"
                />
                <input
                  aria-label="頁面名稱"
                  placeholder="未命名頁面"
                  value={pages[key]?.title ?? ""}
                  onChange={(event) => renamePage(key, event.target.value)}
                />
                <button
                  aria-label={`刪除${pages[key]?.title || "未命名頁面"}`}
                  className="page-delete"
                  disabled={pageOrder.length <= 1}
                  onClick={() => deletePage(key)}
                  type="button"
                >
                  刪除
                </button>
              </div>
            ))}
            <button className="add-page-button" onClick={addBlankPage} type="button">
              <span>新增空白頁面</span>
              <strong aria-hidden="true">+</strong>
            </button>
          </div>
        </section>

        <section className="control-group">
          <div className="group-heading">
            <h2>新增模組</h2>
            <p>模組共用，內容與風格分離</p>
          </div>
          <div className="block-list">
            {moduleLibrary.map((module) => (
              <button className="block-button" key={module.type} onClick={() => addSection(module.type)} type="button">
                <span>{module.label}</span>
                <small>{module.hint}</small>
                <strong aria-hidden="true">+</strong>
              </button>
            ))}
          </div>
        </section>
      </aside>

      <section className="preview-stage" aria-label="專題站預覽">
        <header className="builder-topbar">
          <div>
            <p>{activeStyle.kit} / {activePageTitle}</p>
            <h1>{activePageTitle}</h1>
          </div>
          <div className="topbar-actions">
            <span
              className={`save-status ${hasUnsavedChanges ? "is-dirty" : ""} ${saveStatus === "儲存失敗" ? "is-error" : ""}`}
            >
              {saveStatus}
            </span>
            <button className="primary-button" onClick={saveStudioState} type="button">
              儲存
            </button>
            <div className="preview-menu">
              <button
                aria-expanded={previewMenuOpen}
                aria-haspopup="menu"
                className="secondary-button preview-menu-trigger"
                onClick={() => setPreviewMenuOpen((open) => !open)}
                type="button"
              >
                預覽
              </button>
              {previewMenuOpen ? (
                <div className="preview-menu-panel" role="menu">
                  <button onClick={() => openPreview("desktop")} role="menuitem" type="button">
                    <span>桌機</span>
                    <small>Tailwind xl / 1280px</small>
                  </button>
                  <button onClick={() => openPreview("mobile")} role="menuitem" type="button">
                    <span>手機</span>
                    <small>Tailwind base / 390px</small>
                  </button>
                </div>
              ) : null}
            </div>
            <button className="secondary-button" onClick={() => navigator.clipboard?.writeText(activeSchema)} type="button">
              複製頁面 JSON
            </button>
          </div>
        </header>

        <div className="page-preview">
          <EventSite
            pageKey={pageKey}
            pageTitle={activePageTitle}
            styleKey={styleKey}
            sections={activeSections}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onSwitchPage={switchPage}
            onOpenLightbox={setLightboxItem}
            currentTime={currentTime}
            pageOrder={pageOrder}
            pages={pages}
          />
        </div>
      </section>

      <aside className="inspector" aria-label="模組編輯">
        {selectedSection ? (
          <>
            <div className="inspector-header">
              <p>正在編輯</p>
              <h2>{getModuleLabel(selectedSection.type)}</h2>
            </div>
            <SectionEditor section={selectedSection} onChange={(patch) => updateSection(selectedSection.id, patch)} />
            {selectedSection.type === "eventHero" ? (
              <>
                <HeroBackgroundEditor section={selectedSection} onChange={(patch) => updateSection(selectedSection.id, patch)} />
              </>
            ) : null}
            {selectedSection.type === "taiwanMedals" ? (
              <TaiwanMedalsBackgroundEditor section={selectedSection} onChange={(patch) => updateSection(selectedSection.id, patch)} />
            ) : null}
            {selectedSection.items ? (
              <NestedItemsEditor section={selectedSection} onChange={updateNestedItem} />
            ) : null}
            {selectedSection.medals ? (
              <MedalRowsEditor section={selectedSection} onChange={updateMedalRow} />
            ) : null}
            <div className="section-actions">
              <button type="button" onClick={() => moveSection(selectedSection.id, -1)}>上移</button>
              <button type="button" onClick={() => moveSection(selectedSection.id, 1)}>下移</button>
              <button className="danger-button" type="button" onClick={() => removeSection(selectedSection.id)}>刪除</button>
            </div>
            <details className="json-box">
              <summary>目前頁面 Schema</summary>
              <pre>{activeSchema}</pre>
            </details>
          </>
        ) : (
          <p className="empty-state">這個頁面尚未有模組。</p>
        )}
      </aside>

      {lightboxItem ? <MomentLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} /> : null}
    </main>
  );
}

function PreviewOnly({ initialMode }) {
  const previewParams = useMemo(() => {
    if (typeof window === "undefined") return new URLSearchParams();
    return new URLSearchParams(window.location.search);
  }, []);
  const initialPreviewState = useMemo(() => {
    if (typeof window === "undefined") return getInitialStudioState();
    try {
      const parsed = JSON.parse(window.sessionStorage.getItem(PREVIEW_STORAGE_KEY));
      if (!parsed?.pages || !parsed?.pageOrder?.length) return getInitialStudioState();
      return parsed;
    } catch {
      return getInitialStudioState();
    }
  }, []);
  const requestedPageKey = previewParams.get("page");
  const requestedStyleKey = previewParams.get("style");
  const [pageKey, setPageKey] = useState(requestedPageKey || initialPreviewState.pageKey);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [currentTime, setCurrentTime] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setCurrentTime(Date.now()), 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const device = previewDevices[initialMode];
    document.title = `${device.label}預覽 - Sports Event Studio`;
  }, [initialMode]);

  const styleKey = kitStyles[requestedStyleKey] ? requestedStyleKey : kitStyles[initialPreviewState.styleKey] ? initialPreviewState.styleKey : "minimal";
  const pages = initialPreviewState.pages;
  const pageOrder = initialPreviewState.pageOrder;
  const safePageKey = pages[pageKey] ? pageKey : pageOrder[0];
  const activePage = pages[safePageKey] ?? initialPages.home;
  const device = previewDevices[initialMode];

  return (
    <main className={`preview-only builder-app ${kitStyles[styleKey].className}`}>
      <header className="preview-toolbar">
        <div>
          <strong>{device.label}預覽</strong>
          <span>Tailwind {device.breakpoint} / {device.width}px</span>
        </div>
        <button type="button" onClick={() => window.close()}>關閉預覽</button>
      </header>
      <div className="preview-only-canvas">
        <EventSite
          pageKey={safePageKey}
          pageTitle={activePage.title || "未命名頁面"}
          styleKey={styleKey}
          sections={activePage.sections ?? []}
          selectedId=""
          onSelect={() => {}}
          onSwitchPage={setPageKey}
          onOpenLightbox={setLightboxItem}
          currentTime={currentTime}
          pageOrder={pageOrder}
          pages={pages}
        />
      </div>
      {lightboxItem ? <MomentLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} /> : null}
    </main>
  );
}

function EventSite({ pageKey, pageTitle, styleKey, sections, selectedId, onSelect, onSwitchPage, onOpenLightbox, currentTime, pageOrder, pages }) {
  const firstPageKey = pageOrder[0];
  return (
    <article className="event-site">
      <nav className="site-nav">
        <button className="site-logo" type="button" onClick={() => onSwitchPage(firstPageKey)} aria-label="回到首頁">
          <img src={tvbsLogo} alt="TVBS NEWS" />
        </button>
        <div>
          {pageOrder.map((key) => (
            <button
              className={pageKey === key ? "is-active" : ""}
              key={key}
              onClick={() => onSwitchPage(key)}
              type="button"
            >
              {pages[key]?.title || "未命名頁面"}
            </button>
          ))}
        </div>
      </nav>
      {sections.map((section) => (
        <section
          className={`preview-section is-${section.type} ${selectedId === section.id ? "is-selected" : ""}`}
          key={section.id}
          onClick={() => onSelect(section.id)}
        >
          <ModuleRenderer
            isHomePage={pageKey === "home"}
            pageTitle={pageTitle}
            section={section}
            styleKey={styleKey}
            onOpenLightbox={onOpenLightbox}
            currentTime={currentTime}
          />
        </section>
      ))}
      <footer className="event-footer">© TVBS Media Inc. All Rights Reserved.</footer>
    </article>
  );
}

function ModuleRenderer({ section, isHomePage, pageTitle, styleKey, onOpenLightbox, currentTime }) {
  if (section.type === "eventHero") {
    const showCountdown = isHomePage && section.showCountdown;
    const countdown = getCountdownParts(section.countdownTarget, currentTime);
    const heroTitle = isHomePage ? section.title : pageTitle;
    const displayHeroTitle = styleKey === "playful" && isHomePage ? stripHeroSeparators(heroTitle) : heroTitle;
    const displaySubtitle = isHomePage ? section.subtitle : "杭州亞運會專題";
    const showEyebrow = section.showEyebrow !== false && Boolean(section.eyebrow);
    const showTitle = section.showTitle !== false && Boolean(displayHeroTitle);
    const showSubtitle = section.showSubtitle !== false && Boolean(displaySubtitle);
    const primaryHeroPlaceholder = styleKey === "editorial" ? imagePool.elegantHero : imagePool.badminton;
    return (
      <div className={`event-hero ${isHomePage ? "is-home-hero" : "is-page-hero"} ${showCountdown ? "has-countdown" : ""} ${section.backgroundImage ? "has-custom-bg" : ""} ${section.mobileBackgroundImage ? "has-mobile-bg" : ""}`}>
        <div className="hero-athletes">
          {section.backgroundImage ? <img className="hero-custom-bg" src={section.backgroundImage} alt="" /> : null}
          {section.mobileBackgroundImage ? <img className="hero-mobile-bg" src={section.mobileBackgroundImage} alt="" /> : null}
          <img className="hero-placeholder-bg" src={primaryHeroPlaceholder} alt="" />
          <img className="hero-placeholder-bg" src={imagePool.boxing} alt="" />
          <img className="hero-placeholder-bg" src={imagePool.runner} alt="" />
        </div>
        <img className="hero-mobile-logo" src={tvbsLogo} alt="TVBS NEWS" />
        <div className="hero-title">
          {showEyebrow ? <span>{section.eyebrow}</span> : null}
          {showTitle ? <h2>{displayHeroTitle}</h2> : null}
          {showSubtitle ? <p>{displaySubtitle}</p> : null}
        </div>
        {showCountdown ? (
          <aside className="hero-countdown-widget" aria-label="比賽開始倒數">
            <span>比賽即將開始</span>
            <div>
              <strong>{countdown.days}<small>天</small></strong>
              <strong>{countdown.hours}<small>時</small></strong>
              <strong>{countdown.minutes}<small>分</small></strong>
            </div>
          </aside>
        ) : null}
        <aside className="race-hero-side" aria-label="競賽感焦點文章">
          <h3>Recent Post</h3>
          <img src={imagePool.court} alt="" />
          <p>Goals that make games really memorable</p>
        </aside>
        <div className="race-action-rail" aria-hidden="true">
          <span>票</span>
          <span>圖</span>
          <span>卡</span>
        </div>
      </div>
    );
  }

  if (section.type === "adBanner") {
    return (
      <picture className="ad-banner">
        <source media="(max-width: 820px)" srcSet={adMobile} />
        <img src={adDesktop} alt="廣告版位示意" />
      </picture>
    );
  }

  if (section.type === "scoreCards") {
    const scoreTrackId = `${section.id}-score-track`;
    return (
      <div className="score-section">
        <div className="score-section-header">
          <div>
            <span>{section.eyebrow}</span>
            <h2>{section.title}</h2>
          </div>
          <ScoreScrollActions trackId={scoreTrackId} />
        </div>
        <div className="score-carousel" aria-label="最新三場賽事比分">
          <div className="match-card-grid" id={scoreTrackId}>
            {section.items.slice(0, 3).map((item) => (
              <article className="match-card" key={`${item.home}-${item.away}`}>
                <time>{item.date}</time>
                <div className="match-scoreline">
                  <span>{item.homeFlag}</span>
                  <strong>{item.homeScore} - {item.awayScore}</strong>
                  <span>{item.awayFlag}</span>
                </div>
                <p>{item.league}</p>
                <small>{item.venue}</small>
              </article>
            ))}
          </div>
        </div>
        <button className="score-cta" type="button">{section.cta}</button>
      </div>
    );
  }

  if (section.type === "newsGrid") {
    return (
      <div className="content-section">
        <SectionTitle title={section.title} />
        <div className="news-grid">
          {section.items.map((item, index) => (
            <article key={`${item.title}-${index}`}>
              <img src={item.image} alt="" />
              <div className="text-container">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "videoShelf") {
    const [feature, ...clips] = section.items.slice(0, 4);
    return (
      <div className={`content-section video-section ${section.compact ? "is-compact" : ""}`}>
        <SectionTitle title={section.title} />
        <div className="video-layout">
          <article className="featured-video">
            <div className="video-thumb">
              <img src={feature.image} alt="" />
              <span className="play-button">▶</span>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
          <div className="video-grid">
            {clips.map((item, index) => (
              <article key={`${item.title}-${index}`}>
                <div>
                  <img src={item.image} alt="" />
                  <span className="play-button">▶</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <button className="more-button" type="button">看更多</button>
      </div>
    );
  }

  if (section.type === "galleryGrid") {
    return (
      <div className="content-section">
        <SectionTitle title={section.title} />
        <div className="gallery-grid">
          {section.items.map((item, index) => (
            <button key={`${item.title}-${index}`} onClick={() => onOpenLightbox(item)} type="button">
              <img src={item.image} alt="" />
              <strong>{item.title}</strong>
              <span>{item.date}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "athleteCards") {
    return (
      <div className="content-section">
        <SectionTitle title={section.title} />
        <div className="athlete-grid">
          {section.items.map((item) => (
            <article key={item.title}>
              <img src={item.image} alt="" />
              <div>
                <span>{item.sport}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "medalTable") {
    return (
      <div className={`content-section medal-section ${section.compact ? "is-compact" : ""}`}>
        <SectionTitle title={section.title} />
        <table className="medal-table">
          <thead>
            <tr>
              <th>排行</th>
              <th>國家</th>
              <th><span className="medal-icon gold">●</span>金</th>
              <th><span className="medal-icon silver">●</span>銀</th>
              <th><span className="medal-icon bronze">●</span>銅</th>
              <th>總計</th>
            </tr>
          </thead>
          <tbody>
            {section.medals.map((row) => (
              <tr key={row.rank}>
                <td>{row.rank}</td>
                <td>
                  <span className="country-cell">
                    <span className="country-flag" aria-hidden="true">{row.flag}</span>
                    <span>{row.country}</span>
                  </span>
                </td>
                <td>{row.gold}</td>
                <td>{row.silver}</td>
                <td>{row.bronze}</td>
                <td><span className="total-badge">{row.total}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="update-note">更新時間：2026-04-13 17:48</p>
      </div>
    );
  }

  if (section.type === "taiwanMedals") {
    return (
      <div
        className={`content-section taiwan-medals-section ${section.backgroundImage ? "has-custom-bg" : ""}`}
        style={section.backgroundImage ? { "--taiwan-medals-bg": `url("${section.backgroundImage}")` } : undefined}
      >
        <div className="taiwan-medal-panel">
          <SectionTitle title={section.title} />
          <p className="update-note">{section.updatedAt} 更新</p>
          <div className="taiwan-medal-podium">
            {section.items.map((item) => (
              <article className={`taiwan-medal-card ${item.tone}`} key={item.label}>
                {item.image ? (
                  <img className="taiwan-medal-image" src={item.image} alt="" />
                ) : (
                  <div className="medal-coin" aria-hidden="true">{item.icon}</div>
                )}
                <span>{item.label}</span>
                <div className="taiwan-medal-count">
                  <strong>{item.count}</strong>
                  <small>枚</small>
                </div>
                <p className="taiwan-medal-detail">{item.event}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-block">
      <SectionTitle title={section.title} />
      <p>{section.body}</p>
    </div>
  );
}

function ScoreScrollActions({ trackId }) {
  return (
    <div className="score-scroll-actions" aria-hidden="false">
      <button className="is-prev" type="button" onClick={() => scrollScoreTrack(trackId, -1)} aria-label="查看上一場比分">
        <ArrowIcon />
      </button>
      <button type="button" onClick={() => scrollScoreTrack(trackId, 1)} aria-label="查看下一場比分">
        <ArrowIcon />
      </button>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.637667 4.49729L10.148 4.49729L6.98465 1.33394C6.78834 1.13763 6.78834 0.819431 6.98465 0.623122C7.18096 0.426814 7.49916 0.426814 7.69547 0.623122L11.7169 4.64456L11.7516 4.68252C11.9127 4.87996 11.901 5.17133 11.7169 5.35538L7.69547 9.37682C7.49916 9.57313 7.18096 9.57313 6.98465 9.37682C6.78834 9.18051 6.78834 8.86231 6.98465 8.666L10.148 5.50265L0.637666 5.50265C0.360045 5.50265 0.134988 5.27759 0.134988 4.99997C0.134988 4.72235 0.360045 4.49729 0.637667 4.49729Z" fill="black" />
    </svg>
  );
}

function stripHeroSeparators(value) {
  return String(value ?? "").replace(/\s*[-－–—]\s*/g, "");
}

function SectionTitle({ title }) {
  return (
    <header className="section-title">
      <span></span>
      <h2>{title}</h2>
    </header>
  );
}

function parseCountdownTarget(value) {
  if (!value) return null;
  const match = String(value)
    .trim()
    .match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})(?:\s+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?$/);
  if (!match) return null;
  const [, year, month, day, hour = "0", minute = "0", second = "0"] = match;
  const target = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second),
  );

  if (
    target.getFullYear() !== Number(year) ||
    target.getMonth() !== Number(month) - 1 ||
    target.getDate() !== Number(day)
  ) {
    return null;
  }

  return target;
}

function getCountdownParts(targetValue, nowValue) {
  const target = parseCountdownTarget(targetValue);
  if (!target) return { days: "00", hours: "00", minutes: "00" };

  const remaining = Math.max(0, target.getTime() - nowValue);
  const totalMinutes = Math.floor(remaining / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
  };
}

function normalizeSection(section) {
  if (section.type === "eventHero") {
    return {
      ...section,
      showEyebrow: section.showEyebrow !== false,
      showTitle: section.showTitle !== false,
      showSubtitle: section.showSubtitle !== false,
      countdownTarget: section.countdownTarget || "2026/04/30 20:00",
      backgroundImage: section.backgroundImage || "",
      mobileBackgroundImage: section.mobileBackgroundImage || "",
    };
  }

  if (section.type === "taiwanMedals") {
    return {
      ...section,
      items: section.items?.map((item) => ({
        ...item,
        shortLabel: item.shortLabel || item.label?.replace("牌", "") || "",
        event: item.event || "競賽項目",
        image: item.image || "",
      })) ?? [],
      backgroundImage: section.backgroundImage || "",
    };
  }

  return section;
}

function scrollScoreTrack(trackId, direction) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const cards = Array.from(track.querySelectorAll(".match-card"));
  if (!cards.length) return;

  const maxScroll = track.scrollWidth - track.clientWidth;
  const targets = cards.map((card) => {
    const centered = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
    return Math.max(0, Math.min(centered, maxScroll));
  });
  const current = track.scrollLeft;
  const nextTarget =
    direction > 0
      ? targets.find((target) => target > current + 2) ?? maxScroll
      : [...targets].reverse().find((target) => target < current - 2) ?? 0;

  track.scrollTo({ left: nextTarget, behavior: "smooth" });
}

function getInitialStudioState() {
  const fallback = {
    styleKey: "minimal",
    pageKey: "home",
    pages: initialPages,
    pageOrder: initialPageOrder,
    selectedId: initialPages.home.sections[0].id,
    restored: false,
  };

  if (typeof window === "undefined") return fallback;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return fallback;

    const parsed = JSON.parse(saved);
    const savedPages = parsed?.pages && typeof parsed.pages === "object" ? parsed.pages : {};
    const savedOrder = Array.isArray(parsed?.pageOrder) ? parsed.pageOrder : [];
    let pageOrder = savedOrder.length ? savedOrder.filter((key) => savedPages[key]) : initialPageOrder;
    if (!pageOrder.length) pageOrder = initialPageOrder;
    const pages = pageOrder.reduce((nextPages, key) => {
      const savedPage = savedPages[key];
      const page = savedPage && Array.isArray(savedPage.sections)
        ? savedPage
        : initialPages[key] ?? { title: "未命名頁面", sections: [] };
      nextPages[key] = {
        ...page,
        sections: page.sections.map(normalizeSection),
      };
      return nextPages;
    }, {});
    const styleKey = kitStyles[parsed?.styleKey] ? parsed.styleKey : fallback.styleKey;
    const pageKey = pages[parsed?.pageKey] ? parsed.pageKey : fallback.pageKey;
    const selectedId = pages[pageKey].sections?.some((section) => section.id === parsed?.selectedId)
      ? parsed.selectedId
      : pages[pageKey].sections?.[0]?.id ?? "";

    return {
      styleKey,
      pageKey,
      pages,
      pageOrder,
      selectedId,
      restored: true,
    };
  } catch {
    return fallback;
  }
}

function MomentLightbox({ item, onClose }) {
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="精彩瞬間內頁">
      <button className="lightbox-close" onClick={onClose} type="button">×</button>
      <button className="lightbox-arrow left" type="button">‹</button>
      <article>
        <img src={item.image} alt="" />
        <h2>{item.title}</h2>
        <p>{item.text}</p>
        <span>{item.date} / 1/18</span>
      </article>
      <button className="lightbox-arrow right" type="button">›</button>
    </div>
  );
}

function SectionEditor({ section, onChange }) {
  if (section.type === "eventHero") {
    const visibleFields = new Set(heroTextControls.map((control) => control.field));
    const visibilityFields = new Set(heroTextControls.map((control) => control.visibleField));
    const extraFields = Object.keys(editableFields).filter(
      (field) => field in section && !visibleFields.has(field) && !visibilityFields.has(field) && typeof section[field] !== "boolean",
    );

    return (
      <div className="editor-fields">
        <div className="hero-text-controls">
          {heroTextControls.map((control) => {
            const isEnabled = control.visibleField === "showCountdown"
              ? Boolean(section[control.visibleField])
              : section[control.visibleField] !== false;
            const fieldValue = section[control.field] ?? "";

            return (
              <div className="controlled-field" key={control.field}>
                <label className="field-toggle">
                  <input
                    checked={isEnabled}
                    onChange={(event) => onChange({ [control.visibleField]: event.target.checked })}
                    type="checkbox"
                  />
                  <span>{control.label}</span>
                </label>
                {isEnabled ? (
                  <label className="controlled-input">
                    <span>{control.label}內容</span>
                    {control.input === "textarea" ? (
                      <textarea
                        rows={control.rows}
                        value={fieldValue}
                        onChange={(event) => onChange({ [control.field]: event.target.value })}
                      />
                    ) : (
                      <input
                        placeholder={control.placeholder}
                        value={fieldValue}
                        onChange={(event) => onChange({ [control.field]: event.target.value })}
                      />
                    )}
                    {control.hint ? <small className="field-hint">{control.hint}</small> : null}
                  </label>
                ) : null}
              </div>
            );
          })}
        </div>
        {extraFields.map((field) => (
          <EditableField key={field} field={field} section={section} onChange={onChange} />
        ))}
      </div>
    );
  }

  const fields = Object.keys(editableFields).filter((field) => field in section && typeof section[field] !== "boolean");
  return (
    <div className="editor-fields">
      {fields.map((field) => (
        <EditableField key={field} field={field} section={section} onChange={onChange} />
      ))}
    </div>
  );
}

function EditableField({ field, section, onChange }) {
  return (
    <label>
      <span>{editableFields[field]}</span>
      {field === "title" || field === "subtitle" || field === "image" || field === "body" ? (
        <textarea
          rows={field === "body" ? 6 : field === "title" ? 4 : 3}
          value={section[field]}
          onChange={(event) => onChange({ [field]: event.target.value })}
        />
      ) : (
        <input
          placeholder={field === "countdownTarget" ? "YYYY/MM/DD HH:mm，例如 2026/04/30 20:00" : undefined}
          value={section[field]}
          onChange={(event) => onChange({ [field]: event.target.value })}
        />
      )}
      {field === "countdownTarget" ? (
        <small className="field-hint">支援 YYYY/MM/DD HH:mm 或 YYYY/MM/DD HH:mm:ss，系統會自動換算天、時、分。</small>
      ) : null}
    </label>
  );
}

function compressImageFile(file, options = {}) {
  const {
    maxWidth = 1600,
    maxHeight = 900,
    quality = 0.82,
    mimeType = "image/webp",
  } = options;

  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const scale = Math.min(1, maxWidth / image.naturalWidth, maxHeight / image.naturalHeight);
      const width = Math.max(1, Math.round(image.naturalWidth * scale));
      const height = Math.max(1, Math.round(image.naturalHeight * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      if (!context) {
        reject(new Error("Canvas is not available"));
        return;
      }

      context.drawImage(image, 0, 0, width, height);
      const dataUrl = canvas.toDataURL(mimeType, quality);
      resolve(dataUrl);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Image could not be loaded"));
    };

    image.src = objectUrl;
  });
}

function HeroBackgroundEditor({ section, onChange }) {
  async function uploadBackground(file, field) {
    if (!file) return;
    const dataUrl = await compressImageFile(file, field === "mobileBackgroundImage"
      ? { maxWidth: 960, maxHeight: 180, quality: 0.78 }
      : { maxWidth: 1600, maxHeight: 720, quality: 0.8 });
    onChange({ [field]: dataUrl });
  }

  return (
    <div className="hero-bg-editor">
      <div>
        <span>桌機背景圖片</span>
        <small>{section.backgroundImage ? "已上傳自訂背景圖" : "未上傳時使用目前風格的預設 placeholder 圖"}</small>
      </div>
      {section.backgroundImage ? <img src={section.backgroundImage} alt="" /> : <div className="hero-bg-placeholder">預設 placeholder</div>}
      <div className="hero-bg-actions">
        <label>
          <input accept="image/*" onChange={(event) => uploadBackground(event.target.files?.[0], "backgroundImage")} type="file" />
          <span>上傳圖片</span>
        </label>
        <button disabled={!section.backgroundImage} onClick={() => onChange({ backgroundImage: "" })} type="button">
          刪除圖片
        </button>
      </div>
      <div className="hero-bg-divider"></div>
      <div>
        <span>手機版 60px 圖片</span>
        <small>{section.mobileBackgroundImage ? "已上傳手機版 60px 圖" : "未上傳時使用桌機背景圖或原本 placeholder 圖"}</small>
      </div>
      {section.mobileBackgroundImage ? <img className="is-mobile-preview" src={section.mobileBackgroundImage} alt="" /> : <div className="hero-bg-placeholder is-mobile-preview">手機版 placeholder</div>}
      <div className="hero-bg-actions">
        <label>
          <input accept="image/*" onChange={(event) => uploadBackground(event.target.files?.[0], "mobileBackgroundImage")} type="file" />
          <span>上傳手機圖</span>
        </label>
        <button disabled={!section.mobileBackgroundImage} onClick={() => onChange({ mobileBackgroundImage: "" })} type="button">
          刪除手機圖
        </button>
      </div>
    </div>
  );
}

function TaiwanMedalsBackgroundEditor({ section, onChange }) {
  async function uploadBackground(file) {
    if (!file) return;
    const dataUrl = await compressImageFile(file, { maxWidth: 1600, maxHeight: 560, quality: 0.8 });
    onChange({ backgroundImage: dataUrl });
  }

  return (
    <div className="hero-bg-editor">
      <div>
        <span>獎牌榜背景圖片</span>
        <small>{section.backgroundImage ? "已上傳自訂背景圖" : "未上傳時使用優雅風格預設背景"}</small>
      </div>
      {section.backgroundImage ? <img src={section.backgroundImage} alt="" /> : <div className="hero-bg-placeholder">預設背景</div>}
      <div className="hero-bg-actions">
        <label>
          <input accept="image/*" onChange={(event) => uploadBackground(event.target.files?.[0])} type="file" />
          <span>上傳背景圖</span>
        </label>
        <button disabled={!section.backgroundImage} onClick={() => onChange({ backgroundImage: "" })} type="button">
          刪除背景圖
        </button>
      </div>
    </div>
  );
}

function NestedItemsEditor({ section, onChange }) {
  if (!section.items) return null;

  return (
    <div className="nested-editor">
      <h3>項目內容</h3>
      {section.items.map((item, index) => (
        <div className="nested-card" key={`${section.id}-${index}`}>
          {Object.entries(item).map(([field, value]) => {
            if (section.type === "taiwanMedals" && field === "image") {
              return (
                <ItemImageUpload
                  image={value}
                  key={field}
                  label="獎牌圖片"
                  onChange={(patch) => onChange(section.id, index, patch)}
                />
              );
            }

            return (
              <label key={field}>
                <span>{field}</span>
                <input value={value} onChange={(event) => onChange(section.id, index, { [field]: event.target.value })} />
              </label>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function ItemImageUpload({ image, label, onChange }) {
  async function uploadImage(file) {
    if (!file) return;
    const dataUrl = await compressImageFile(file, { maxWidth: 420, maxHeight: 420, quality: 0.82 });
    onChange({ image: dataUrl });
  }

  return (
    <div className="nested-image-field">
      <span>{label}</span>
      {image ? <img src={image} alt="" /> : <div>1:1</div>}
      <div>
        <label>
          <input accept="image/*" onChange={(event) => uploadImage(event.target.files?.[0])} type="file" />
          <span>上傳圖片</span>
        </label>
        <button disabled={!image} onClick={() => onChange({ image: "" })} type="button">
          刪除圖片
        </button>
      </div>
    </div>
  );
}

function MedalRowsEditor({ section, onChange }) {
  return (
    <div className="nested-editor">
      <h3>獎牌資料</h3>
      {section.medals.map((row, index) => (
        <div className="nested-card compact" key={row.rank}>
          {Object.entries(row).map(([field, value]) => (
            <label key={field}>
              <span>{field}</span>
              <input
                value={value}
                onChange={(event) => {
                  const nextMedals = section.medals.map((medal, medalIndex) =>
                    medalIndex === index ? { ...medal, [field]: event.target.value } : medal,
                  );
                  onChange(section.id, index, { [field]: nextMedals[index][field] });
                }}
              />
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}

function createModule(type, id = `${type}-${Date.now()}`, overrides = {}) {
  const baseItems = [
    {
      title: "相簿標題，沒有標題行數也要穩",
      text: "羽球雙打精彩回合，選手在關鍵分完成反拍救球。",
      date: "2026/04/13 22:44",
      image: imagePool.badminton,
    },
    {
      title: "拳擊女將賽前調整，鎖定四強席次",
      text: "教練團針對節奏與步伐做最後修正。",
      date: "2026/04/13 21:10",
      image: imagePool.boxing,
    },
    {
      title: "田徑短跑預賽破個人最佳",
      text: "選手在最後 30 公尺加速超車，晉級下一輪。",
      date: "2026/04/13 19:20",
      image: imagePool.runner,
    },
    {
      title: "籃球代表隊團練開放媒體採訪",
      text: "團隊強化轉換快攻與禁區保護。",
      date: "2026/04/12 18:05",
      image: imagePool.court,
    },
    {
      title: "主場館夜間測試完成",
      text: "燈光、轉播與觀眾動線進入最後檢查。",
      date: "2026/04/12 16:30",
      image: imagePool.stadium,
    },
    {
      title: "賽前訓練直擊",
      text: "代表隊進行恢復與技術演練。",
      date: "2026/04/11 15:12",
      image: imagePool.training,
    },
  ];

  const defaults = {
    eventHero: {
      id,
      type,
      eyebrow: "19th Asian Games",
      showEyebrow: true,
      title: "杭州亞運會",
      showTitle: true,
      subtitle: "Hangzhou 2022",
      showSubtitle: true,
      showCountdown: true,
      countdownTarget: "2026/04/30 20:00",
      backgroundImage: "",
      mobileBackgroundImage: "",
    },
    adBanner: {
      id,
      type,
      sponsor: "AD",
      title: "南山大苑捷運站旁 45 坪雙主臥",
      subtitle: "250 米稀有身分，45 坪捷運宅。頁面保留標準廣告版位。",
      cta: "閱讀",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    },
    scoreCards: {
      id,
      type,
      eyebrow: "RESULTS",
      title: "最新賽事比分",
      cta: "看全部賽況",
      items: [
        {
          date: "Apr 18, 2026",
          home: "中華台北",
          homeFlag: "🇹🇼",
          homeScore: "3",
          away: "日本",
          awayFlag: "🇯🇵",
          awayScore: "1",
          league: "Premier League",
          venue: "Hangzhou",
        },
        {
          date: "Apr 20, 2026",
          home: "韓國",
          homeFlag: "🇰🇷",
          homeScore: "1",
          away: "中華台北",
          awayFlag: "🇹🇼",
          awayScore: "1",
          league: "Premier League",
          venue: "Ningbo",
        },
        {
          date: "Apr 25, 2026",
          home: "中國大陸",
          homeFlag: "🇨🇳",
          homeScore: "2",
          away: "中華台北",
          awayFlag: "🇹🇼",
          awayScore: "3",
          league: "Premier League",
          venue: "Wenzhou",
        },
      ],
    },
    newsGrid: {
      id,
      type,
      title: "賽事焦點",
      items: baseItems.slice(0, 6),
    },
    videoShelf: {
      id,
      type,
      title: "影音專區",
      compact: false,
      items: baseItems.slice(0, 5),
    },
    galleryGrid: {
      id,
      type,
      title: "精彩瞬間",
      items: baseItems,
    },
    athleteCards: {
      id,
      type,
      title: "健將點名",
      items: [
        { title: "林郁婷", sport: "拳擊", text: "穩定壓迫與步伐控制是本屆焦點。", image: imagePool.boxing },
        { title: "王齊麟", sport: "羽球", text: "雙打節奏與網前處理具備高爆發力。", image: imagePool.badminton },
        { title: "楊俊瀚", sport: "田徑", text: "短跑衝刺能力與起跑反應備受期待。", image: imagePool.runner },
        { title: "林庭謙", sport: "籃球", text: "外線火力與控場能力是代表隊關鍵。", image: imagePool.court },
      ],
    },
    medalTable: {
      id,
      type,
      title: "各國獎牌排行榜",
      compact: false,
      medals: [
        { rank: "1", flag: "🇯🇵", country: "日本", gold: "3", silver: "3", bronze: "3", total: "9" },
        { rank: "2", flag: "🇨🇳", country: "中國大陸", gold: "3", silver: "3", bronze: "3", total: "9" },
        { rank: "3", flag: "🇰🇷", country: "韓國", gold: "3", silver: "3", bronze: "3", total: "9" },
        { rank: "4", flag: "🇹🇼", country: "中華台北", gold: "3", silver: "3", bronze: "3", total: "9" },
        { rank: "5", flag: "🇮🇷", country: "伊朗", gold: "3", silver: "3", bronze: "3", total: "9" },
        { rank: "6", flag: "🇰🇿", country: "哈薩克", gold: "3", silver: "3", bronze: "3", total: "9" },
        { rank: "7", flag: "🇮🇳", country: "印度", gold: "3", silver: "3", bronze: "3", total: "9" },
        { rank: "8", flag: "🇮🇩", country: "印尼", gold: "3", silver: "3", bronze: "3", total: "9" },
      ],
    },
    taiwanMedals: {
      id,
      type,
      title: "中華台北獎牌榜",
      updatedAt: "2022-10-02 10:00",
      backgroundImage: "",
      items: [
        { tone: "gold", icon: "🥇", label: "金牌", shortLabel: "金", count: "6", event: "滑輪溜冰、羽球", image: imagePool.runner },
        { tone: "silver", icon: "🥈", label: "銀牌", shortLabel: "銀", count: "6", event: "射箭、桌球、柔道", image: imagePool.badminton },
        { tone: "bronze", icon: "🥉", label: "銅牌", shortLabel: "銅", count: "6", event: "拳擊、跆拳道、空手道", image: imagePool.court },
      ],
    },
    textBlock: {
      id,
      type,
      title: "資料來源與賽事說明",
      body:
        "賽事資訊以主辦單位公告為準。專題站支援廣告版位、影音清單、圖集燈箱、選手卡與獎牌榜模組，可依活動需求自由排序。",
    },
  };

  return { ...defaults[type], ...overrides };
}

function getModuleLabel(type) {
  return moduleLibrary.find((module) => module.type === type)?.label ?? type;
}

export default App;
