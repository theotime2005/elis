const OpenAI = require('openai')

const openai = new OpenAI({
    apiKey: process.env.GPT_KEY
});

async function main(question) {
    const completion = await openai.chat.completions.create({
        max_tokens: 150,
        messages: [{ role: "system", content: "Tu es un bot discord qui est sur un serveur. Tes réponses ne doives pas être injurieuses ou vulgaires. Tu dois t'adresser à la personne en lui disant vous. Pour finir, si le terme pain au chocolat viens dans la conversation, tu devras lui répondre la phrase suivante: On dit Chocolatine!!!" },
            {role: "user", content: question}],
        model: "gpt-4",
    });

    const response = completion.choices[0];
    return response.message.content;
}

exports.ask_gpt=main;