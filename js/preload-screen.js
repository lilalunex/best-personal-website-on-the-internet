export function removePreloadScreen() {
    let preloadScreen = document.getElementById("preload-screen");
    if (!preloadScreen) return;

    preloadScreen.style.transition = "opacity 0.3s ease-out";
    preloadScreen.style.opacity = "0";

    setTimeout(() => preloadScreen.remove(), 300);
}
