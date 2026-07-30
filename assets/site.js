document.documentElement.classList.add("js");

const SITE_CONFIG = Object.freeze({
  appStoreUrl: "https://apps.apple.com/app/id6795422558",
  appStoreBadges: Object.freeze({
    ko: "assets/images/app-store/download-ko.svg",
    en: "assets/images/app-store/download-en.svg",
    ja: "assets/images/app-store/download-ja.svg"
  }),
  defaultLanguage: "ko",
  supportedLanguages: ["ko", "en", "ja"]
});

const COPY = {
  ko: {
    metaTitle: "AFTERPACE — 한 번의 운동을, 공유할 장면으로.",
    metaDescription: "운동 기록과 그날의 사진을 공유하고 싶은 장면으로. AFTERPACE는 로컬 우선 운동 아트 앱입니다.",
    skip: "본문으로 건너뛰기", homeAria: "AFTERPACE 홈", primaryNavAria: "주요 메뉴", languageAria: "언어", highlightsAria: "주요 특징", directionsAria: "여섯 가지 아트 디렉션", navWhy: "이유", navDirections: "아트 디렉션", navFeatures: "기능", navPrivacy: "프라이버시", storeShort: "App Store",
    heroEyebrow: "PRIVATE · ON DEVICE · MADE TO SHARE", heroTitle1: "한 번의 운동을,", heroTitle2: "공유할 장면으로.", heroBody: "운동과 사진을 고르세요. AFTERPACE가 기록을 읽고, 여섯 개의 아트 디렉션과 Story·Feed·Square를 한 번에 완성합니다.",
    seeHow: "어떻게 완성되는지 보기", trustHealth: "Apple Health", trustPrivate: "로컬 우선", trustRatios: "3개 비율",
    storyEyebrow: "WHY AFTERPACE", storyTitle: "기록은 숫자로 끝나지 않으니까.", storyQuote: "“운동을 마친 뒤 남는 건 거리와 시간이 아니라, 그날의 공기와 내가 해냈다는 감각이었다.”", storyQuoteNote: "그래서 기록과 사진을 다시 하나의 장면으로 엮었습니다.",
    storyBody1: "기존 운동 앱의 결과 화면은 정확하지만 모두 비슷했습니다. 사진 편집 앱은 자유롭지만 매번 빈 캔버스에서 시작해야 했습니다.", storyBody2: "AFTERPACE는 그 사이를 잇습니다. 운동의 맥락을 이해하고 사진을 추천한 뒤, 수동 편집보다 먼저 완성도 높은 방향을 제안합니다. 빠르게 끝내고 싶으면 Quick Edit, 마지막 1%가 필요하면 Fine Edit를 사용합니다.",
    principle1: "UI는 조용하게|결과물은 강하게", principle2: "허락받은 데이터만|기기 안에서", principle3: "한 번 만든 작품은|언제든 다시",
    directionsEyebrow: "SIX REAL DIRECTIONS", directionsTitle: "스티커를 고르기 전에,|먼저 분위기를 고르세요.", directionsBody: "같은 운동과 사진도 완전히 다른 여섯 장면이 됩니다. 단순한 색상 변형이 아니라 레이아웃, 사진 비중, 기록의 위계와 여백이 달라집니다.",
    dir1: "사진 중심의 절제된 편집", dir2: "경로가 만드는 조형", dir3: "기록을 선언하는 타이포", dir4: "훈련을 수집하는 로그", dir5: "감정이 남는 부드러운 기록", dir6: "피사체와 기록의 깊이",
    featuresEyebrow: "FROM WORKOUT TO ART", featuresTitle: "필요한 순간마다 정확한 도구만.", healthTitle: "운동은 한 번만 연결.", healthBody: "Apple Health에서 운동을 가져오고, GPX·TCX·OCR·직접 입력으로 빈틈을 채웁니다. 권한은 연결을 누른 뒤에만 요청합니다.",
    photoTitle: "그 시간의 사진을 먼저.", photoBody: "운동 전후의 사진을 찾아 선명도, 인물, 구도와 중복을 살펴보고 어울리는 컷을 추천합니다.", quickTitle: "대부분은 Quick Edit로 충분하게.", quickBody: "사진, 기록, 경로, 문구와 라이브 스티커를 탭 몇 번으로 바꿉니다. 피사체 뒤로 보내는 깊이 효과도 한 동작입니다.",
    studioTitle: "Studio는 마지막 1%를 위해.", studioBody: "내용·모양·배치, 세 범위만 제공합니다. Lock은 스티커 전체를 실제로 보호하고 언제나 해제할 수 있습니다.", libraryTitle: "만든 것은 사라지지 않게.", libraryBody: "프로젝트, 사진, 레이어, 잠금과 배치를 기기에 저장합니다. 라이브러리에서 다시 열어 이어서 편집하세요.", sportsTitle: "러닝만이 아닌 오늘의 움직임.", sportsBody: "러닝, 걷기, 사이클링과 HYROX의 서로 다른 기록 구조를 이해해 알맞은 정보 위계를 만듭니다.",
    packEyebrow: "ONE PROJECT · THREE CANVASES", packTitle: "한 번 만들고,|어디에나 맞게.", packBody: "Story 9:16, Feed 4:5, Square 1:1을 한 번에 렌더링합니다. 단순 크롭이 아니라 각 비율에 맞춰 구성 요소를 다시 배치합니다.",
    privacyEyebrow: "PRIVATE BY CONSTRUCTION", privacyTitle: "운동의 흔적은|당신의 기기 안에.", privacyBody: "계정 없이 시작하고, Health와 사진은 사용자가 허용한 뒤 기기 안에서 처리합니다. 공유 옵션 또는 Privacy Guard에서 출발·도착 경로, 장소와 심박수 공개 여부를 확인할 수 있습니다.", privacyPoint1: "광고 추적과 건강 데이터 마케팅 없음", privacyPoint2: "프로젝트와 원본 사진의 로컬 저장", privacyPoint3: "언제든 시스템 설정에서 권한 철회", readPrivacy: "개인정보처리방침 읽기",
    availabilityEyebrow: "COMING TO iPHONE & iPAD", availabilityTitle: "다음 운동은,|남기고 싶은 장면이 됩니다.", availabilityBody: "App Store 페이지가 공개되면 아래 배지에서 바로 확인할 수 있습니다.",
    footerPrivacy: "개인정보처리방침", footerTerms: "서비스 이용약관", footerSupport: "지원", appIconAlt: "AFTERPACE 앱 아이콘",
    appStoreAria: "App Store에서 AFTERPACE 보기", appStoreBadgeAlt: "App Store에서 다운로드",
    screenGalleryAria: "실제 AFTERPACE 앱 화면", homeScreenAlt: "AFTERPACE 실제 홈 화면", homeScreenCaption: "최근 작업과 새 작업", directionsScreenAlt: "AFTERPACE 실제 아트 디렉션 선택 화면", directionsScreenCaption: "6개의 구도 중 선택", quickScreenAlt: "AFTERPACE 실제 Quick Edit 화면", quickScreenCaption: "결과를 바로 편집", depthScreenAlt: "실제 iPhone의 피사체 깊이 편집 화면", socialPackScreenAlt: "AFTERPACE 실제 Social Pack 내보내기 화면"
  },
  en: {
    metaTitle: "AFTERPACE — Turn one workout into a scene worth sharing.", metaDescription: "Turn workout data and the photos around it into share-ready art. AFTERPACE is a local-first workout-to-art app.",
    skip: "Skip to content", homeAria: "AFTERPACE home", primaryNavAria: "Primary navigation", languageAria: "Language", highlightsAria: "Highlights", directionsAria: "Six art directions", navWhy: "Why", navDirections: "Directions", navFeatures: "Features", navPrivacy: "Privacy", storeShort: "App Store",
    heroEyebrow: "PRIVATE · ON DEVICE · MADE TO SHARE", heroTitle1: "Turn one workout into", heroTitle2: "a scene worth sharing.", heroBody: "Choose a workout and your photos. AFTERPACE reads the record, proposes six art directions, and finishes Story, Feed, and Square in one flow.",
    seeHow: "See how it comes together", trustHealth: "Apple Health", trustPrivate: "Local first", trustRatios: "3 ratios",
    storyEyebrow: "WHY AFTERPACE", storyTitle: "A record should be more than numbers.", storyQuote: "“What stayed after a workout was not distance or time, but the air that day and the feeling that I had done it.”", storyQuoteNote: "So we brought the record and the photo back into one scene.",
    storyBody1: "Workout result screens are accurate, but they all look alike. Photo editors are flexible, but make you begin with an empty canvas every time.", storyBody2: "AFTERPACE connects the two. It understands the workout, recommends nearby photos, then proposes finished creative directions before manual editing. Use Quick Edit to finish fast, or Fine Edit for the final one percent.",
    principle1: "Quiet interface|bold result", principle2: "Only permitted data|stays on device", principle3: "Every creation|ready to reopen",
    directionsEyebrow: "SIX REAL DIRECTIONS", directionsTitle: "Choose the mood|before the stickers.", directionsBody: "The same workout and photos become six genuinely different scenes—not color swaps, but new layouts, photo weight, data hierarchy, and rhythm.",
    dir1: "Restrained, photo-led editorial", dir2: "A route turned into form", dir3: "Typography that declares the record", dir4: "A log that collects the work", dir5: "A softer record that keeps the feeling", dir6: "Depth between subject and data",
    featuresEyebrow: "FROM WORKOUT TO ART", featuresTitle: "The right tool at the right moment.", healthTitle: "Connect the workout once.", healthBody: "Bring in Apple Health workouts, then fill the gaps with GPX, TCX, OCR, or manual entry. Permission is requested only after you choose to connect.",
    photoTitle: "Start with photos from that moment.", photoBody: "Find photos around the workout, then rank sharpness, people, composition, and duplicates to recommend the strongest frames.", quickTitle: "Quick Edit is enough for most work.", quickBody: "Change photos, metrics, routes, copy, and live stickers in a few taps. Send a sticker behind the subject in one move.",
    studioTitle: "Studio is for the final one percent.", studioBody: "Only three scopes: Content, Appearance, and Arrange. Lock protects the whole sticker and always leaves Unlock available.", libraryTitle: "Keep what you make.", libraryBody: "Projects, photos, layers, locks, and placement stay on your device. Reopen any creation from the library and continue.", sportsTitle: "More than a run.", sportsBody: "Running, walking, cycling, and HYROX each get a composition that understands their different records.",
    packEyebrow: "ONE PROJECT · THREE CANVASES", packTitle: "Make it once.|Fit it everywhere.", packBody: "Render Story 9:16, Feed 4:5, and Square 1:1 together. Each canvas is recomposed for its ratio instead of simply cropped.",
    privacyEyebrow: "PRIVATE BY CONSTRUCTION", privacyTitle: "Your workout trail|stays on your device.", privacyBody: "Start without an account. Health and photos are processed on device after you grant access. Review route endpoints, location, and heart-rate exposure in Share Options or Privacy Guard.", privacyPoint1: "No ad tracking or health-data marketing", privacyPoint2: "Local storage for projects and source photos", privacyPoint3: "Revoke access anytime in system settings", readPrivacy: "Read the privacy policy",
    availabilityEyebrow: "COMING TO iPHONE & iPAD", availabilityTitle: "Your next workout|can become the scene you keep.", availabilityBody: "This badge will open the App Store page as soon as it is public.",
    footerPrivacy: "Privacy Policy", footerTerms: "Service Terms", footerSupport: "Support", appIconAlt: "AFTERPACE app icon",
    appStoreAria: "View AFTERPACE on the App Store", appStoreBadgeAlt: "Download on the App Store",
    screenGalleryAria: "Actual AFTERPACE app screens", homeScreenAlt: "Actual AFTERPACE home screen", homeScreenCaption: "Recent work and a new project", directionsScreenAlt: "Actual AFTERPACE art-direction picker", directionsScreenCaption: "Choose from six compositions", quickScreenAlt: "Actual AFTERPACE Quick Edit screen", quickScreenCaption: "Edit the result directly", depthScreenAlt: "Subject-depth editing on an actual iPhone", socialPackScreenAlt: "Actual AFTERPACE Social Pack export screen"
  },
  ja: {
    metaTitle: "AFTERPACE — 一度のワークアウトを、シェアしたくなる一枚へ。", metaDescription: "ワークアウト記録とその日の写真を、シェアできるアートへ。AFTERPACEはローカルファーストのワークアウトアートアプリです。",
    skip: "本文へ移動", homeAria: "AFTERPACE ホーム", primaryNavAria: "メインナビゲーション", languageAria: "言語", highlightsAria: "主な特徴", directionsAria: "6つのアートディレクション", navWhy: "想い", navDirections: "デザイン", navFeatures: "機能", navPrivacy: "プライバシー", storeShort: "App Store",
    heroEyebrow: "PRIVATE · ON DEVICE · MADE TO SHARE", heroTitle1: "一度のワークアウトを、", heroTitle2: "シェアしたくなる一枚へ。", heroBody: "ワークアウトと写真を選ぶだけ。AFTERPACEが記録を読み取り、6つのアートディレクションとStory・Feed・Squareを一つの流れで仕上げます。",
    seeHow: "仕上がる流れを見る", trustHealth: "Apple Health", trustPrivate: "ローカル優先", trustRatios: "3つの比率",
    storyEyebrow: "WHY AFTERPACE", storyTitle: "記録は、数字だけで終わらない。", storyQuote: "「ワークアウトのあとに残ったのは距離や時間ではなく、その日の空気と、やり遂げた感覚だった。」", storyQuoteNote: "だから記録と写真を、もう一度ひとつのシーンにしました。",
    storyBody1: "ワークアウトアプリの結果画面は正確でも、どれも似ています。写真編集アプリは自由でも、毎回まっさらなキャンバスから始まります。", storyBody2: "AFTERPACEはその間をつなぎます。運動の文脈を理解し、写真を提案し、手作業の前に完成度の高い方向を示します。素早く終えるならQuick Edit、最後の1%にはFine Editを。",
    principle1: "UIは静かに|作品は大胆に", principle2: "許可したデータだけ|デバイスの中で", principle3: "作った作品は|いつでも続きから",
    directionsEyebrow: "SIX REAL DIRECTIONS", directionsTitle: "ステッカーより先に、|ムードを選ぶ。", directionsBody: "同じワークアウトと写真から、本当に異なる6つのシーンへ。色違いではなく、レイアウト、写真の比重、記録の階層、余白まで変わります。",
    dir1: "写真を主役にした端正な編集", dir2: "ルートを造形に変える", dir3: "記録を宣言するタイポグラフィ", dir4: "積み重ねを残すトレーニングログ", dir5: "感情を残すやわらかな記録", dir6: "人物と記録のあいだに奥行きを",
    featuresEyebrow: "FROM WORKOUT TO ART", featuresTitle: "必要な瞬間に、必要な道具だけ。", healthTitle: "ワークアウトは一度つなぐだけ。", healthBody: "Apple Healthから取り込み、GPX・TCX・OCR・手入力で補完。アクセス許可は接続を選んだあとにだけ求めます。",
    photoTitle: "まず、その時間の写真から。", photoBody: "運動前後の写真を見つけ、鮮明さ、人物、構図、重複を確認して、最適なカットを提案します。", quickTitle: "ほとんどはQuick Editで完成。", quickBody: "写真、記録、ルート、コピー、ライブステッカーを数回のタップで変更。人物の後ろへ送る奥行き表現も一操作です。",
    studioTitle: "Studioは最後の1%のために。", studioBody: "内容・見た目・配置の3つだけ。Lockはステッカー全体を守り、解除はいつでも可能です。", libraryTitle: "作ったものを、なくさない。", libraryBody: "プロジェクト、写真、レイヤー、ロック、配置をデバイスに保存。ライブラリから開き直して編集を続けられます。", sportsTitle: "ランニングだけではない動きへ。", sportsBody: "ランニング、ウォーキング、サイクリング、HYROX。それぞれ異なる記録構造に合う情報設計を行います。",
    packEyebrow: "ONE PROJECT · THREE CANVASES", packTitle: "一度作れば、|どこにでもフィット。", packBody: "Story 9:16、Feed 4:5、Square 1:1をまとめて出力。単純な切り抜きではなく、比率ごとに要素を再配置します。",
    privacyEyebrow: "PRIVATE BY CONSTRUCTION", privacyTitle: "ワークアウトの軌跡は、|あなたのデバイスに。", privacyBody: "アカウントなしで開始。Healthと写真は、許可後にデバイス内で処理します。共有オプションまたはPrivacy Guardで、ルートの始終点、場所、心拍数の公開範囲を確認できます。", privacyPoint1: "広告追跡や健康データのマーケティング利用なし", privacyPoint2: "プロジェクトと元写真をローカル保存", privacyPoint3: "システム設定からいつでも権限を解除", readPrivacy: "プライバシーポリシーを読む",
    availabilityEyebrow: "COMING TO iPHONE & iPAD", availabilityTitle: "次のワークアウトが、|残したい一枚になる。", availabilityBody: "App Storeページの公開後は、下のバッジからすぐに確認できます。",
    footerPrivacy: "プライバシーポリシー", footerTerms: "サービス利用規約", footerSupport: "サポート", appIconAlt: "AFTERPACEアプリアイコン",
    appStoreAria: "App StoreでAFTERPACEを見る", appStoreBadgeAlt: "App Storeからダウンロード",
    screenGalleryAria: "実際のAFTERPACEアプリ画面", homeScreenAlt: "AFTERPACEの実際のホーム画面", homeScreenCaption: "最近の作品と新規作成", directionsScreenAlt: "AFTERPACEの実際のアートディレクション選択画面", directionsScreenCaption: "6つの構成から選択", quickScreenAlt: "AFTERPACEの実際のQuick Edit画面", quickScreenCaption: "結果をそのまま編集", depthScreenAlt: "実機iPhoneでの人物深度編集画面", socialPackScreenAlt: "AFTERPACEの実際のSocial Pack書き出し画面"
  }
};

function getSavedLanguage() {
  try {
    return localStorage.getItem("afterpace-language");
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("afterpace-language", language);
  } catch {
    // Language switching still works when storage is unavailable.
  }
}

function preferredLanguage() {
  const saved = getSavedLanguage();
  if (SITE_CONFIG.supportedLanguages.includes(saved)) return saved;
  const browser = (navigator.language || "").toLowerCase();
  if (browser.startsWith("ja")) return "ja";
  if (browser.startsWith("en")) return "en";
  return SITE_CONFIG.defaultLanguage;
}

function updateLanguage(language) {
  if (!SITE_CONFIG.supportedLanguages.includes(language)) return;
  document.documentElement.lang = language;
  saveLanguage(language);
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  document.querySelectorAll("[data-copy]").forEach((element) => {
    const value = COPY[language]?.[element.dataset.copy];
    if (!value) return;
    const parts = value.split("|");
    element.replaceChildren();
    parts.forEach((part, index) => {
      if (index) element.append(document.createElement("br"));
      element.append(document.createTextNode(part));
    });
  });
  document.querySelectorAll("[data-copy-alt]").forEach((element) => {
    const value = COPY[language]?.[element.dataset.copyAlt];
    if (value) element.alt = value;
  });
  document.querySelectorAll("[data-copy-aria]").forEach((element) => {
    const value = COPY[language]?.[element.dataset.copyAria];
    if (value) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-store-badge]").forEach((image) => {
    image.src = SITE_CONFIG.appStoreBadges[language];
    image.alt = COPY[language].appStoreBadgeAlt;
  });
  document.title = COPY[language].metaTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", COPY[language].metaDescription);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", COPY[language].metaTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", COPY[language].metaDescription);
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", { ko: "ko_KR", en: "en_US", ja: "ja_JP" }[language]);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", COPY[language].metaTitle);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", COPY[language].metaDescription);
}

function configureStoreLinks() {
  if (!SITE_CONFIG.appStoreUrl) return;
  document.querySelectorAll(".store-target").forEach((link) => {
    link.href = SITE_CONFIG.appStoreUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
  });
}

function setupReveal() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -6%" });
  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

function setupHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;
  const update = () => header.classList.toggle("scrolled", scrollY > 18);
  addEventListener("scroll", update, { passive: true });
  update();
}

function setupParallax() {
  const target = document.querySelector("[data-parallax]");
  if (!target || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  target.addEventListener("pointermove", (event) => {
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    target.style.setProperty("--tilt-x", `${y * -5}deg`);
    target.style.setProperty("--tilt-y", `${x * 7}deg`);
  });
  target.addEventListener("pointerleave", () => {
    target.style.setProperty("--tilt-x", "0deg");
    target.style.setProperty("--tilt-y", "0deg");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => updateLanguage(button.dataset.language)));
  updateLanguage(preferredLanguage());
  configureStoreLinks();
  setupReveal();
  setupHeader();
  setupParallax();
});
