let loadedNewsCount = 10;

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
      clearNewsContainer(); // Clear existing news before displaying new ones

      details.forEach(detail => {
        if (detail && detail.title && detail.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          const newsElement = document.createElement('div');
          newsElement.classList.add('card');
          newsElement.innerHTML = `
            <h2>${detail.title}</h2>
            <button><a href="${detail.url}" target="_blank">Read More!</a></button>
            <p>Data: ${new Date(detail.time * 1000)}</p>
          `;
          document.getElementById('news-container').appendChild(newsElement);
        }
      });
    })
    .catch(error => console.error('Errore durante la richiesta:', error));
}

function clearNewsContainer() {
  const newsContainer = document.getElementById('news-container');
  while (newsContainer.firstChild) {
    newsContainer.removeChild(newsContainer.firstChild);
  }
}

// Carica dieci notizie all'avvio della pagina
loadNews();

document.getElementById("load-more-btn").addEventListener("click", function () {
  loadedNewsCount += 10;
  fetchNews(loadedNewsCount);
});

// Add event listener for the search button
document.getElementById("search-btn").addEventListener("click", function () {
  const searchTerm = document.getElementById("search-bar").value;
  fetchNews(loadedNewsCount, searchTerm);
});
