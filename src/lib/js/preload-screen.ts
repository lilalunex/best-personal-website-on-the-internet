export function removePreloadScreen(): void {
    const preloadScreen = document.getElementById("preload-screen");

    if (!preloadScreen) return;

    preloadScreen.style.transition = "opacity 0.21s ease-out";
    preloadScreen.style.opacity = "0";

    setTimeout(() => {
        preloadScreen?.remove();
    }, 210);
}
