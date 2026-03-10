import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.resolve(__dirname, "../frontend/index.html"), "utf8");

describe("Meme Generator UI", () => {
    let dom, document;

    beforeEach(() => {
        dom = new JSDOM(html);
        document = dom.window.document;
    });

    it("should have a search input", () => {
        const input = document.querySelector("#searchQuery");
        expect(input).not.toBeNull();
    });

    it("should have a search button", () => {
        const button = document.querySelector("#ImageFinder button");
        expect(button).not.toBeNull();
    });

    it("should have a top text input", () => {
        const input = document.querySelector("#topText");
        expect(input).not.toBeNull();
    });

    it("should have a bottom text input", () => {
        const input = document.querySelector("#bottomText");
        expect(input).not.toBeNull();
    });

    it("should have a font picker", () => {
        const select = document.querySelector("#fontPicker");
        expect(select).not.toBeNull();
    });

    it("should have a canvas element", () => {
        const canvas = document.querySelector("#memeCanvas");
        expect(canvas).not.toBeNull();
    });

    it("should have a file upload input", () => {
        const upload = document.querySelector("#imageUpload");
        expect(upload).not.toBeNull();
    });

});