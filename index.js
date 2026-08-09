(() => {
const overlap = document.querySelector("#overlap");
const overlapImage = document.querySelector("#overlapImage");
const overlapIframe = document.querySelector("#overlapIframe");
const dynamicFavicon = document.querySelector("#dynamicFavicon");
const editorialText = document.querySelector("#editorialText");
const debug = document.querySelector("#debug");
const channelName = "browser-window-overlap-test";
const baseFontSize = 18;
const minFontSize = 18;
const maxFontSize = 30;
const windowPadding = 12;
const obstacleGap = 10;
const letterGap = 0;
const lineGapRatio = 0.35;
const followSpeed = 0.16;
const sizeFollowSpeed = 0.14;
const secondWindowWidth = 896;
const secondWindowHeight = 550;

let secondWindow = null;

const energyInterval = 4000;
const defaultEnergyColor = "#6ff304";

const energyColors = [
  "#6ff304",
  "#ff2974",
  "#813d9c",
  "#fcf646",
  "#e47d17",
  "#ff2ddb",
  "#ff2ddb",
  "#ec13b9",
  "#fcd116",
  "#f1d4ff",
  "#ff662e",
  "#00d5ff",
  "#280e2b",
  "#e5a50a",
  "#00ff00",
  "#db2828",
  "#e7d0f5",
  "#90ef45",
  "#63452c",
  "#13ecb6",
  "#b0ad32",
  "#b0ad32",
  "#00c8ec",
  "#0700ff",
  "#fabd1b",
  "#0000ff",
  "#ff7800",
  "#e22400",
  "#5813ec",
  "#e81828",
  "#008b8b",
  "#00ff00",
  "#ff0088",
  "#ff9622",
  "#11e3ee",
  "#63ec13",
  "#9932cc",
  "#0000d1",
  "#00ff00",
  "#005eb8",
  "#ff2600",
  "#1e90ff",
  "#04ff00",
  "#ed0817",
  "#e0adf6",
  "#ecc813",
  "#eca713",
  "#a4d65e",
  "#fafed4",
  "#00f100",
  "#f9e45d",
  "#5ba973",
  "#95c53a",
  "#00ff11",
  "#f62837",
  "#f2037a",
  "#bb86b4",
  "#1eebda",
  "#7ae4ff",
  "#99ff00",
  "#0000ff",
  "#ec0868",
  "#fb5b1f",
  "#fffc41",
  "#8ff0a4",
  "#7340ec",
  "#13abec",
  "#ffeeee",
  "#bbeeee",
  "#db7093",
  "#da1145",
  "#f2ad5f"
];

const energyTitles = [
  "html energy",
  "ottawa energy",
  "online energy",
  "brussels energy",
  "strasbourg energy",
  "atlanta energy",
  "tampa energy",
  "san carlos de bariloche energy",
  "manila energy",
  "budapest energy",
  "sài gòn energy",
  "calgary energy",
  "rotterdam energy",
  "karlstad energy",
  "helsinki energy",
  "barcelona energy",
  "london energy",
  "st. louis energy",
  "hamburg energy",
  "edmonton energy",
  "victoria energy",
  "new brunswick energy",
  "manchester energy",
  "melbourne energy",
  "portland energy",
  "montevideo energy",
  "barre energy",
  "waterloo energy",
  "melbourne energy",
  "philadelphia energy",
  "hampton roads energy",
  "bogotá energy",
  "sydney energy",
  "jersey city energy",
  "washington energy",
  "astoria energy",
  "curitiba energy",
  "tiburon energy",
  "leipzig energy",
  "edinburgh energy",
  "rotterdam energy",
  "montréal energy",
  "berlin energy",
  "erfurt energy",
  "karachi energy",
  "amsterdam energy",
  "madrid energy",
  "saskatoon energy",
  "kyoto energy",
  "san diego energy",
  "kuala lumpur energy",
  "lancaster energy",
  "singapore energy",
  "seoul energy",
  "toukatsu energy",
  "rio de janeiro energy",
  "leicester energy",
  "seattle energy",
  "shanghai energy",
  "toronto energy",
  "buenos aires energy",
  "north italy energy",
  "san francisco energy",
  "los angeles energy",
  "lisbon",
  "kyoto energy",
  "minneapolis energy",
  "tokyo energy",
  "auckland energy",
  "new york energy",
  "dallas energy",
  "austin energy"
];

const energyUrls = [
  "https://2026.html.energy",
  "https://htmldayottawa2026.k334a.com",
  "https://zacharykai.net/events/htmlday",
  "https://htmlday.constantvzw.org",
  "https://timothee.goguely.com/html-day/2026/index.html",
  "https://htmlatlanta2026.neocities.org",
  "https://tampa-html.lol",
  "https://html.partidopirata.com.ar",
  "https://htmldaymanila.neocities.org",
  "https://frairy.net/htmlday",
  "https://qwook.io/events/htmlday2026",
  "https://ariellelok.com/sidepages/2026htmlday.html",
  "https://varia.zone/en/2026/html-day",
  "https://tilde.club/~mikael/html_day_karlstad/2026.html",
  "https://yumoon.neocities.org/html-helsinki",
  "https://permacomputing.barcelona/html-day-2026",
  "https://londonhtmlday.neocities.org",
  "https://htmlenergystl.neocities.org",
  "http://html.wwwegetables.net",
  "https://libreinternet.club/events/htmlday2026",
  "https://vicbc.neocities.org/html-day/2026",
  "https://knavehaven.net/events/htmlday_nj_2026.html",
  "https://sanaas.world/html%20day%202026",
  "https://html.beer",
  "https://clipdx.com/htmlday/index.html",
  "https://energiahtmlmvd.nya.je",
  "https://tanzi-media.com/Blogs/Misc_blogs/html_day_26",
  "https://titleduntitled.name/facades/html-day-waterloo-2026.html",
  "https://html.beer",
  "https://html-day-philly.github.io",
  "https://tekgadgt.github.io/htmlday-hamptonroads/2026",
  "https://energiahtml.neocities.org",
  "https://maxbo.me/html-in-hyde/2/invitation.html",
  "https://radnyc.net/htmlDay2026",
  "https://html-day-dc-2026.onrender.com",
  "https://eligundry.com/astoria-html-day-2026",
  "https://htmldaycwb.neocities.org",
  "https://htmlday.sharonzheng.com",
  "https://htmlday.brave-tutorials.org",
  "https://html-day-edi.neocities.org",
  "http://htmlday2026.gromits.space",
  "https://html.blue",
  "https://codearchivesu.github.io/htmlday2026.berlin/index.html",
  "https://htmldayerfurt.neocities.org",
  "https://codecircles.neocities.org",
  "https://www.zinzy.website/2026/06/27/html-day-2026-amsterdam-edition",
  "https://netseque.neocities.org/htmlday/2026",
  "https://yxe-html.neocities.org",
  "https://htmlday-kyoto2.neocities.org",
  "https://htmlday.joespartydepot.com",
  "https://htmlday-kl.neocities.org",
  "https://lancasterhtml.day",
  "https://amalinalai.github.io/htmlenergy/event-2026.html",
  "http://afterneworder.com/htmlday",
  "https://htmlday2026.toukatsu.dev",
  "https://htmlday2026rio.neocities.org",
  "https://nmac.neocities.org/htmlday",
  "https://htmldayseattle.neocities.org",
  "https://rect.repair/html-2026",
  "https://lab.technopoetics.com",
  "https://www.energiahtml.com",
  "https://tommi.space/htmlday/2026",
  "https://www.tiat.place/htmlday",
  "https://html-day-los-angeles.netlify.app",
  "https://htmllisbon.nekoweb.org/index.html",
  "https://htmldaykyoto.neocities.org",
  "https://restorativland.org/htmlday2026",
  "https://htmldaytokyo.neocities.org/2026",
  "https://sophiawu.nz/htmlday",
  "https://valuesbased.software/html.html",
  "https://dallashtml.day",
  "https://htmlaustin.com"
];

let currentEnergyIndex = -1;
let currentEnergyColor = defaultEnergyColor;
let currentEnergyTitle = "html energy";
let currentEnergyUrl = energyUrls[0] || "https://2026.html.energy/";
let suppressLetterMotionUntil = 0;

const myId = crypto.randomUUID();
const myStartedAt = performance.timeOrigin;
const channel = new BroadcastChannel(channelName);
const otherWindows = new Map();

let myRole = 0;
let currentSourceId = "";
let letters = [];
let lines = [];
let currentObstacle = null;
let currentOrientation = "none";

function openSecondWindow() {
  if (
    secondWindow &&
    !secondWindow.closed
  ) {
    secondWindow.focus();
    return;
  }

  const url = new URL(window.location.href);
  url.searchParams.set("","body");

  const screenLeft = window.screen.availLeft ?? 0;
  const screenTop = window.screen.availTop ?? 0;
  const left = screenLeft + window.screen.availWidth - secondWindowWidth;
  const top = screenTop;

  const features = [
    `width=${secondWindowWidth}`,
    `height=${secondWindowHeight}`,
    `left=${Math.round(left)}`,
    `top=${Math.round(top)}`,
    "resizable=yes",
    "scrollbars=yes"
  ].join(",");
  secondWindow = window.open(url.toString(), "html-energy-second-window", features);
}

editorialText.addEventListener("click", event => {
    if (
      currentSourceId !== "text-doctype"
    ) {
      return;
    }
    const letter = event.target.closest(".letter");
    if (!letter) {
      return;
    }
    openSecondWindow();
  }
);

let iframeOpened = false;
let energyThemeLocked = false;
let lockedEnergyIndex = null;

overlapImage.addEventListener("click", event => {
  event.stopPropagation();
  energyThemeLocked = true;

  lockedEnergyIndex =
    currentEnergyIndex >= 0
      ? currentEnergyIndex
      : 0;

  channel.postMessage({
    type: "lock-energy-theme",
    id: myId,
    index: lockedEnergyIndex
  });

  iframeOpened = true;
  overlapIframe.src = currentEnergyUrl;
  overlapImage.style.display = "none";
  overlapIframe.style.display = "block";
});


/* ========================================
   LOAD TEXT FROM HTML
======================================== */

function loadTextSource(sourceId, instant = false) {
  if (
    sourceId === currentSourceId
  ) {
    return;
  }

  currentSourceId = sourceId;
  editorialText.style.cursor = sourceId === "text-doctype"
      ? "pointer"
      : "default";

  editorialText.innerHTML = "";
  letters = [];
  lines = [];

  const source = document.getElementById(sourceId);
  if (!source) {
    return;
  }

  const sourceLines = source.querySelectorAll(":scope > span");
  sourceLines.forEach(
    (sourceLine, lineIndex) => {

      const text = sourceLine.textContent;
      const line = { index: lineIndex, letters: [] };
      for (
        let charIndex = 0;
        charIndex < text.length;
        charIndex++
      ) {
        const element = document.createElement("span");

        element.className = "letter";
        element.textContent = text[charIndex];
        element.style.fontSize = `${baseFontSize}px`;
        element.style.color = currentEnergyColor;
        element.style.cursor = sourceId === "text-doctype"
            ? "pointer"
            : "default";
        editorialText.appendChild(element);

        const rect = element.getBoundingClientRect();
        const letter = {
          element: element,
          lineIndex: lineIndex,
          charIndex: charIndex,
          baseWidth: rect.width,
          baseHeight: rect.height,

          x: window.innerWidth / 2,
          y: window.innerHeight / 2,

          targetX: window.innerWidth / 2,
          targetY: window.innerHeight / 2,

          fontSize: baseFontSize,
          targetFontSize: baseFontSize
        };

        letters.push(letter);
        line.letters.push(letter);
      }
      lines.push(line);
    }
  );
}

function snapLettersToTargets() {
  for (
    const letter
    of letters
  ) {
    letter.x = letter.targetX;
    letter.y = letter.targetY;
    letter.fontSize = letter.targetFontSize;
    letter.element.style.left = `${letter.x}px`;
    letter.element.style.top = `${letter.y}px`;
    letter.element.style.fontSize = `${letter.fontSize}px`;
  }
}


function getStarMaskDataUrl() {
  const style = getComputedStyle(overlapImage);
  const value = style.webkitMaskImage || style.maskImage || "";
  const match = value.match(/url\(["']?(data:image\/png;base64,[^)"']+)["']?\)/);

  return match
    ? match[1]
    : "";
}


function updateFavicon(color) {
  if (!dynamicFavicon) {
    return;
  }
  const maskData = getStarMaskDataUrl();
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

  dynamicFavicon.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function applyEnergyColor(color) {
  currentEnergyColor = color;
  overlapImage.style.backgroundColor = color;
  for (
    const letter
    of letters
  ) {
    letter.element.style.color = color;
  }
  updateFavicon(color);
}

function updateTitleLetters(title) {
  const titleLine = lines[1];
  if (!titleLine) {
    return;
  }

  const newText = `<title>${title}</title>`;
  const oldCount = titleLine.letters.length;
  const commonCount = Math.min(oldCount, newText.length);

  for (
    let i = 0;
    i < commonCount;
    i++
  ) {
    const letter = titleLine.letters[i];
    letter.element.textContent = newText[i];
    letter.charIndex = i;
  }
  
  if (newText.length > oldCount) {
    for (
      let i = oldCount;
      i < newText.length;
      i++
    ) {
    
      const element = document.createElement("span");
      element.className = "letter";
      element.textContent = newText[i];
      element.style.fontSize = `${baseFontSize}px`;
      element.style.color = currentEnergyColor;
      editorialText.appendChild(element);

      const rect = element.getBoundingClientRect();
      const previous = titleLine.letters[titleLine.letters.length - 1] || null;

      const letter = {
        element: element,
        lineIndex: 1,
        charIndex: i,
        baseWidth: rect.width,
        baseHeight: rect.height,

        x: previous
            ? previous.x
            : window.innerWidth / 2,

        y: previous
            ? previous.y
            : window.innerHeight / 2,

        targetX: previous
            ? previous.targetX
            : window.innerWidth / 2,

        targetY: previous
            ? previous.targetY
            : window.innerHeight / 2,

        fontSize: previous
            ? previous.fontSize
            : baseFontSize,

        targetFontSize: previous
            ? previous.targetFontSize
            : baseFontSize
      };
      letters.push(letter);
      titleLine.letters.push(letter);
    }
  }

  if (newText.length < oldCount) {
    const removed = titleLine.letters.splice(newText.length);
    for (
      const letter
      of removed
    ) {
      const globalIndex = letters.indexOf(letter);
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
  updateEditorialLayout(currentObstacle);
}

function applyEnergyTitle(title) {
  if (
    title === currentEnergyTitle
  ) {
    document.title = title;
    return;
  }
  currentEnergyTitle = title;
  document.title = title;

  const source = document.getElementById("text-vertical-top");
  if (source) {
    const sourceTitleLine = source.querySelector(":scope > span:nth-child(2)");
    if (sourceTitleLine) {
      sourceTitleLine.textContent = `<title>${title}</title>`;
    }
  }

  if (
    currentSourceId === "text-vertical-top"
  ) {
    updateTitleLetters(title);
  }

}

function applyEnergyUrl(url) {
  currentEnergyUrl = url || energyUrls[0] || "https://2026.html.energy/";
}

function updateEnergyTheme() {
  if (energyThemeLocked) {
    if (
      lockedEnergyIndex !== null &&
      lockedEnergyIndex >= 0 &&
      currentEnergyIndex !== lockedEnergyIndex
    ) {
      currentEnergyIndex = lockedEnergyIndex;
      applyEnergyTitle(energyTitles[lockedEnergyIndex]);
      applyEnergyColor(energyColors[lockedEnergyIndex]);
      applyEnergyUrl(energyUrls[lockedEnergyIndex]);
    }
    return;
  }

  if (
    currentOrientation !== "vertical"
  ) {
    if (
      currentEnergyIndex !== -1
    ) {
      currentEnergyIndex = -1;
      applyEnergyColor(defaultEnergyColor);
      applyEnergyTitle(energyTitles[0] || "html energy");
      applyEnergyUrl(energyUrls[0]);
    }
    return;
  }

  const total = Math.min(energyColors.length, energyTitles.length, energyUrls.length);
  if (
    total <= 0
  ) {
    return;
  }

  const index = Math.floor(Date.now() / energyInterval) % total;
  if (
    index === currentEnergyIndex
  ) {
    return;
  }
  currentEnergyIndex = index;
  applyEnergyTitle(energyTitles[index]);
  applyEnergyColor(energyColors[index]);
  applyEnergyUrl(energyUrls[index]);
}

function getViewportRect() {
  const chromeWidth = window.outerWidth - window.innerWidth;
  const chromeHeight = window.outerHeight - window.innerHeight;

  const borderLeft = Math.max(0, chromeWidth / 2);
  const browserTop = Math.max(0, chromeHeight);

  const left = window.screenX + borderLeft;
  const top = window.screenY + browserTop;

  return {
    left: left,
    top: top,
    right: left + window.innerWidth,
    bottom: top + window.innerHeight,
    width: window.innerWidth,
    height: window.innerHeight
  };
}


function intersection(a, b) {
  const left = Math.max(a.left, b.left);
  const top = Math.max(a.top, b.top);
  const right = Math.min(a.right, b.right);
  const bottom =Math.min(a.bottom, b.bottom);
  const width = right - left;
  const height = bottom - top;

  if (width <= 0 || height <= 0) {
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

function broadcast() {
  channel.postMessage({
    type: "position",
    id: myId,
    startedAt: myStartedAt,
    rect: getViewportRect(),
    time: Date.now()
  });
}

channel.addEventListener("message", event => {
    const data = event.data;

    if (!data) {
      return;
    }

    if (data.id === myId) {
      return;
    }

    if (data.type === "position") {
      otherWindows.set(
        data.id,
        {
          rect: data.rect,
          time: data.time,
          startedAt: data.startedAt
        }
      );

    }

    if (data.type === "lock-energy-theme") {
      energyThemeLocked = true;

      lockedEnergyIndex = Number.isInteger(data.index)
          ? data.index
          : currentEnergyIndex;

      if (
        lockedEnergyIndex !== null &&
        lockedEnergyIndex >= 0
      ) {
        currentEnergyIndex = lockedEnergyIndex;
        applyEnergyTitle(energyTitles[lockedEnergyIndex]);
        applyEnergyColor(energyColors[lockedEnergyIndex]);
        applyEnergyUrl(energyUrls[lockedEnergyIndex]);
      }
    }

    if (data.type === "close") {
      otherWindows.delete(
        data.id
      );
    }
    updateRole();
  }
);


function updateRole() {
  const windows = [{id: myId, startedAt: myStartedAt, rect: getViewportRect()}];
  const now = Date.now();

  for (
    const [id, other]
    of otherWindows
  ) {

    if (now - other.time > 1200) {
      continue;
    }
    windows.push({
      id: id,
      startedAt: other.startedAt,
      rect: other.rect
    });
  }

  windows.sort((a, b) => {

      if (
        a.startedAt !== b.startedAt
      ) {
        return (
          a.startedAt - b.startedAt
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

  myRole = windows.findIndex(item => item.id === myId);

  if (windows.length === 1) {
    currentOrientation = "none";
    loadTextSource("text-doctype");
    return;
  }

  const first = windows[0];
  const second = windows[1];

  if (myRole > 1) {
    editorialText.style.visibility = "hidden";
    return;
  }

  editorialText.style.visibility = "visible";

  const overlapRect = intersection(first.rect, second.rect);

  if (!overlapRect) {
    currentOrientation = "none";
    if (myRole === 0) {
      loadTextSource("text-html-open");
    }
    else {
      loadTextSource("text-html-close");
    }
    return;
  }

  const firstCenterX = first.rect.left + first.rect.width / 2;
  const firstCenterY = first.rect.top + first.rect.height / 2;

  const secondCenterX = second.rect.left + second.rect.width / 2;
  const secondCenterY = second.rect.top + second.rect.height / 2;

  const dx = Math.abs(firstCenterX - secondCenterX);
  const dy = Math.abs(firstCenterY - secondCenterY);

  const isVertical =  dy > dx;

  if (!isVertical) {
    currentOrientation = "horizontal";
    if (
      myRole === 0
    ) {
      loadTextSource("text-a-open");
    }
    else {
      loadTextSource("text-a-close");
    }
    return;
  }

  currentOrientation = "vertical";
  const firstIsTop = firstCenterY < secondCenterY;
  const iAmTop = (myRole === 0 && firstIsTop) || (myRole === 1 && !firstIsTop);

  if (iAmTop) {
    loadTextSource("text-vertical-top");
  }
  else {
    loadTextSource("text-vertical-bottom");
  }
}

function clamp(value, min, max) {
  if (max < min) {
    return (min + max) / 2;
  }
  return Math.max(min, Math.min(max, value));
}

function getScaledWidth(letter, fontSize) {
  return (letter.baseWidth * fontSize / baseFontSize);
}

function getScaledHeight(letter, fontSize) {
  return (letter.baseHeight * fontSize / baseFontSize);
}

function getLineWidth(line, fontSize) {
  let width = 0;
  for (
    let i = 0;
    i < line.letters.length;
    i++) {

    width += getScaledWidth(line.letters[i], fontSize);
    if (i < line.letters.length - 1) {
      width += letterGap;
    }
  }
  return width;
}


function getMaxLineWidth(fontSize) {
  let width = 0;

  for (
    const line
    of lines
  ) {
    width = Math.max(width, getLineWidth(line, fontSize));
  }
  return width;
}

function getLineHeight(fontSize) {
  if (
    !letters.length
  ) {
    return fontSize;
  }

  let maxHeight = 0;

  for (
    const letter
    of letters
  ) {
    maxHeight = Math.max(maxHeight, getScaledHeight(letter, fontSize));
  }
  return maxHeight;
}


function getBlockHeight(fontSize) {
  const lineHeight = getLineHeight(fontSize);
  const lineGap = fontSize * lineGapRatio;

  if (
    !lines.length
  ) {
    return 0;
  }
  return (lineHeight * lines.length + lineGap * (lines.length - 1));
}

function getRegions(obstacle) {
  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;

  if (!obstacle) {
    return [
      {
        name: "full",
        x: windowPadding,
        y: windowPadding,
        width: viewportW - windowPadding * 2,
        height: viewportH - windowPadding * 2
      }
    ];
  }

  const leftEnd = obstacle.x - obstacleGap;
  const rightStart = obstacle.x + obstacle.width + obstacleGap;
  const topEnd = obstacle.y - obstacleGap;
  const bottomStart = obstacle.y + obstacle.height + obstacleGap;

  return [
    {
      name: "left",
      x: windowPadding,
      y: windowPadding,
      width: leftEnd - windowPadding,
      height: viewportH - windowPadding * 2
    },
    {
      name: "right",
      x: rightStart,
      y: windowPadding,
      width: viewportW - windowPadding - rightStart,
      height: viewportH - windowPadding * 2
    },
    {
      name: "top",
      x: windowPadding,
      y: windowPadding,
      width: viewportW - windowPadding * 2,
      height: topEnd - windowPadding
    },
    {
      name: "bottom",
      x: windowPadding,
      y: bottomStart,
      width: viewportW - windowPadding * 2,
      height: viewportH - windowPadding - bottomStart
    }
  ].filter(region => region.width > 1 && region.height > 1);
}


function getFontSizeForRegion(region) {
  if (
    !letters.length
  ) {
    return minFontSize;
  }
  const baseWidth = getMaxLineWidth(baseFontSize);
  const baseHeight = getBlockHeight(baseFontSize);

  if (baseWidth <= 0 || baseHeight <= 0) {
    return baseFontSize;
  }
  const widthScale = region.width / baseWidth;
  const heightScale = region.height / baseHeight;
  const scale = Math.min(widthScale, heightScale);

  return clamp(baseFontSize * scale, minFontSize, maxFontSize);
}


function multilineLayout(region, fontSize) {
  const positions = [];
  const lineHeight = getLineHeight(fontSize);
  const lineGap = fontSize * lineGapRatio;
  const blockHeight = getBlockHeight(fontSize);
  let currentY = region.y + region.height / 2 - blockHeight / 2;

  for (
    const line
    of lines
  ) {

    const lineWidth = getLineWidth(line, fontSize);
    let currentX = region.x + egion.width / 2 - lineWidth / 2;

    const centerY = currentY + lineHeight / 2;
    for (
      const letter
      of line.letters
    ) {

      const width = getScaledWidth(letter, fontSize);
      currentX += width / 2;

      positions.push({
        letter: letter,
        x: currentX,
        y: centerY
      });
      currentX += width / 2 + letterGap;
    }
    currentY += lineHeight + lineGap;
  }
  return positions;
}


function layoutFitsRegion(layout, region,fontSize) {
  for (
    const item
    of layout
  ) {
    const width = getScaledWidth(item.letter, fontSize);
    const height = getScaledHeight(item.letter, fontSize);

    const left = item.x - width / 2;
    const right = item.x + width / 2;

    const top = item.y - height / 2;
    const bottom = item.y + height / 2;

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


function findBestLayout(obstacle) {
  const regions = getRegions(obstacle);
  const candidates = [];

  for (
    const region
    of regions
  ) {

    const fontSize = getFontSizeForRegion(region);
    const layout = multilineLayout(region, fontSize);

    if (
      layoutFitsRegion(layout, region, fontSize)
    ) {
      candidates.push({
        region: region,
        fontSize: fontSize,
        layout: layout
      });
    }
  }

  if (
    !candidates.length
  ) {
    return null;
  }


  candidates.sort((a, b) => b.fontSize - a.fontSize);
  return candidates[0];
}


function getFallbackLayout() {
  const region = {
    x: windowPadding,
    y: windowPadding,
    width: window.innerWidth - windowPadding * 2,
    height: window.innerHeight - windowPadding * 2
  };

  const fontSize = clamp(baseFontSize, minFontSize, maxFontSize);
  return {
    fontSize: fontSize,
    layout: multilineLayout(region, fontSize)
  };
}


function updateEditorialLayout(obstacle) {
  if (
    myRole > 1
  ) {
    editorialText.style.visibility = "hidden";
    return;
  }
  editorialText.style.visibility = "visible";
  if (
    !letters.length
  ) {
    return;
  }

  const best = findBestLayout(obstacle);
  if (best) {
    for (
      const item
      of best.layout
    ) {
      item.letter.targetX = item.x;
      item.letter.targetY = item.y;
      item.letter.targetFontSize = best.fontSize;
    }
    return;
  }

  const fallback = getFallbackLayout();
  for (
    const item
    of fallback.layout
  ) {
    item.letter.targetX = item.x;
    item.letter.targetY = item.y;
    item.letter.targetFontSize = fallback.fontSize;
  }
}


function animateLetters() {
  const suppressMotion = performance.now() < suppressLetterMotionUntil;

  for (
    const letter
    of letters
  ) {
    if (suppressMotion) {
      letter.x = letter.targetX;
      letter.y = letter.targetY;
      letter.fontSize = letter.targetFontSize;
    }
    else {
      letter.x += (letter.targetX - letter.x) * followSpeed;
      letter.y += (letter.targetY - letter.y) * followSpeed;
      letter.fontSize += (letter.targetFontSize - letter.fontSize) * sizeFollowSpeed;
    }
    letter.element.style.left = `${letter.x}px`;
    letter.element.style.top = `${letter.y}px`;
    letter.element.style.fontSize = `${letter.fontSize}px`;
  }
}


function update() {
  updateRole();
  updateEnergyTheme();

  const me = getViewportRect();
  const now = Date.now();

  let overlapRect = null;
  let activeWindows = 0;

  for (
    const [id, other]
    of otherWindows
  ) {

    if (now - other.time > 1200) {
      otherWindows.delete(id);
      continue;
    }

    activeWindows++;
    const result = intersection(me, other.rect);

    if (result) {
      overlapRect = result;
      break;
    }
  }

  if (!overlapRect) {
    overlap.style.display = "none";
    currentObstacle = null;
    updateEditorialLayout(null);
  }

  else {
    const localX = overlapRect.left - me.left;
    const localY = overlapRect.top - me.top;

    overlap.style.display = "flex";
    overlap.style.left = `${localX}px`;
    overlap.style.top = `${localY}px`;
    overlap.style.width = `${overlapRect.width}px`;
    overlap.style.height = `${overlapRect.height}px`;

    currentObstacle = {
      x: localX,
      y: localY,
      width: overlapRect.width,
      height: overlapRect.height
    };
    updateEditorialLayout(currentObstacle);
  }


  debug.textContent = `WINDOW ${myRole + 1}

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


function loadTextSource(sourceId, instant = false) {
  if (sourceId === currentSourceId) {
    return;
  }
  currentSourceId = sourceId;
  editorialText.innerHTML = "";
  letters = [];
  lines = [];

  const source = document.getElementById(sourceId);
  if (!source) {
    return;
  }

  const block = document.createElement("div");

  block.className = "text-block" +
    (
      sourceId === "text-doctype"
        ? " is-doctype"
        : ""
    );

  block.style.color = currentEnergyColor;

  const sourceLines = source.querySelectorAll(":scope > span");

  sourceLines.forEach(
    (sourceLine, lineIndex) => {

      const element = document.createElement("span");
      element.className = "text-line";
      element.textContent = sourceLine.textContent;
      element.dataset.lineIndex = String(lineIndex);
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


function updateEditorialLayout(
  obstacle,
  instant = false
) {

  if (myRole > 1) {
    editorialText.style.visibility = "hidden";
    return;
  }

  editorialText.style.visibility = "visible";

  const block = editorialText.querySelector(".text-block");

  if (!block) {
    return;
  }

  const regions = getRegions(obstacle);

  let bestRegion = null;
  let bestFontSize = minFontSize;

  for (const region of regions) {
    if (
      region.width <= 0 ||
      region.height <= 0
    ) {
      continue;
    }

    let low = minFontSize;
    let high = maxFontSize;
    let fit = minFontSize;

    for (let i = 0; i < 12; i++) {

      const test = (low + high) / 2;
      block.style.fontSize = `${test}px`;

      const rect = block.getBoundingClientRect();

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


  if (!bestRegion) {

    bestRegion = {
      x: windowPadding,
      y: windowPadding,
      width: Math.max(1, window.innerWidth - windowPadding * 2),
      height: Math.max(1, window.innerHeight - windowPadding * 2)
    };

    bestFontSize =
      clamp(baseFontSize, minFontSize, maxFontSize);

  }

  const centerX = bestRegion.x + bestRegion.width / 2;
  const centerY = bestRegion.y + bestRegion.height / 2;

  if (instant) {
    const oldTransition = block.style.transition;
    block.style.transition = "none";
    block.style.left = `${centerX}px`;
    block.style.top = `${centerY}px`;
    block.style.fontSize = `${bestFontSize}px`;
    block.getBoundingClientRect();
    block.style.transition = oldTransition;
  }
  else {
    block.style.left = `${centerX}px`;
    block.style.top = `${centerY}px`;
    block.style.fontSize = `${bestFontSize}px`;
  }
}


function applyEnergyColor(color) {
  currentEnergyColor = color;
  overlapImage.style.backgroundColor = color;
  editorialText.style.color = color;

  const block = editorialText.querySelector(".text-block");

  if (block) {
    block.style.color = color;
  }
  updateFavicon(color);
}



function applyEnergyTitle(title) {
  currentEnergyTitle = title;
  document.title = title;

  const source = document.getElementById("text-vertical-top");
  if (source) {
    const sourceTitleLine = source.querySelector(":scope > span:nth-child(2)");
    if (sourceTitleLine) {
      sourceTitleLine.textContent = `<title>${title}</title>`;
    }
  }

  if (currentSourceId === "text-vertical-top") {
    const visibleTitleLine = editorialText.querySelector('.text-line[data-line-index="1"]');
    if (visibleTitleLine) {
      visibleTitleLine.textContent = `<title>${title}</title>`;
    }
    updateEditorialLayout(currentObstacle);
  }
}


function animateLetters() {

}



editorialText.addEventListener("click", event => {
    const block = event.target.closest(".text-block.is-doctype");
    if (!block) {
      return;
    }
    openSecondWindow();
  }
);


function loop() {
  broadcast();
  update();
  animateLetters();
  requestAnimationFrame(loop);
}

updateRole();
applyEnergyUrl(energyUrls[0]);
applyEnergyColor(defaultEnergyColor);
document.title = energyTitles[0] || "html energy";
loop();

window.addEventListener("beforeunload",() => {
    channel.postMessage({
      type: "close",
      id: myId
    });
    channel.close();
  }
);

})();