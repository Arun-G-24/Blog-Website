import axios from "axios";

export async function handler(event, context) {
  const query = event.queryStringParameters?.q || "apple";

  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: query,
        sortBy: "publishedAt",
        apiKey: process.env.VITE_NEWS_API_KEY,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ articles: response.data?.articles || [] }),
    };
  } catch (err) {
    console.error("NewsAPI error:", err.message);
    return { statusCode: 500, body: JSON.stringify({ articles: [] }) };
  }
}
