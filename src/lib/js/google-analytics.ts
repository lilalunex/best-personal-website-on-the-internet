import CONFIG from "./env";

let banner: HTMLElement | null;
const COOKIE_KEY = "cookieGoogleAnalytics";

if (typeof window !== "undefined") {
    banner = document.getElementById("cookies-banner");
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

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA_ID}`;
    document.head.appendChild(script);

    script.onload = () => {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).gtag = function (...args: any[]) {
            (window as any).dataLayer.push(args);
        };
        (window as any).gtag('js', new Date());
        (window as any).gtag('config', CONFIG.GA_ID);
    };
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
