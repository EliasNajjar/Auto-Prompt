function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function responseFinish() {
    while (document.getElementById("composer-submit-button") != null) {
        await sleep(100); // wait until stop button disappears
    }
}

async function runPrompts(prompts) {
    for (const prompt of prompts) {
        document.querySelector('[data-testid="create-new-chat-button"]').click(); // make new chat
        await sleep(500);

        document.getElementById("prompt-textarea").innerHTML = prompt; // input text
        await sleep(500);

        document.getElementById("composer-submit-button").click(); // submit
        await sleep(500);

        await responseFinish();
        await sleep(500);
    }
}

runPrompts([
    "Hello",
    "How do I use you?"
]);