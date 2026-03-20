function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function responseFinish() {
    while (document.querySelector('[fonticon="stop"]') != null) {
        await sleep(100); // wait until stop button disappears
    }
}

async function runPrompts(prompts) {
    for (const prompt of prompts) {
        document.querySelector('[data-test-id="bard-text"]').click() // make new chat
        await sleep(500);

        let textArea = document.querySelector('[class="ql-editor ql-blank textarea new-input-ui"]') // input text
        if (!textArea) {
             textArea = document.querySelector('[class="ql-editor textarea new-input-ui ql-blank"]');
        }
        textArea.textContent = prompt;
        textArea.dispatchEvent(new Event("input", { bubbles: true }));
        await sleep(500);

        document.querySelector('[class="mat-icon notranslate send-button-icon icon-filled gds-icon-xl google-symbols mat-ligature-font mat-icon-no-color"]').click(); // submit
        await sleep(500);

        await responseFinish();
        await sleep(500);
    }
}

runPrompts([
    "Hello",
    "How do I use you?"
]);