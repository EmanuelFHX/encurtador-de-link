const STORAGE_KEY = "linko.links";
const THEME_KEY = "linko.theme";
const historyLimit = 5;

const form = document.querySelector("#shortenForm");
const input = document.querySelector("#urlInput");
const message = document.querySelector("#formMessage");
const resultCard = document.querySelector("#resultCard");
const shortLink = document.querySelector("#shortLink");
const copyLatest = document.querySelector("#copyLatest");
const copyState = document.querySelector("#copyState");
const historyList = document.querySelector("#historyList");
const clearHistory = document.querySelector("#clearHistory");
const template = document.querySelector("#historyItemTemplate");
const themeButtons = document.querySelectorAll("[data-theme]");

let links = loadLinks();
let latestLink = links[0] ?? null;

redirectShortLink();
applyTheme(localStorage.getItem(THEME_KEY) || "dark");
renderHistory();
if (latestLink) {
  showResult(latestLink, false);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const originalUrl = normalizeUrl(input.value.trim());

  if (!originalUrl) {
    showMessage("Digite uma URL válida para encurtar.");
    input.focus();
    return;
  }

  const existing = links.find((item) => item.originalUrl === originalUrl);
  const item = existing || createShortLink(originalUrl);

  links = [item, ...links.filter((link) => link.id !== item.id)].slice(0, historyLimit);
  latestLink = item;
  saveLinks();
  renderHistory();
  showResult(item, true);
  showMessage("");
  input.value = "";
});

copyLatest.addEventListener("click", () => {
  if (latestLink) copyShortLink(getShortUrl(latestLink), copyLatest);
});

clearHistory.addEventListener("click", () => {
  links = [];
  latestLink = null;
  saveLinks();
  renderHistory();
  resultCard.classList.add("hidden");
  showMessage("");
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => applyTheme(button.dataset.theme));
});

function createShortLink(originalUrl) {
  const code = makeCode(originalUrl);
  return {
    id: crypto.randomUUID(),
    originalUrl,
    code,
    shortUrl: buildShortUrl(code),
    createdAt: Date.now(),
  };
}

function makeCode(value) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const seed = `${value}${Date.now()}${Math.random()}`;
  let hash = 0;

  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) >>> 0;
  }

  let code = "";
  for (let index = 0; index < 5; index += 1) {
    code += alphabet[(hash + index * 17 + Math.floor(Math.random() * alphabet.length)) % alphabet.length];
  }

  return code;
}

function normalizeUrl(value) {
  if (!value) return "";
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const url = new URL(withProtocol);
    if (!url.hostname.includes(".")) return "";
    return url.href;
  } catch {
    return "";
  }
}

function showResult(item, copied) {
  shortLink.href = getShortUrl(item);
  shortLink.innerHTML = formatShortUrl(item);
  resultCard.classList.remove("hidden");
  copyState.classList.toggle("hidden", !copied);

  if (copied) {
    copyShortLink(getShortUrl(item), copyLatest);
  }
}

function renderHistory() {
  historyList.innerHTML = "";

  if (!links.length) {
    const empty = document.createElement("p");
    empty.className = "history-empty";
    empty.textContent = "Nenhum link encurtado ainda.";
    historyList.append(empty);
    clearHistory.disabled = true;
    return;
  }

  clearHistory.disabled = false;

  links.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const original = node.querySelector(".original-url");
    const shortened = node.querySelector(".history-short");
    const copyButton = node.querySelector(".copy-small");

    original.href = item.originalUrl;
    original.textContent = item.originalUrl;
    original.title = item.originalUrl;
    shortened.href = getShortUrl(item);
    shortened.innerHTML = formatShortUrl(item);
    shortened.title = getShortUrl(item);
    copyButton.addEventListener("click", () => copyShortLink(getShortUrl(item), copyButton));

    historyList.append(node);
  });
}

async function copyShortLink(value, button) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = value;
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.append(fallback);
    fallback.select();
    document.execCommand("copy");
    fallback.remove();
  }

  button.classList.add("copied");
  copyState.classList.remove("hidden");
  window.setTimeout(() => button.classList.remove("copied"), 1200);
}

function formatShortUrl(item) {
  const shortUrl = new URL(getShortUrl(item));
  return `${shortUrl.host}${shortUrl.pathname}?link=<span class="code">${item.code}</span>`;
}

function getShortUrl(item) {
  return buildShortUrl(item.code);
}

function buildShortUrl(code) {
  const url = new URL(location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("link", code);
  return url.href;
}

function redirectShortLink() {
  const code = new URLSearchParams(location.search).get("link");
  if (!code) return;

  const target = links.find((item) => item.code === code);
  if (target) {
    location.replace(target.originalUrl);
  }
}

function showMessage(value) {
  message.textContent = value;
}

function loadLinks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveLinks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
  themeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === theme);
  });
}
