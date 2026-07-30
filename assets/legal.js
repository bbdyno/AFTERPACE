const LEGAL_LANGUAGES = ["ko", "en", "ja"];

const LEGAL_COPY = {
  ko: {
    skip: "본문으로 건너뛰기",
    language: "언어",
    home: "AFTERPACE 홈",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    support: "지원",
    issues: "GitHub Issues",
    pages: {
      privacy: { title: "개인정보처리방침 — AFTERPACE", description: "AFTERPACE가 HealthKit, 사진, 경로와 프로젝트를 기기에서 처리하는 방법을 안내합니다." },
      terms: { title: "이용약관 — AFTERPACE", description: "AFTERPACE 앱 사용, 사용자 콘텐츠, 개인정보, 구매와 책임 범위를 설명하는 이용약관입니다." },
      support: { title: "지원 — AFTERPACE", description: "AFTERPACE의 운동·사진 가져오기, 프로젝트 재개, 내보내기와 구매 복원 도움말입니다." }
    }
  },
  en: {
    skip: "Skip to content",
    language: "Language",
    home: "AFTERPACE home",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    support: "Support",
    issues: "GitHub Issues",
    pages: {
      privacy: { title: "Privacy Policy — AFTERPACE", description: "How AFTERPACE handles HealthKit, photos, routes, and projects on your device." },
      terms: { title: "Terms of Use — AFTERPACE", description: "Terms covering use of AFTERPACE, user content, privacy, purchases, and responsibility." },
      support: { title: "Support — AFTERPACE", description: "Help with workout and photo import, reopening projects, export, and restoring purchases in AFTERPACE." }
    }
  },
  ja: {
    skip: "本文へ移動",
    language: "言語",
    home: "AFTERPACE ホーム",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    support: "サポート",
    issues: "GitHub Issues",
    pages: {
      privacy: { title: "プライバシーポリシー — AFTERPACE", description: "AFTERPACEがHealthKit、写真、ルート、プロジェクトをデバイス上で扱う方法をご案内します。" },
      terms: { title: "利用規約 — AFTERPACE", description: "AFTERPACEの利用、ユーザーコンテンツ、プライバシー、購入、責任範囲に関する規約です。" },
      support: { title: "サポート — AFTERPACE", description: "AFTERPACEのワークアウト・写真の読み込み、プロジェクト再開、書き出し、購入復元のヘルプです。" }
    }
  }
};

function getSavedLegalLanguage() {
  try {
    return localStorage.getItem("afterpace-language");
  } catch {
    return null;
  }
}

function saveLegalLanguage(language) {
  try {
    localStorage.setItem("afterpace-language", language);
  } catch {
    // The selected panel still changes when storage is unavailable.
  }
}

function preferredLegalLanguage() {
  const saved = getSavedLegalLanguage();
  if (LEGAL_LANGUAGES.includes(saved)) return saved;
  const browser = (navigator.language || "").toLowerCase();
  if (browser.startsWith("ja")) return "ja";
  if (browser.startsWith("en")) return "en";
  return "ko";
}

function showLegalLanguage(language) {
  if (!LEGAL_LANGUAGES.includes(language)) return;
  const copy = LEGAL_COPY[language];
  const page = document.documentElement.dataset.page;
  const metadata = copy.pages[page];

  document.documentElement.lang = language;
  saveLegalLanguage(language);

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  document.querySelectorAll("[data-lang-panel]").forEach((panel) => {
    const active = panel.dataset.langPanel === language;
    panel.hidden = !active;
    panel.setAttribute("aria-hidden", String(!active));
  });
  document.querySelectorAll("[data-legal-copy]").forEach((element) => {
    const value = copy[element.dataset.legalCopy];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-legal-copy-aria]").forEach((element) => {
    const value = copy[element.dataset.legalCopyAria];
    if (value) element.setAttribute("aria-label", value);
  });

  if (!metadata) return;
  document.title = metadata.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", metadata.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", metadata.description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", metadata.title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", metadata.description);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => showLegalLanguage(button.dataset.language));
  });
  showLegalLanguage(preferredLegalLanguage());
});
