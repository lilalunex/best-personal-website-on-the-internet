import CONFIG from "./env";

let banner: HTMLElement | null;
const COOKIE_KEY: string = "cookieGoogleAnalytics";

if (typeof window !== "undefined") {
    banner = document.getElementById("kekse");
    const consent = localStorage.getItem(COOKIE_KEY);

    if (consent === "true") {
        loadGA();
        updateBannerVisibility(false);
    } else {
        updateBannerVisibility(consent === null);
    }
}

export function setGAConsent(state: string): void {
    localStorage.setItem(COOKIE_KEY, state);

    updateBannerVisibility(false);
    if (state === "true") loadGA();
    else removeGA();
}

export function resetGoogleAnalytics(): void {
    localStorage.removeItem(COOKIE_KEY);
    removeGA();
    updateBannerVisibility(true);
}

function loadGA(): void {
    if ((window as any).gtag) return;

    const script1 = document.createElement("script");
    script1.setAttribute("async", "true");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.textContent = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${CONFIG.GA_ID}');
`;

    document.head.appendChild(script1);
    document.head.appendChild(script2);
}

function removeGA(): void {
    document.querySelectorAll("script").forEach((script) => {
        if (script.src.includes("googletagmanager.com/gtag/js")) {
            script.remove();
        }
    });

    (window as any).dataLayer = undefined;
    (window as any).gtag = undefined;
}

function updateBannerVisibility(visible: boolean): void {
    if (!banner) return;

    if (visible) {
        banner.style.visibility = "visible";
        banner.classList.remove("hide");
        banner.classList.add("show");
    } else {
        banner.classList.remove("show");
        banner.classList.add("hide");

        setTimeout(() => {
            if (banner && banner.classList.contains("hide")) {
                banner.style.visibility = "hidden";
            }
        }, 350);
    }
}
