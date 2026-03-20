function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function responseFinish() {
    while (document.querySelector('[aria-label="Stop response"]') != null) {
        await sleep(100); // wait until stop button disappears
    }
}

async function runPrompts(prompts) {
    for (const prompt of prompts) {
        document.querySelector('[aria-label="New chat"]').click(); // make new chat
        await sleep(500);

        let textArea = document.querySelector('[data-testid="chat-input"]') // input text
        textArea.innerHTML = prompt;
        textArea.dispatchEvent(new Event("input", { bubbles: true }));
        await sleep(500);

        document.querySelector('[aria-label="Send message"]').click(); // submit
        await sleep(500);

        await responseFinish();
        await sleep(500);
    }
}

runPrompts([
    "Hello",
    "How do I use you?"
]);