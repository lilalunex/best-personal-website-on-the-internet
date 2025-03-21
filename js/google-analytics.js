import CONFIG from "./env.js";

let banner;
const COOKIE_KEY = "cookieGoogleAnalytics";

window.onload = function () {
    banner = document.getElementById("cookies-banner");
    let consent = localStorage.getItem(COOKIE_KEY);

    if (consent === "true") {
        loadGA();
        updateBannerVisibility(false);
    } else {
        updateBannerVisibility(consent === null);
    }

    const resetLink = document.getElementById("resetGA");
    if (resetLink) {
        resetLink.addEventListener("click", resetGoogleAnalytics);
    }

    const acceptButton = document.getElementById("acceptGA");
    const declineButton = document.getElementById("declineGA");

    if (acceptButton) {
        acceptButton.addEventListener("click", setGAConsent);
    }
    if (declineButton) {
        declineButton.addEventListener("click", setGAConsent);
    }
};

function setGAConsent(event) {
    event.preventDefault();
    const value = event.target.getAttribute("data-consent");

    localStorage.setItem(COOKIE_KEY, value);

    updateBannerVisibility(false);
    if (value === "true") loadGA();
    else removeGA();
}

function resetGoogleAnalytics(event) {
    event.preventDefault();
    localStorage.removeItem(COOKIE_KEY);
    banner.style.visibility = "visible";
    updateBannerVisibility(true);
}

function loadGA() {
    if (window.gtag) return;

    let script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA_ID}`;
    document.head.appendChild(script);

    script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            dataLayer.push(arguments);
        };
        gtag('js', new Date());
        gtag('config', CONFIG.GA_ID);
    };
}

function removeGA() {
    document.querySelectorAll("script").forEach((script) => {
        if (script.src.includes("googletagmanager.com/gtag/js")) {
            script.remove();
        }
    });

    window.dataLayer = undefined;
    window.gtag = undefined;
}

function updateBannerVisibility(visible) {
    if (visible) {
        banner.style.visibility = "visible";
        banner.classList.remove("hide");
        banner.classList.add("show");
    } else {
        banner.classList.remove("show");
        banner.classList.add("hide");

        setTimeout(() => {
            banner.style.visibility = "hidden";
        }, 300);
    }
}
