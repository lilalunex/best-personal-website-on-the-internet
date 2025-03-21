import { removePreloadScreen } from "./preload-screen.js";
import { breathingCircle } from "./breathing-circle.js";

window.addEventListener("load", () => {
    removePreloadScreen();
    breathingCircle();
});
