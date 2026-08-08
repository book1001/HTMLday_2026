(() => {
/* ========================================
   ELEMENTS
======================================== */

const overlap = document.querySelector("#overlap");
const overlapImage = document.querySelector("#overlapImage");
const overlapIframe = document.querySelector("#overlapIframe");
const dynamicFavicon = document.querySelector("#dynamicFavicon");
const editorialText = document.querySelector("#editorialText");
const debug = document.querySelector("#debug");


/* ========================================
   SETTINGS
======================================== */

const CHANNEL_NAME = "browser-window-overlap-test";

const BASE_FONT_SIZE = 18;
const MIN_FONT_SIZE = 18;
const MAX_FONT_SIZE = 30;
const WINDOW_PADDING = 12;
const OBSTACLE_GAP = 10;
const LETTER_GAP = 0;
const LINE_GAP_RATIO = 0.35;
const FOLLOW_SPEED = 0.16;
const SIZE_FOLLOW_SPEED = 0.14;


/* ========================================
   SECOND WINDOW
======================================== */

/*
두 번째 윈도우 크기.
원하는 값으로 변경하면 됨.
*/
const SECOND_WINDOW_WIDTH = 896;
const SECOND_WINDOW_HEIGHT = 550;

let secondWindow = null;


/* ========================================
   ENERGY THEME
======================================== */

/*
각 컬러가 유지되는 시간.
4000 = 4초
*/
const ENERGY_INTERVAL = 4000;

/*
컬러가 부드럽게 전환되는 시간은
CSS의 transition 값과 맞춰 사용.
*/
const DEFAULT_ENERGY_COLOR = "#6ff304";

const ENERGY_COLORS = [
  "#6ff304"
];

const ENERGY_TITLES = [
  "html energy"
];

const ENERGY_URLS = [
  "https://2026.html.energy"
];
// const ENERGY_COLORS = [
//   "#6ff304",
//   "#ff2974",
//   "#813d9c",
//   "#fcf646",
//   "#e47d17",
//   "#ff2ddb",
//   "#ff2ddb",
//   "#ec13b9",
//   "#fcd116",
//   "#f1d4ff",
//   "#ff662e",
//   "#00d5ff",
//   "#280e2b",
//   "#e5a50a",
//   "#00ff00",
//   "#db2828",
//   "#e7d0f5",
//   "#90ef45",
//   "#63452c",
//   "#13ecb6",
//   "#b0ad32",
//   "#b0ad32",
//   "#00c8ec",
//   "#0700ff",
//   "#fabd1b",
//   "#0000ff",
//   "#ff7800",
//   "#e22400",
//   "#5813ec",
//   "#e81828",
//   "#008b8b",
//   "#00ff00",
//   "#ff0088",
//   "#ff9622",
//   "#11e3ee",
//   "#63ec13",
//   "#9932cc",
//   "#0000d1",
//   "#00ff00",
//   "#005eb8",
//   "#ff2600",
//   "#1e90ff",
//   "#04ff00",
//   "#ed0817",
//   "#e0adf6",
//   "#ecc813",
//   "#eca713",
//   "#a4d65e",
//   "#fafed4",
//   "#00f100",
//   "#f9e45d",
//   "#5ba973",
//   "#95c53a",
//   "#00ff11",
//   "#f62837",
//   "#f2037a",
//   "#bb86b4",
//   "#1eebda",
//   "#7ae4ff",
//   "#99ff00",
//   "#0000ff",
//   "#ec0868",
//   "#fb5b1f",
//   "#fffc41",
//   "#8ff0a4",
//   "#7340ec",
//   "#13abec",
//   "#ffeeee",
//   "#bbeeee",
//   "#db7093",
//   "#da1145",
//   "#f2ad5f"
// ];

// const ENERGY_TITLES = [
//   "html energy",
//   "ottawa energy",
//   "online energy",
//   "brussels energy",
//   "strasbourg energy",
//   "atlanta energy",
//   "tampa energy",
//   "san carlos de bariloche energy",
//   "manila energy",
//   "budapest energy",
//   "sài gòn energy",
//   "calgary energy",
//   "rotterdam energy",
//   "karlstad energy",
//   "helsinki energy",
//   "barcelona energy",
//   "london energy",
//   "st. louis energy",
//   "hamburg energy",
//   "edmonton energy",
//   "victoria energy",
//   "new brunswick energy",
//   "manchester energy",
//   "melbourne energy",
//   "portland energy",
//   "montevideo energy",
//   "barre energy",
//   "waterloo energy",
//   "melbourne energy",
//   "philadelphia energy",
//   "hampton roads energy",
//   "bogotá energy",
//   "sydney energy",
//   "jersey city energy",
//   "washington energy",
//   "astoria energy",
//   "curitiba energy",
//   "tiburon energy",
//   "leipzig energy",
//   "edinburgh energy",
//   "rotterdam energy",
//   "montréal energy",
//   "berlin energy",
//   "erfurt energy",
//   "karachi energy",
//   "amsterdam energy",
//   "madrid energy",
//   "saskatoon energy",
//   "kyoto energy",
//   "san diego energy",
//   "kuala lumpur energy",
//   "lancaster energy",
//   "singapore energy",
//   "seoul energy",
//   "toukatsu energy",
//   "rio de janeiro energy",
//   "leicester energy",
//   "seattle energy",
//   "shanghai energy",
//   "toronto energy",
//   "buenos aires energy",
//   "north italy energy",
//   "san francisco energy",
//   "los angeles energy",
//   "lisbon",
//   "kyoto energy",
//   "minneapolis energy",
//   "tokyo energy",
//   "auckland energy",
//   "new york energy",
//   "dallas energy",
//   "austin energy"
// ];

// const ENERGY_URLS = [
//   "https://2026.html.energy",
//   "https://htmldayottawa2026.k334a.com",
//   "https://zacharykai.net/events/htmlday",
//   "https://htmlday.constantvzw.org",
//   "https://timothee.goguely.com/html-day/2026/index.html",
//   "https://htmlatlanta2026.neocities.org",
//   "https://tampa-html.lol",
//   "https://html.partidopirata.com.ar",
//   "https://htmldaymanila.neocities.org",
//   "https://frairy.net/htmlday",
//   "https://qwook.io/events/htmlday2026",
//   "https://ariellelok.com/sidepages/2026htmlday.html",
//   "https://varia.zone/en/2026/html-day",
//   "https://tilde.club/~mikael/html_day_karlstad/2026.html",
//   "https://yumoon.neocities.org/html-helsinki",
//   "https://permacomputing.barcelona/html-day-2026",
//   "https://londonhtmlday.neocities.org",
//   "https://htmlenergystl.neocities.org",
//   "http://html.wwwegetables.net",
//   "https://libreinternet.club/events/htmlday2026",
//   "https://vicbc.neocities.org/html-day/2026",
//   "https://knavehaven.net/events/htmlday_nj_2026.html",
//   "https://sanaas.world/html%20day%202026",
//   "https://html.beer",
//   "https://clipdx.com/htmlday/index.html",
//   "https://energiahtmlmvd.nya.je",
//   "https://tanzi-media.com/Blogs/Misc_blogs/html_day_26",
//   "https://titleduntitled.name/facades/html-day-waterloo-2026.html",
//   "https://html.beer",
//   "https://html-day-philly.github.io",
//   "https://tekgadgt.github.io/htmlday-hamptonroads/2026",
//   "https://energiahtml.neocities.org",
//   "https://maxbo.me/html-in-hyde/2/invitation.html",
//   "https://radnyc.net/htmlDay2026",
//   "https://html-day-dc-2026.onrender.com",
//   "https://eligundry.com/astoria-html-day-2026",
//   "https://htmldaycwb.neocities.org",
//   "https://htmlday.sharonzheng.com",
//   "https://htmlday.brave-tutorials.org",
//   "https://html-day-edi.neocities.org",
//   "http://htmlday2026.gromits.space",
//   "https://html.blue",
//   "https://codearchivesu.github.io/htmlday2026.berlin/index.html",
//   "https://htmldayerfurt.neocities.org",
//   "https://codecircles.neocities.org",
//   "https://www.zinzy.website/2026/06/27/html-day-2026-amsterdam-edition",
//   "https://netseque.neocities.org/htmlday/2026",
//   "https://yxe-html.neocities.org",
//   "https://htmlday-kyoto2.neocities.org",
//   "https://htmlday.joespartydepot.com",
//   "https://htmlday-kl.neocities.org",
//   "https://lancasterhtml.day",
//   "https://amalinalai.github.io/htmlenergy/event-2026.html",
//   "http://afterneworder.com/htmlday",
//   "https://htmlday2026.toukatsu.dev",
//   "https://htmlday2026rio.neocities.org",
//   "https://nmac.neocities.org/htmlday",
//   "https://htmldayseattle.neocities.org",
//   "https://rect.repair/html-2026",
//   "https://lab.technopoetics.com",
//   "https://www.energiahtml.com",
//   "https://tommi.space/htmlday/2026",
//   "https://www.tiat.place/htmlday",
//   "https://html-day-los-angeles.netlify.app",
//   "https://htmllisbon.nekoweb.org/index.html",
//   "https://htmldaykyoto.neocities.org",
//   "https://restorativland.org/htmlday2026",
//   "https://htmldaytokyo.neocities.org/2026",
//   "https://sophiawu.nz/htmlday",
//   "https://valuesbased.software/html.html",
//   "https://dallashtml.day",
//   "https://htmlaustin.com"
// ];

let currentEnergyIndex = -1;
let currentEnergyColor = DEFAULT_ENERGY_COLOR;
let currentEnergyTitle = "html energy";
let currentEnergyUrl = ENERGY_URLS[0] || "https://2026.html.energy/";
let suppressLetterMotionUntil = 0;


/* ========================================
   WINDOW
======================================== */

const myId = crypto.randomUUID();

const myStartedAt = performance.timeOrigin;

const channel = new BroadcastChannel(CHANNEL_NAME);

const otherWindows = new Map();

let myRole = 0;

let currentSourceId = "";

let letters = [];

let lines = [];

let currentObstacle = null;

let currentOrientation = "none";


/* ========================================
   OPEN SECOND WINDOW
======================================== */

function openSecondWindow() {

  /*
  이미 열려 있다면 새로 만들지 않고
  기존 창을 앞으로 가져온다.
  */
  if (
    secondWindow &&
    !secondWindow.closed
  ) {

    secondWindow.focus();
    return;

  }


  const url =
    new URL(
      window.location.href
    );


  /*
  새 창임을 URL에도 표시.
  BroadcastChannel의 역할 판정은
  기존 방식 그대로 사용한다.
  */
  url.searchParams.set(
    "",
    "body"
  );


  /*
  현재 모니터의 사용 가능한 영역 기준
  오른쪽 상단.
  */
  const screenLeft =
    window.screen.availLeft ?? 0;

  const screenTop =
    window.screen.availTop ?? 0;

  const left =
    screenLeft +
    window.screen.availWidth -
    SECOND_WINDOW_WIDTH;

  const top =
    screenTop;


  const features = [
    `width=${SECOND_WINDOW_WIDTH}`,
    `height=${SECOND_WINDOW_HEIGHT}`,
    `left=${Math.round(left)}`,
    `top=${Math.round(top)}`,
    "resizable=yes",
    "scrollbars=yes"
  ].join(",");


  // secondWindow =
  //   window.open(
  //     window.location.href,
  //     "_blank"
  //   );

  secondWindow =
    window.open(
      url.toString(),
      "html-energy-second-window",
      features
    );

}


/* ========================================
   DOCTYPE CLICK
======================================== */

editorialText.addEventListener(
  "click",
  event => {

    if (
      currentSourceId !==
      "text-doctype"
    ) {
      return;
    }


    const letter =
      event.target.closest(
        ".letter"
      );


    if (!letter) {
      return;
    }


    openSecondWindow();

  }
);


/* ========================================
   IFRAME
======================================== */

let iframeOpened = false;

/*
링크를 클릭한 뒤에는
현재 ENERGY index를 고정한다.
두 browser window가 함께 멈추도록
BroadcastChannel로 lock 상태를 공유한다.
*/
let energyThemeLocked = false;
let lockedEnergyIndex = null;


overlapImage.addEventListener("click", event => {

  event.stopPropagation();

  /*
  클릭 순간의 theme index를 고정.
  */
  energyThemeLocked = true;

  lockedEnergyIndex =
    currentEnergyIndex >= 0
      ? currentEnergyIndex
      : 0;

  /*
  다른 browser window에도
  같은 index로 lock하라고 알림.
  */
  channel.postMessage({

    type:
      "lock-energy-theme",

    id:
      myId,

    index:
      lockedEnergyIndex

  });

  iframeOpened = true;

  overlapIframe.src =
    currentEnergyUrl;

  overlapImage.style.display =
    "none";

  overlapIframe.style.display =
    "block";

});


/* ========================================
   LOAD TEXT FROM HTML
======================================== */

function loadTextSource(sourceId, instant = false) {

  /*
  같은 source면 다시 DOM을 만들지 않음.
  */

  if (
    sourceId ===
    currentSourceId
  ) {
    return;
  }


  currentSourceId =
    sourceId;


  /*
  최초 <!DOCTYPE html> 상태에서만
  텍스트가 클릭 가능한 것처럼 보이게 한다.
  */
  editorialText.style.cursor =
    sourceId === "text-doctype"
      ? "pointer"
      : "default";


  editorialText.innerHTML =
    "";


  letters =
    [];


  lines =
    [];


  const source =
    document.getElementById(
      sourceId
    );


  if (!source) {
    return;
  }


  /*
  source 바로 아래 span들을
  각각 하나의 line으로 인식.
  */

  const sourceLines =
    source.querySelectorAll(
      ":scope > span"
    );


  sourceLines.forEach(
    (sourceLine, lineIndex) => {

      const text =
        sourceLine.textContent;


      const line = {
        index: lineIndex,
        letters: []
      };


      for (
        let charIndex = 0;
        charIndex < text.length;
        charIndex++
      ) {

        const element =
          document.createElement(
            "span"
          );


        element.className =
          "letter";


        element.textContent =
          text[charIndex];


        element.style.fontSize =
          `${BASE_FONT_SIZE}px`;


        element.style.color =
          currentEnergyColor;


        element.style.cursor =
          sourceId === "text-doctype"
            ? "pointer"
            : "default";


        editorialText.appendChild(
          element
        );


        const rect =
          element.getBoundingClientRect();


        const letter = {

          element: element,

          lineIndex: lineIndex,

          charIndex: charIndex,

          baseWidth: rect.width,

          baseHeight: rect.height,

          x:
            window.innerWidth /
            2,

          y:
            window.innerHeight /
            2,

          targetX:
            window.innerWidth /
            2,

          targetY:
            window.innerHeight /
            2,

          fontSize:
            BASE_FONT_SIZE,

          targetFontSize:
            BASE_FONT_SIZE

        };


        letters.push(
          letter
        );


        line.letters.push(
          letter
        );

      }


      lines.push(
        line
      );

    }
  );

}


function snapLettersToTargets() {

  for (
    const letter
    of letters
  ) {

    letter.x =
      letter.targetX;

    letter.y =
      letter.targetY;

    letter.fontSize =
      letter.targetFontSize;

    letter.element.style.left =
      `${letter.x}px`;

    letter.element.style.top =
      `${letter.y}px`;

    letter.element.style.fontSize =
      `${letter.fontSize}px`;

  }

}


/* ========================================
   ENERGY THEME
======================================== */

function getStarMaskDataUrl() {

  const style =
    getComputedStyle(
      overlapImage
    );

  const value =
    style.webkitMaskImage ||
    style.maskImage ||
    "";

  const match =
    value.match(
      /url\(["']?(data:image\/png;base64,[^)"']+)["']?\)/
    );

  return match
    ? match[1]
    : "";

}


function updateFavicon(color) {

  if (!dynamicFavicon) {
    return;
  }

  const maskData =
    getStarMaskDataUrl();

  if (!maskData) {
    return;
  }

  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">` +
    `<mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">` +
    `<image href="${maskData}" x="0" y="0" width="64" height="64" preserveAspectRatio="xMidYMid meet"/>` +
    `</mask>` +
    `<rect width="64" height="64" fill="${color}" mask="url(#m)"/>` +
    `</svg>`;

  dynamicFavicon.href =
    `data:image/svg+xml,${encodeURIComponent(svg)}`;

}


function applyEnergyColor(color) {

  currentEnergyColor =
    color;

  /*
  SVG만 CSS transition으로 부드럽게 색이 변함.
  텍스트는 transition 없이 즉시 변경됨.
  */
  overlapImage.style.backgroundColor =
    color;

  for (
    const letter
    of letters
  ) {

    letter.element.style.color =
      color;

  }

  updateFavicon(
    color
  );

}


function updateTitleLetters(title) {

  /*
  vertical-top의 두 번째 줄:
  <title>...</title>

  전체 DOM을 다시 만들지 않고
  기존 letter를 최대한 재사용한다.
  */
  const titleLine =
    lines[1];

  if (!titleLine) {
    return;
  }

  const newText =
    `<title>${title}</title>`;

  const oldCount =
    titleLine.letters.length;

  const commonCount =
    Math.min(
      oldCount,
      newText.length
    );


  /*
  기존 letter는 문자만 교체.
  DOM이 유지되므로 color transition도 유지됨.
  */
  for (
    let i = 0;
    i < commonCount;
    i++
  ) {

    const letter =
      titleLine.letters[i];

    letter.element.textContent =
      newText[i];

    letter.charIndex =
      i;

  }


  /*
  새 문자열이 더 길 경우:
  부족한 letter만 추가.

  아직 applyEnergyColor()가 호출되기 전이므로
  currentEnergyColor = 이전 컬러.
  새 letter도 이전 컬러에서 시작하게 됨.
  */
  if (
    newText.length >
    oldCount
  ) {

    for (
      let i = oldCount;
      i < newText.length;
      i++
    ) {

      const element =
        document.createElement(
          "span"
        );

      element.className =
        "letter";

      element.textContent =
        newText[i];

      element.style.fontSize =
        `${BASE_FONT_SIZE}px`;

      element.style.color =
        currentEnergyColor;

      editorialText.appendChild(
        element
      );

      const rect =
        element.getBoundingClientRect();

      const previous =
        titleLine.letters[
          titleLine.letters.length - 1
        ] || null;

      const letter = {

        element: element,

        lineIndex: 1,

        charIndex: i,

        baseWidth: rect.width,

        baseHeight: rect.height,

        x:
          previous
            ? previous.x
            : window.innerWidth / 2,

        y:
          previous
            ? previous.y
            : window.innerHeight / 2,

        targetX:
          previous
            ? previous.targetX
            : window.innerWidth / 2,

        targetY:
          previous
            ? previous.targetY
            : window.innerHeight / 2,

        fontSize:
          previous
            ? previous.fontSize
            : BASE_FONT_SIZE,

        targetFontSize:
          previous
            ? previous.targetFontSize
            : BASE_FONT_SIZE

      };

      letters.push(
        letter
      );

      titleLine.letters.push(
        letter
      );

    }

  }


  /*
  새 문자열이 더 짧으면
  뒤의 불필요한 letter만 제거.
  */
  if (
    newText.length <
    oldCount
  ) {

    const removed =
      titleLine.letters.splice(
        newText.length
      );

    for (
      const letter
      of removed
    ) {

      const globalIndex =
        letters.indexOf(
          letter
        );

      if (
        globalIndex !== -1
      ) {
        letters.splice(
          globalIndex,
          1
        );
      }

      letter.element.remove();

    }

  }


  /*
  layout만 다시 계산.
  기존 letter의 x/y는 유지되므로
  title 변경 자체 때문에 중앙에서 다시 등장하지 않음.
  */
  updateEditorialLayout(
    currentObstacle
  );

}


function applyEnergyTitle(title) {

  if (
    title ===
    currentEnergyTitle
  ) {

    document.title =
      title;

    return;
  }


  currentEnergyTitle =
    title;


  /* 실제 browser tab title */
  document.title =
    title;


  /* 숨겨진 source의 title도 함께 변경 */
  const source =
    document.getElementById(
      "text-vertical-top"
    );

  if (source) {

    const sourceTitleLine =
      source.querySelector(
        ":scope > span:nth-child(2)"
      );

    if (sourceTitleLine) {

      sourceTitleLine.textContent =
        `<title>${title}</title>`;

    }

  }


  /*
  현재 vertical-top이 실제 표시 중일 때만
  기존 letter DOM을 재사용해서 문자열 변경.
  */
  if (
    currentSourceId ===
    "text-vertical-top"
  ) {

    updateTitleLetters(
      title
    );

  }

}

function applyEnergyUrl(url) {

  currentEnergyUrl =
    url ||
    ENERGY_URLS[0] ||
    "https://2026.html.energy/";

}


function updateEnergyTheme() {

  /*
  링크를 클릭한 뒤에는
  현재 color / title / URL index를 그대로 유지.
  Date.now()로 다음 index를 계산하지 않는다.
  */
  if (energyThemeLocked) {

    if (
      lockedEnergyIndex !== null &&
      lockedEnergyIndex >= 0 &&
      currentEnergyIndex !==
        lockedEnergyIndex
    ) {

      currentEnergyIndex =
        lockedEnergyIndex;

      applyEnergyTitle(
        ENERGY_TITLES[
          lockedEnergyIndex
        ]
      );

      applyEnergyColor(
        ENERGY_COLORS[
          lockedEnergyIndex
        ]
      );

      applyEnergyUrl(
        ENERGY_URLS[
          lockedEnergyIndex
        ]
      );

    }

    return;
  }


  /*
  vertical 상태가 아닐 때에는
  첫 번째 theme 상태로 돌아감.
  */
  if (
    currentOrientation !==
    "vertical"
  ) {

    if (
      currentEnergyIndex !== -1
    ) {

      currentEnergyIndex =
        -1;


      applyEnergyColor(
        DEFAULT_ENERGY_COLOR
      );


      applyEnergyTitle(
        ENERGY_TITLES[0] ||
        "html energy"
      );


      applyEnergyUrl(
        ENERGY_URLS[0]
      );

    }


    return;

  }


  const total =
    Math.min(
      ENERGY_COLORS.length,
      ENERGY_TITLES.length,
      ENERGY_URLS.length
    );


  if (
    total <= 0
  ) {
    return;
  }


  /*
  Date.now()를 기준으로 계산해서
  두 browser window가 동시에
  같은 color / title index를 사용함.
  */
  const index =
    Math.floor(
      Date.now() /
      ENERGY_INTERVAL
    ) %
    total;


  if (
    index ===
    currentEnergyIndex
  ) {
    return;
  }


  currentEnergyIndex =
    index;


  /*
  ë¨¼ì  titleì ë³ê²½í´ì ìë¡ íìí letterê°
  ì´ì  ì»¬ë¬ë¥¼ ê°ì§ ìíë¡ ìì±ëê² íë¤.
  */
  applyEnergyTitle(
    ENERGY_TITLES[index]
  );


  /*
  ê·¸ ë¤ì ëª¨ë  letterì ì ì»¬ë¬ ì ì©.
  ê¸°ì¡´ + ì letter ëª¨ë ëìì transition ìì.
  */
  applyEnergyColor(
    ENERGY_COLORS[index]
  );


  applyEnergyUrl(
    ENERGY_URLS[index]
  );

}


/* ========================================
   VIEWPORT
======================================== */

function getViewportRect() {

  const chromeWidth =
    window.outerWidth -
    window.innerWidth;


  const chromeHeight =
    window.outerHeight -
    window.innerHeight;


  const borderLeft =
    Math.max(
      0,
      chromeWidth / 2
    );


  const browserTop =
    Math.max(
      0,
      chromeHeight
    );


  const left =
    window.screenX +
    borderLeft;


  const top =
    window.screenY +
    browserTop;


  return {

    left: left,

    top: top,

    right:
      left +
      window.innerWidth,

    bottom:
      top +
      window.innerHeight,

    width:
      window.innerWidth,

    height:
      window.innerHeight

  };

}


/* ========================================
   INTERSECTION
======================================== */

function intersection(a, b) {

  const left =
    Math.max(
      a.left,
      b.left
    );


  const top =
    Math.max(
      a.top,
      b.top
    );


  const right =
    Math.min(
      a.right,
      b.right
    );


  const bottom =
    Math.min(
      a.bottom,
      b.bottom
    );


  const width =
    right -
    left;


  const height =
    bottom -
    top;


  if (
    width <= 0 ||
    height <= 0
  ) {

    return null;

  }


  return {

    left: left,

    top: top,

    right: right,

    bottom: bottom,

    width: width,

    height: height

  };

}


/* ========================================
   BROADCAST
======================================== */

function broadcast() {

  channel.postMessage({

    type:
      "position",

    id:
      myId,

    startedAt:
      myStartedAt,

    rect:
      getViewportRect(),

    time:
      Date.now()

  });

}


/* ========================================
   RECEIVE
======================================== */

channel.addEventListener(
  "message",
  event => {

    const data =
      event.data;


    if (!data) {
      return;
    }


    if (
      data.id ===
      myId
    ) {
      return;
    }


    if (
      data.type ===
      "position"
    ) {

      otherWindows.set(
        data.id,
        {

          rect:
            data.rect,

          time:
            data.time,

          startedAt:
            data.startedAt

        }
      );

    }


    if (
      data.type ===
      "lock-energy-theme"
    ) {

      energyThemeLocked =
        true;

      lockedEnergyIndex =
        Number.isInteger(
          data.index
        )
          ? data.index
          : currentEnergyIndex;

      /*
      수신 즉시 같은 theme 상태를 적용.
      */
      if (
        lockedEnergyIndex !== null &&
        lockedEnergyIndex >= 0
      ) {

        currentEnergyIndex =
          lockedEnergyIndex;

        applyEnergyTitle(
          ENERGY_TITLES[
            lockedEnergyIndex
          ]
        );

        applyEnergyColor(
          ENERGY_COLORS[
            lockedEnergyIndex
          ]
        );

        applyEnergyUrl(
          ENERGY_URLS[
            lockedEnergyIndex
          ]
        );

      }

    }


    if (
      data.type ===
      "close"
    ) {

      otherWindows.delete(
        data.id
      );

    }


    updateRole();

  }
);


/* ========================================
   ROLE / TEXT SOURCE
======================================== */

function updateRole() {

  const windows = [

    {
      id:
        myId,

      startedAt:
        myStartedAt,

      rect:
        getViewportRect()
    }

  ];


  const now =
    Date.now();


  for (
    const [id, other]
    of otherWindows
  ) {

    if (
      now -
      other.time >
      1200
    ) {
      continue;
    }


    windows.push({

      id:
        id,

      startedAt:
        other.startedAt,

      rect:
        other.rect

    });

  }


  /*
  최초 생성 순서
  */

  windows.sort(
    (a, b) => {

      if (
        a.startedAt !==
        b.startedAt
      ) {

        return (
          a.startedAt -
          b.startedAt
        );

      }


      return (
        a.id <
        b.id
          ? -1
          : 1
      );

    }
  );


  myRole =
    windows.findIndex(
      item =>
        item.id ===
        myId
    );


  /*
  ========================================
  ONE WINDOW
  ========================================
  */

  if (
    windows.length === 1
  ) {

    currentOrientation =
      "none";


    /*
    첫 화면에서는 <!DOCTYPE html>만 표시.
    이 텍스트를 클릭해 두 번째 창을 만든다.
    */
    loadTextSource(
      "text-doctype"
    );


    return;

  }


  /*
  처음 두 window만 사용
  */

  const first =
    windows[0];


  const second =
    windows[1];


  /*
  세 번째 이상
  */

  if (
    myRole > 1
  ) {

    editorialText.style.visibility =
      "hidden";


    return;

  }


  editorialText.style.visibility =
    "visible";


  /*
  ========================================
  OVERLAP CHECK
  ========================================
  */

  const overlapRect =
    intersection(
      first.rect,
      second.rect
    );


  /*
  ========================================
  NOT OVERLAPPING
  ========================================
  */

  if (!overlapRect) {

    currentOrientation =
      "none";


    if (
      myRole === 0
    ) {

      loadTextSource(
        "text-html-open"
      );

    }


    else {

      loadTextSource(
        "text-html-close"
      );

    }


    return;

  }


  /*
  ========================================
  CENTER
  ========================================
  */

  const firstCenterX =
    first.rect.left +
    first.rect.width /
    2;


  const firstCenterY =
    first.rect.top +
    first.rect.height /
    2;


  const secondCenterX =
    second.rect.left +
    second.rect.width /
    2;


  const secondCenterY =
    second.rect.top +
    second.rect.height /
    2;


  const dx =
    Math.abs(
      firstCenterX -
      secondCenterX
    );


  const dy =
    Math.abs(
      firstCenterY -
      secondCenterY
    );


  /*
  center Y 차이가 크면
  위 / 아래 관계.
  */

  const isVertical =
    dy > dx;


  /*
  ========================================
  HORIZONTAL
  ========================================
  */

  if (!isVertical) {

    currentOrientation =
      "horizontal";


    if (
      myRole === 0
    ) {

      loadTextSource(
        "text-a-open"
      );

    }


    else {

      loadTextSource(
        "text-a-close"
      );

    }


    return;

  }


  /*
  ========================================
  VERTICAL
  ========================================
  */

  currentOrientation =
    "vertical";


  const firstIsTop =
    firstCenterY <
    secondCenterY;


  const iAmTop =
    (
      myRole === 0 &&
      firstIsTop
    ) ||
    (
      myRole === 1 &&
      !firstIsTop
    );


  if (iAmTop) {

    loadTextSource(
      "text-vertical-top"
    );

  }


  else {

    loadTextSource(
      "text-vertical-bottom"
    );

  }

}


/* ========================================
   HELPERS
======================================== */

function clamp(value, min, max) {

  if (
    max < min
  ) {

    return (
      min +
      max
    ) / 2;

  }


  return Math.max(
    min,
    Math.min(
      max,
      value
    )
  );

}


function getScaledWidth(
  letter,
  fontSize
) {

  return (
    letter.baseWidth *
    fontSize /
    BASE_FONT_SIZE
  );

}


function getScaledHeight(
  letter,
  fontSize
) {

  return (
    letter.baseHeight *
    fontSize /
    BASE_FONT_SIZE
  );

}


/* ========================================
   LINE SIZE
======================================== */

function getLineWidth(
  line,
  fontSize
) {

  let width =
    0;


  for (
    let i = 0;
    i < line.letters.length;
    i++
  ) {

    width +=
      getScaledWidth(
        line.letters[i],
        fontSize
      );


    if (
      i <
      line.letters.length - 1
    ) {

      width +=
        LETTER_GAP;

    }

  }


  return width;

}


function getMaxLineWidth(
  fontSize
) {

  let width =
    0;


  for (
    const line
    of lines
  ) {

    width =
      Math.max(
        width,
        getLineWidth(
          line,
          fontSize
        )
      );

  }


  return width;

}


function getLineHeight(
  fontSize
) {

  if (
    !letters.length
  ) {
    return fontSize;
  }


  let maxHeight =
    0;


  for (
    const letter
    of letters
  ) {

    maxHeight =
      Math.max(
        maxHeight,
        getScaledHeight(
          letter,
          fontSize
        )
      );

  }


  return maxHeight;

}


function getBlockHeight(
  fontSize
) {

  const lineHeight =
    getLineHeight(
      fontSize
    );


  const lineGap =
    fontSize *
    LINE_GAP_RATIO;


  if (
    !lines.length
  ) {
    return 0;
  }


  return (
    lineHeight *
    lines.length +
    lineGap *
    (
      lines.length -
      1
    )
  );

}


/* ========================================
   AVAILABLE REGIONS
======================================== */

function getRegions(
  obstacle
) {

  const viewportW =
    window.innerWidth;


  const viewportH =
    window.innerHeight;


  /*
  overlap 없음
  */

  if (!obstacle) {

    return [

      {

        name:
          "full",

        x:
          WINDOW_PADDING,

        y:
          WINDOW_PADDING,

        width:
          viewportW -
          WINDOW_PADDING * 2,

        height:
          viewportH -
          WINDOW_PADDING * 2

      }

    ];

  }


  const leftEnd =
    obstacle.x -
    OBSTACLE_GAP;


  const rightStart =
    obstacle.x +
    obstacle.width +
    OBSTACLE_GAP;


  const topEnd =
    obstacle.y -
    OBSTACLE_GAP;


  const bottomStart =
    obstacle.y +
    obstacle.height +
    OBSTACLE_GAP;


  return [

    {

      name:
        "left",

      x:
        WINDOW_PADDING,

      y:
        WINDOW_PADDING,

      width:
        leftEnd -
        WINDOW_PADDING,

      height:
        viewportH -
        WINDOW_PADDING * 2

    },


    {

      name:
        "right",

      x:
        rightStart,

      y:
        WINDOW_PADDING,

      width:
        viewportW -
        WINDOW_PADDING -
        rightStart,

      height:
        viewportH -
        WINDOW_PADDING * 2

    },


    {

      name:
        "top",

      x:
        WINDOW_PADDING,

      y:
        WINDOW_PADDING,

      width:
        viewportW -
        WINDOW_PADDING * 2,

      height:
        topEnd -
        WINDOW_PADDING

    },


    {

      name:
        "bottom",

      x:
        WINDOW_PADDING,

      y:
        bottomStart,

      width:
        viewportW -
        WINDOW_PADDING * 2,

      height:
        viewportH -
        WINDOW_PADDING -
        bottomStart

    }

  ].filter(
    region =>
      region.width > 1 &&
      region.height > 1
  );

}


/* ========================================
   MAX FONT FOR REGION
======================================== */

function getFontSizeForRegion(
  region
) {

  if (
    !letters.length
  ) {

    return MIN_FONT_SIZE;

  }


  const baseWidth =
    getMaxLineWidth(
      BASE_FONT_SIZE
    );


  const baseHeight =
    getBlockHeight(
      BASE_FONT_SIZE
    );


  if (
    baseWidth <= 0 ||
    baseHeight <= 0
  ) {

    return BASE_FONT_SIZE;

  }


  const widthScale =
    region.width /
    baseWidth;


  const heightScale =
    region.height /
    baseHeight;


  const scale =
    Math.min(
      widthScale,
      heightScale
    );


  return clamp(
    BASE_FONT_SIZE *
    scale,

    MIN_FONT_SIZE,

    MAX_FONT_SIZE
  );

}


/* ========================================
   MULTILINE LAYOUT
======================================== */

function multilineLayout(
  region,
  fontSize
) {

  const positions =
    [];


  const lineHeight =
    getLineHeight(
      fontSize
    );


  const lineGap =
    fontSize *
    LINE_GAP_RATIO;


  const blockHeight =
    getBlockHeight(
      fontSize
    );


  let currentY =
    region.y +
    region.height / 2 -
    blockHeight / 2;


  for (
    const line
    of lines
  ) {

    const lineWidth =
      getLineWidth(
        line,
        fontSize
      );


    let currentX =
      region.x +
      region.width / 2 -
      lineWidth / 2;


    const centerY =
      currentY +
      lineHeight / 2;


    for (
      const letter
      of line.letters
    ) {

      const width =
        getScaledWidth(
          letter,
          fontSize
        );


      currentX +=
        width / 2;


      positions.push({

        letter:
          letter,

        x:
          currentX,

        y:
          centerY

      });


      currentX +=
        width / 2 +
        LETTER_GAP;

    }


    currentY +=
      lineHeight +
      lineGap;

  }


  return positions;

}


/* ========================================
   CHECK FIT
======================================== */

function layoutFitsRegion(
  layout,
  region,
  fontSize
) {

  for (
    const item
    of layout
  ) {

    const width =
      getScaledWidth(
        item.letter,
        fontSize
      );


    const height =
      getScaledHeight(
        item.letter,
        fontSize
      );


    const left =
      item.x -
      width / 2;


    const right =
      item.x +
      width / 2;


    const top =
      item.y -
      height / 2;


    const bottom =
      item.y +
      height / 2;


    if (
      left < region.x ||
      right > region.x +
        region.width ||
      top < region.y ||
      bottom > region.y +
        region.height
    ) {

      return false;

    }

  }


  return true;

}


/* ========================================
   BEST REGION
======================================== */

function findBestLayout(
  obstacle
) {

  const regions =
    getRegions(
      obstacle
    );


  const candidates =
    [];


  for (
    const region
    of regions
  ) {

    const fontSize =
      getFontSizeForRegion(
        region
      );


    const layout =
      multilineLayout(
        region,
        fontSize
      );


    if (
      layoutFitsRegion(
        layout,
        region,
        fontSize
      )
    ) {

      candidates.push({

        region:
          region,

        fontSize:
          fontSize,

        layout:
          layout

      });

    }

  }


  if (
    !candidates.length
  ) {

    return null;

  }


  /*
  가장 큰 font를 만들 수 있는
  region 선택.
  */

  candidates.sort(
    (a, b) =>
      b.fontSize -
      a.fontSize
  );


  return candidates[0];

}


/* ========================================
   OVERLAP FALLBACK

   바깥 공간이 너무 좁으면
   텍스트를 줄이지 않고
   overlap 위로 허용.
======================================== */

function getFallbackLayout() {

  const region = {

    x:
      WINDOW_PADDING,

    y:
      WINDOW_PADDING,

    width:
      window.innerWidth -
      WINDOW_PADDING * 2,

    height:
      window.innerHeight -
      WINDOW_PADDING * 2

  };


  const fontSize =
    clamp(
      BASE_FONT_SIZE,
      MIN_FONT_SIZE,
      MAX_FONT_SIZE
    );


  return {

    fontSize:
      fontSize,

    layout:
      multilineLayout(
        region,
        fontSize
      )

  };

}


/* ========================================
   UPDATE TEXT
======================================== */

function updateEditorialLayout(
  obstacle
) {

  if (
    myRole > 1
  ) {

    editorialText.style.visibility =
      "hidden";

    return;

  }


  editorialText.style.visibility =
    "visible";


  if (
    !letters.length
  ) {
    return;
  }


  const best =
    findBestLayout(
      obstacle
    );


  /*
  obstacle 밖에 공간이 있다면
  그쪽으로 배치.
  */

  if (best) {

    for (
      const item
      of best.layout
    ) {

      item.letter.targetX =
        item.x;


      item.letter.targetY =
        item.y;


      item.letter.targetFontSize =
        best.fontSize;

    }


    return;

  }


  /*
  공간 부족:
  overlap 영역과 겹치는 것을 허용.
  */

  const fallback =
    getFallbackLayout();


  for (
    const item
    of fallback.layout
  ) {

    item.letter.targetX =
      item.x;


    item.letter.targetY =
      item.y;


    item.letter.targetFontSize =
      fallback.fontSize;

  }

}


/* ========================================
   ANIMATION
======================================== */

function animateLetters() {

  const suppressMotion =
    performance.now() <
    suppressLetterMotionUntil;

  for (
    const letter
    of letters
  ) {

    if (suppressMotion) {

      letter.x =
        letter.targetX;

      letter.y =
        letter.targetY;

      letter.fontSize =
        letter.targetFontSize;

    }

    else {

    letter.x +=
      (
        letter.targetX -
        letter.x
      ) *
      FOLLOW_SPEED;


    letter.y +=
      (
        letter.targetY -
        letter.y
      ) *
      FOLLOW_SPEED;


    letter.fontSize +=
      (
        letter.targetFontSize -
        letter.fontSize
      ) *
      SIZE_FOLLOW_SPEED;

    }


    letter.element.style.left =
      `${letter.x}px`;


    letter.element.style.top =
      `${letter.y}px`;


    letter.element.style.fontSize =
      `${letter.fontSize}px`;

  }

}


/* ========================================
   MAIN UPDATE
======================================== */

function update() {

  updateRole();


  updateEnergyTheme();


  const me =
    getViewportRect();


  const now =
    Date.now();


  let overlapRect =
    null;


  let activeWindows =
    0;


  for (
    const [id, other]
    of otherWindows
  ) {

    if (
      now -
      other.time >
      1200
    ) {

      otherWindows.delete(
        id
      );

      continue;

    }


    activeWindows++;


    const result =
      intersection(
        me,
        other.rect
      );


    if (result) {

      overlapRect =
        result;

      break;

    }

  }


  /*
  ========================================
  NO OVERLAP
  ========================================
  */

  if (!overlapRect) {

    overlap.style.display =
      "none";


    currentObstacle =
      null;


    updateEditorialLayout(
      null
    );

  }


  /*
  ========================================
  OVERLAP
  ========================================
  */

  else {

    const localX =
      overlapRect.left -
      me.left;


    const localY =
      overlapRect.top -
      me.top;


    overlap.style.display =
      "flex";


    overlap.style.left =
      `${localX}px`;


    overlap.style.top =
      `${localY}px`;


    overlap.style.width =
      `${overlapRect.width}px`;


    overlap.style.height =
      `${overlapRect.height}px`;


    currentObstacle = {

      x:
        localX,

      y:
        localY,

      width:
        overlapRect.width,

      height:
        overlapRect.height

    };


    updateEditorialLayout(
      currentObstacle
    );

  }


  debug.textContent =
`WINDOW ${myRole + 1}

SOURCE
${currentSourceId}

ORIENTATION
${currentOrientation}

LINES
${lines.length}

TEXT LINES
${lines.length}

OTHER WINDOWS
${activeWindows}

OVERLAP
${overlapRect ? "YES" : "NO"}`;

}



/* ========================================
   NO-LETTER MODE OVERRIDES
   No character-by-character .letter spans are created.
======================================== */

function loadTextSource(sourceId, instant = false) {

  if (sourceId === currentSourceId) {
    return;
  }

  currentSourceId = sourceId;

  editorialText.innerHTML = "";
  letters = [];
  lines = [];

  const source =
    document.getElementById(sourceId);

  if (!source) {
    return;
  }

  const block =
    document.createElement("div");

  block.className =
    "text-block" +
    (
      sourceId === "text-doctype"
        ? " is-doctype"
        : ""
    );

  block.style.color =
    currentEnergyColor;

  const sourceLines =
    source.querySelectorAll(
      ":scope > span"
    );

  sourceLines.forEach(
    (sourceLine, lineIndex) => {

      const element =
        document.createElement("span");

      element.className =
        "text-line";

      element.textContent =
        sourceLine.textContent;

      element.dataset.lineIndex =
        String(lineIndex);

      block.appendChild(element);

      lines.push({
        index: lineIndex,
        element: element
      });

    }
  );

  editorialText.appendChild(block);

  updateEditorialLayout(
    currentObstacle,
    instant
  );
}


/* ========================================
   WHOLE-TEXT LAYOUT
======================================== */

function updateEditorialLayout(
  obstacle,
  instant = false
) {

  if (myRole > 1) {
    editorialText.style.visibility =
      "hidden";
    return;
  }

  editorialText.style.visibility =
    "visible";

  const block =
    editorialText.querySelector(
      ".text-block"
    );

  if (!block) {
    return;
  }

  const regions =
    getRegions(obstacle);

  let bestRegion = null;
  let bestFontSize = MIN_FONT_SIZE;

  /*
  Measure the whole multiline text block,
  then find the largest font size that fits
  into one of the available regions.
  */
  for (const region of regions) {

    if (
      region.width <= 0 ||
      region.height <= 0
    ) {
      continue;
    }

    let low = MIN_FONT_SIZE;
    let high = MAX_FONT_SIZE;
    let fit = MIN_FONT_SIZE;

    for (let i = 0; i < 12; i++) {

      const test =
        (low + high) / 2;

      block.style.fontSize =
        `${test}px`;

      const rect =
        block.getBoundingClientRect();

      if (
        rect.width <= region.width &&
        rect.height <= region.height
      ) {
        fit = test;
        low = test;
      }
      else {
        high = test;
      }

    }

    if (
      !bestRegion ||
      fit > bestFontSize
    ) {
      bestRegion = region;
      bestFontSize = fit;
    }

  }

  /*
  If no outside region can hold the text,
  use the whole viewport as fallback.
  */
  if (!bestRegion) {

    bestRegion = {
      x: WINDOW_PADDING,
      y: WINDOW_PADDING,
      width:
        Math.max(
          1,
          window.innerWidth -
          WINDOW_PADDING * 2
        ),
      height:
        Math.max(
          1,
          window.innerHeight -
          WINDOW_PADDING * 2
        )
    };

    bestFontSize =
      clamp(
        BASE_FONT_SIZE,
        MIN_FONT_SIZE,
        MAX_FONT_SIZE
      );

  }

  const centerX =
    bestRegion.x +
    bestRegion.width / 2;

  const centerY =
    bestRegion.y +
    bestRegion.height / 2;

  if (instant) {
    const oldTransition =
      block.style.transition;

    block.style.transition =
      "none";

    block.style.left =
      `${centerX}px`;

    block.style.top =
      `${centerY}px`;

    block.style.fontSize =
      `${bestFontSize}px`;

    block.getBoundingClientRect();

    block.style.transition =
      oldTransition;
  }
  else {
    block.style.left =
      `${centerX}px`;

    block.style.top =
      `${centerY}px`;

    block.style.fontSize =
      `${bestFontSize}px`;
  }
}


/* ========================================
   COLOR
======================================== */

function applyEnergyColor(color) {

  currentEnergyColor = color;

  overlapImage.style.backgroundColor =
    color;

  editorialText.style.color =
    color;

  const block =
    editorialText.querySelector(
      ".text-block"
    );

  if (block) {
    block.style.color = color;
  }

  updateFavicon(color);
}


/* ========================================
   TITLE
======================================== */

function applyEnergyTitle(title) {

  currentEnergyTitle = title;

  /*
  Actual browser-tab title.
  */
  document.title = title;

  /*
  Update the hidden HTML source.
  */
  const source =
    document.getElementById(
      "text-vertical-top"
    );

  if (source) {

    const sourceTitleLine =
      source.querySelector(
        ":scope > span:nth-child(2)"
      );

    if (sourceTitleLine) {
      sourceTitleLine.textContent =
        `<title>${title}</title>`;
    }

  }

  /*
  If vertical-top is already visible,
  only replace the line's textContent.
  The DOM element itself stays in place,
  so its color transition is preserved.
  */
  if (
    currentSourceId ===
    "text-vertical-top"
  ) {

    const visibleTitleLine =
      editorialText.querySelector(
        '.text-line[data-line-index="1"]'
      );

    if (visibleTitleLine) {
      visibleTitleLine.textContent =
        `<title>${title}</title>`;
    }

    updateEditorialLayout(
      currentObstacle
    );

  }
}


/* ========================================
   LETTER ANIMATION REMOVED
======================================== */

function animateLetters() {
  /*
  Intentionally empty.
  Text now moves as one multiline block.
  */
}


/* ========================================
   DOCTYPE CLICK — WHOLE TEXT
======================================== */

editorialText.addEventListener(
  "click",
  event => {

    const block =
      event.target.closest(
        ".text-block.is-doctype"
      );

    if (!block) {
      return;
    }

    openSecondWindow();

  }
);


/* ========================================
   LOOP
======================================== */

function loop() {

  broadcast();

  update();

  animateLetters();

  requestAnimationFrame(
    loop
  );

}


/* ========================================
   START
======================================== */

updateRole();

applyEnergyUrl(
  ENERGY_URLS[0]
);

applyEnergyColor(
  DEFAULT_ENERGY_COLOR
);

document.title =
  ENERGY_TITLES[0] ||
  "html energy";

loop();


/* ========================================
   CLOSE
======================================== */

window.addEventListener(
  "beforeunload",
  () => {

    channel.postMessage({

      type:
        "close",

      id:
        myId

    });


    channel.close();

  }
);


})();