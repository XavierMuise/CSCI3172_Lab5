import express from "express";
import serverless from "serverless-http";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const api = express();
const router = express.Router();

// api keys
const UNSPLASH_API = process.env.UNSPLASH_API;
const FONTS_API = process.env.FONTS_API;

router.get("/images", async (req, res) => {
    const query = req.query.query;

    if (!query) {
        return res.status(400).json({ error: "Query is required" });
    }

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${UNSPLASH_API}`);
        const data = await response.json();
        
        res.json({
            images: data.results.map(photo => photo.urls.regular)
        });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

router.get("/fonts", async (req, res) => {
    try {
        const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${FONTS_API}&sort=popularity`);
        const data = await response.json();
        res.json({
            fonts: data.items.map(font => font.family)
        });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

api.use("/api/", router);
export const handler = serverless(api);
export { api };

if (process.env.NODE_ENV !== "production") {
    api.use(express.static("frontend"));
    api.listen(3000, () => console.log("Running on http://localhost:3000"));
}