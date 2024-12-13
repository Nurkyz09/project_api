// Access key from Unsplash
const accesskey = "Zf77ntcjvNnyLVvLf1CMndvaM4kYhcCsN-hIH-Ls8AA";

// Variables
const searchbar = document.getElementById("search_bar");
const searchtext = document.getElementById("search_text");
const imageresult = document.getElementById("image_result");
const loadmore = document.getElementById("load_more");

// Using API
let keyword = "";
let page = 1;

async function searchImages(){
    // Fetch images from Unsplash API based on user input
    keyword = searchtext.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=15`;
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        imageresult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.style.cursor = "pointer";

        imageresult.appendChild(image);
    });
}

loadmore.addEventListener("click", ()=> {
    // Load more images when the "Load More" button is clicked    
    page++;
    searchImages();
})

searchbar.addEventListener("submit", (e) => {
    // Handle form submission when the user searches for images    
    e.preventDefault();
    page = 1;
    searchImages();
})
