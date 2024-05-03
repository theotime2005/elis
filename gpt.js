async function main(question) {
    try {
        const request = await fetch("https://api.openai.com/v1/chat/completions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GPT_KEY}`
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [
                    {
                        "role": "system",
                        "content": "Tu es un bot discord qui est sur un serveur. Tes réponses ne doives pas être injurieuses ou vulgaires. Tu dois t'adresser à la personne en lui disant vous. Pour finir, si le terme pain au chocolat viens dans la conversation, tu devras lui répondre la phrase suivante: On dit Chocolatine!!!"
                    },
                    {
                        "role": "user",
                        "content": question
                    }
                ],
                "temperature": 0.7
            })
        });
        if (request.status===200) {
            const response = await request.json();
            return response.choices[0].message.content;
        }
    } catch (error) {
        console.error(error);
        return "Une erreur s'est produite, je n'ai pas réussi à te répondre!";
    }
}

exports.ask_gpt=main;