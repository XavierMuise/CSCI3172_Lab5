let selectedImageUrl = null;


// get every font and make a list that the user can choose from 
async function loadFonts() {
    try {
        const response = await fetch("/api/fonts");
        const data = await response.json();

        const fontPicker = document.getElementById("fontPicker");

        data.fonts.forEach(font => {
            const option = document.createElement("option");
            option.value = font;
            option.textContent = font;
            fontPicker.appendChild(option);
        });

        loadFont(data.fonts[0]);

        fontPicker.addEventListener("change", () => {
            loadFont(fontPicker.value);
        });

    } catch (error) {
        console.error("Failed to load fonts:", error);
    }
}


function loadFont(fontFamily) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, "+")}&display=swap`;
    document.head.appendChild(link);
}


//output all images returned by the api and let the user choose which one to meme 
async function searchImages() {
    const query = document.getElementById("searchQuery").value;

    if (!query) {
        alert("Search bar is empty");
        return;
    }

    try {
        const response = await fetch(`/api/images?query=${query}`);
        const data = await response.json();

        const searchResults = document.getElementById("searchResults");
        searchResults.innerHTML = "";

        data.images.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Search result";
            img.onclick = () => selectImage(url);
            searchResults.appendChild(img);
        });

    } catch (error) {
        console.error("Failed to fetch images:", error);
    }
}

function selectImage(url) {
    selectedImageUrl = url;
    alert("Image selected, now add text ");
}

function uploadImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        selectedImageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
}

function generateMeme() {
    if (!selectedImageUrl) {
        alert("Please select or upload an image first.");
        return;
    }

    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;
    const font = document.getElementById("fontPicker").value;

    const canvas = document.getElementById("memeCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = selectedImageUrl;

   img.onload = async () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const fontSize = Math.floor(canvas.width / 10);

    await document.fonts.load(`bold ${fontSize}px ${font}`);

    ctx.font = `${fontSize}px ${font}`;
    ctx.fillStyle = "white";
    ctx.lineWidth = fontSize / 10;
    ctx.textAlign = "center";

    if (topText) {
        ctx.fillText(topText, canvas.width / 2, fontSize);
        ctx.strokeText(topText, canvas.width / 2, fontSize);
    }

    if (bottomText) {
        ctx.fillText(bottomText, canvas.width / 2, canvas.height - fontSize / 2);
        ctx.strokeText(bottomText, canvas.width / 2, canvas.height - fontSize / 2);
    }

    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.href = canvas.toDataURL("image/png");
    downloadBtn.style.display = "inline";
    downloadBtn.textContent = "Download Meme";
};
}

loadFonts();