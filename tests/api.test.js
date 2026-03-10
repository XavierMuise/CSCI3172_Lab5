import request from "supertest";
import { api } from "../netlify/functions/api.js";

describe("Meme Generator API", () => {

    it("should return images for a valid query", async () => {
        const res = await request(api).get("/api/images?query=cats");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("images");
        expect(Array.isArray(res.body.images)).toBe(true);
    }, 15000);

    it("should return an error for missing query", async () => {
        const res = await request(api).get("/api/images");
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty("error");
    }, 15000);

    it("should return a list of fonts", async () => {
        const res = await request(api).get("/api/fonts");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("fonts");
        expect(Array.isArray(res.body.fonts)).toBe(true);
    }, 15000);

    afterAll(done => {
        done();
    });

});