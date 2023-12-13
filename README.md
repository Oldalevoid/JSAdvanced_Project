-- IT
CYBERNEWS - Not only IT

Questa Applicazione è progettata per rendere agevole la diffusione di notizie in ambito prevalentemente Tech.

Panoramica

Il codice è strutturato in diverse funzioni che interagiscono per recuperare articoli di notizie dall'API di Hacker News, visualizzarli su una pagina web e 
implementare la funzionalità di ricerca.

Funzionalità
Caricamento Iniziale: All'avvio della pagina, recupera dieci articoli di notizie più recenti.
Carica Altro: Permette agli utenti di caricare un set aggiuntivo di dieci articoli di notizie cliccando sul pulsante "Carica Altro".
Ricerca Notizie: Consente agli utenti di cercare articoli di notizie specifici in base a un termine di ricerca fornito.


Come Utilizzare
Caricamento Iniziale:

Quando la pagina web si avvia, recupera automaticamente dieci articoli di notizie più recenti da Hacker News.
Gli articoli di notizie vengono visualizzati con titoli, link per ulteriori dettagli e le rispettive date di pubblicazione.

GiveMeMore!:

Cliccando sul pulsante "GiveMeMore!" in fondo alla pagina, vengono recuperati altri dieci articoli di notizie.

Ricerca Notizie:

Inserisci un termine di ricerca nella barra di ricerca.
Clicca sul pulsante "Cerca" per filtrare gli articoli di notizie in base al termine fornito.
Le notizie visualizzate verranno aggiornate per corrispondere ai criteri di ricerca.

Funzioni

loadNews(): Avvia il caricamento iniziale degli articoli di notizie all'avvio della pagina.
fetchNews(startIndex, searchTerm): Recupera articoli di notizie dall'API di Hacker News in base a un indice di inizio e a un termine di ricerca opzionale.
displayNews(): Visualizza gli articoli di notizie recuperati sulla pagina web.
clearNewsContainer(): Cancella il contenitore delle notizie esistente prima di visualizzare nuovi articoli o risultati di ricerca.

Come eseguire

Puoi provare questa applicazione al seguente link: https://jsadvancedoldanialessandro.netlify.app/



L'applicazione utilizza l'API fetch per effettuare richieste HTTP all'API di Hacker News.
Dipende dagli endpoint dell'API di Hacker News per recuperare i dettagli delle notizie.

-- EN 

CYBERNEWS - Not only IT
This application is designed to facilitate the dissemination of news primarily in the Tech field.

Overview
The code is structured into several functions that interact to retrieve news articles from the Hacker News API, display them on a web page, and implement search functionality.

Features
Initial Load: On page startup, retrieves ten most recent news articles.
Load More: Allows users to load an additional set of ten news articles by clicking the "Load More" button.
Search News: Enables users to search for specific news articles based on a provided search term.

How to Use
Initial Load:

When the web page starts, it automatically fetches ten most recent news articles from Hacker News.
The news articles are displayed with titles, links for further details, and their respective publication dates.

GiveMeMore!:

By clicking the "GiveMeMore!" button at the bottom of the page, another set of ten news articles is retrieved.

Search News:

Enter a search term in the search bar.
Click the "Search" button to filter news articles based on the provided term.
The displayed news will be updated to match the search criteria.

Functions
loadNews(): Initiates the loading of initial news articles on page startup.
fetchNews(startIndex, searchTerm): Retrieves news articles from the Hacker News API based on a starting index and an optional search term.
displayNews(): Displays the retrieved news articles on the web page.
clearNewsContainer(): Clears the existing news container before displaying new articles or search results.

How to Run

You can try this app at the following link: https://jsadvancedoldanialessandro.netlify.app/

Dependencies
The application uses the fetch API to make HTTP requests to the Hacker News API.
It depends on the Hacker News API endpoints to retrieve news details.

