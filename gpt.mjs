import { config } from "dotenv";
import OpenAI from "openai";

config(); // Charge les variables d'environnement

const openai = new OpenAI({
    apiKey: process.env.GPT_KEY // Utilise GPT_KEY depuis ton .env
});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
}

await main();
