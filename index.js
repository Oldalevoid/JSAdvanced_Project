let loadedNewsCount = 10;
let allNews = [];

function loadNews() {
  fetchNews(loadedNewsCount);
}

function fetchNews(startIndex, searchTerm = "") {
  fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
    .then(response => response.json())
    .then(data => {
      const nextTenIDs = data.slice(startIndex, startIndex + 10);

      const storyPromises = nextTenIDs.map(id => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then(response => response.json());
      });

      return Promise.all(storyPromises);
    })
    .then(details => {
      details.forEach(detail => {
        if (detail && detail.title && detail.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          allNews.push(detail); // Store the new details
        }
      });

      displayNews();
    })
    .catch(error => console.error('Error during the request:', error));
}

function displayNews() {
  const newsContainer = document.getElementById('news-container');
  // Clear existing news only if it's a new search
  if (loadedNewsCount === 10) {
    clearNewsContainer();
  }

  allNews.forEach(detail => {
    const newsElement = document.createElement('div');
    newsElement.classList.add('card');
    newsElement.innerHTML = `
      <h2>${detail.title}</h2>
      <button><a href="${detail.url}" target="_blank">Read More!</a></button>
      <p>Data: ${new Date(detail.time * 1000)}</p>
    `;
    newsContainer.appendChild(newsElement);
  });
}

function clearNewsContainer() {
  const newsContainer = document.getElementById('news-container');
  while (newsContainer.firstChild) {
    newsContainer.removeChild(newsContainer.firstChild);
  }
}

// Load ten news on page startup
loadNews();

document.getElementById("load-more-btn").addEventListener("click", function () {
  loadedNewsCount += 10;
  fetchNews(loadedNewsCount);
});

// Add event listener for the search button
document.getElementById("search-btn").addEventListener("click", function () {
  const searchTerm = document.getElementById("search-bar").value;
  loadedNewsCount = 10; // Reset loadedNewsCount when searching
  allNews = []; // Clear existing news when searching
  fetchNews(loadedNewsCount, searchTerm);
});
