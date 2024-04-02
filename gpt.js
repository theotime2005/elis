const OpenAI = require('openai')


const openai = new OpenAI({
    apiKey: process.env.GPT_KEY // Utilise GPT_KEY depuis ton .env
});

async function main() {
    const completion = await openai.chat.completions.create({
        max_tokens: 50,
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
    });

    return completion.choices[0];
}

exports.ask_gpt=main;