async function fetchBlogPosts() {
    const response = await fetch("https://api.github.com/repos/soghosh719/Soumyabrata-portfolio-Github/contents/blog");
    const files = await response.json();
    
    const postsContainer = document.getElementById("blog-posts");
    
    for (const file of files) {
        if (file.name.endsWith(".md")) {
            const postResponse = await fetch(file.download_url);
            const content = await postResponse.text();

            const titleMatch = content.match(/title: "(.*?)"/);
            const dateMatch = content.match(/date: "(.*?)"/);
            const imageMatch = content.match(/image: "(.*?)"/);

            const title = titleMatch ? titleMatch[1] : "Untitled";
            const date = dateMatch ? dateMatch[1] : "Unknown date";
            const image = imageMatch ? imageMatch[1] : "assets/uploads/default.jpg";

            const postElement = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${image}" class="card-img-top" alt="${title}">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text"><small>${date}</small></p>
                        </div>
                    </div>
                </div>
            `;
            
            postsContainer.innerHTML += postElement;
        }
    }
}

fetchBlogPosts();
