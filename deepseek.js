function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function responseFinish() {
    while (document.querySelector('[class="_7436101 ds-icon-button ds-icon-button--l ds-icon-button--sizing-container"]') != null) {
        await sleep(100); // wait until stop button disappears
    }
}

async function runPrompts(prompts) {
    for (const prompt of prompts) {
        document.querySelector('[class="_5a8ac7a a084f19e"]').click(); // make new chat
        await sleep(500);

        let textArea = document.querySelector('[placeholder="Message DeepSeek"]') // input text
        textArea.innerHTML = prompt;
        textArea.dispatchEvent(new Event("input", { bubbles: true }));
        await sleep(500);

        document.querySelector('[class="_7436101 ds-icon-button ds-icon-button--l ds-icon-button--sizing-container"]').click(); // submit
        await sleep(1500);

        await responseFinish();
        await sleep(500);
    }
}

runPrompts([
    "Hello",
    "How do I use you?"
]);