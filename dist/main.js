/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let loadedNewsCount = 10;\nlet allNews = [];\n\nfunction loadNews() {\n  fetchNews(loadedNewsCount);\n}\n\nasync function fetchNews(startIndex, searchTerm = \"\") {\n    try {\n      const response = await fetch(\"https://hacker-news.firebaseio.com/v0/newstories.json\");\n      const data = await response.json();\n  \n      const nextTenIDs = data.slice(startIndex, startIndex + 10);\n      const storyPromises = nextTenIDs.map(id => {\n        return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)\n          .then(response => response.json());\n      });\n  \n      const details = await Promise.all(storyPromises);\n  \n      details.forEach(detail => {\n        if (detail && detail.title && detail.title.toLowerCase().includes(searchTerm.toLowerCase())) {\n          allNews.push(detail); // Store the new details\n        }\n      });\n  \n      displayNews();\n    } catch (error) {\n      console.error('Error during the request:', error);\n      const errorMessage = document.getElementById('error-message');\n      errorMessage.textContent = 'Errore durante il caricamento dei dati. Si prega di riprovare più tardi.';\n      errorMessage.style.display = 'block';\n    }\n  }\n  \n\nfunction displayNews() {\n  const newsContainer = document.getElementById('news-container');\n  // Clear existing news only if it's a new search\n  if (loadedNewsCount === 10) {\n    clearNewsContainer();\n  }\n\n  allNews.forEach(detail => {\n    const newsElement = document.createElement('div');\n    newsElement.classList.add('card');\n    newsElement.innerHTML = `\n      <h2>${detail.title}</h2>\n      <button><a href=\"${detail.url}\" target=\"_blank\">Read More!</a></button>\n      <p>Data: ${new Date(detail.time * 1000)}</p>\n    `;\n    newsContainer.appendChild(newsElement);\n  });\n}\n\nfunction clearNewsContainer() {\n  const newsContainer = document.getElementById('news-container');\n  while (newsContainer.firstChild) {\n    newsContainer.removeChild(newsContainer.firstChild);\n  }\n}\n\n// Load ten news on page startup\nloadNews();\n\ndocument.getElementById(\"load-more-btn\").addEventListener(\"click\", function () {\n  loadedNewsCount += 10;\n  fetchNews(loadedNewsCount);\n});\n\n// Add event listener for the search button\ndocument.getElementById(\"search-btn\").addEventListener(\"click\", function () {\n  const searchTerm = document.getElementById(\"search-bar\").value;\n  loadedNewsCount = 10; // Reset loadedNewsCount when searching\n  allNews = []; // Clear existing news when searching\n  fetchNews(loadedNewsCount, searchTerm);\n});\n\n\n//# sourceURL=webpack://jsadvanced_project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;