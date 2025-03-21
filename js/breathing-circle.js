export function breathingCircle() {
    const breathingText = document.getElementsByClassName("breathing-text")[0];

    if (!breathingText) {f
        return;
    }

    const stages = ["breathe in", "hold", "breathe out"];
    const timings = [3400, 2000, 2600];
    let index = 0;
    let timeoutId = null;

    const updateText = () => {
        breathingText.textContent = stages[index];
        index = (index + 1) % stages.length;
    };

    const runStages = () => {
        updateText();
        timeoutId = setTimeout(() => {
            index = 1;
            updateText();
            timeoutId = setTimeout(() => {
                index = 2;
                updateText();
                timeoutId = setTimeout(runStages, timings[2]);
            }, timings[1]);
        }, timings[0]);
    };

    runStages();

    return () => {
        if (timeoutId) clearTimeout(timeoutId);
    };
}
