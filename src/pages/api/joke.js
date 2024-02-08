// pages/api/joke.js
export default async function handler(req, res) {
    const prompt = "Tell me a joke!";

    const apiKey = process.env.GENERATIVE_LANGUAGE_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "contents": [{ "parts": [{ "text": prompt }] }]
        }),
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching joke' });
    }
}