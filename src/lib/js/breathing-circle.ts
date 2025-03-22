export function breathingCircle(): void {
    const breathingText = document.querySelector<HTMLElement>(".breathing-text");
    if (!breathingText) return;

    const stages: string[] = ["breathe in", "hold", "breathe out"];
    const timings: number[] = [3400, 2000, 2600];
    let index = 0;

    const updateText = (): void => {
        if (!breathingText) return;
        breathingText.textContent = stages[index];

        setTimeout(() => {
            index = (index + 1) % stages.length;
            updateText();
        }, timings[index]);
    };

    updateText();
}
