// URL for JSON server
const baseURL = "http://localhost:3000/films";

// DOM elements
const filmsList = document.getElementById('films');
const poster = document.getElementById('poster');
const title = document.getElementById('title');
const runtime = document.getElementById('runtime');
const showtime = document.getElementById('showtime');
const availableTickets = document.getElementById('available-tickets');
const buyTicketButton = document.getElementById('buy-ticket');

// Fetch and display the first movie's details
function fetchFirstMovie() {
    fetch(`${"http://localhost:3000/films"}/1`)
        .then(response => response.json())
        .then(displayMovieDetails)
        .catch(error => console.error('Error fetching first movie:', error));
}

// Display movie details in the main section
function displayMovieDetails(movie) {
    // Update basic movie information
    poster.src = movie.poster;
    title.textContent = movie.title;
    runtime.textContent = `${movie.runtime}`;
    showtime.textContent = movie.showtime;
    
    // Calculate available tickets
    const ticketsAvailable = movie.capacity - movie.tickets_sold;
    console.log(`Movie: ${movie.title}, Capacity: ${movie.capacity}, Sold: ${movie.tickets_sold}, Available: ${ticketsAvailable}`);
    
    // Update tickets display
    availableTickets.textContent = Math.max(0, ticketsAvailable);
    
    // Get fresh button reference and update its state
    const button = document.getElementById('buy-ticket');
    button.disabled = ticketsAvailable <= 0;
    button.textContent = ticketsAvailable <= 0 ? 'Sold Out' : 'Buy Ticket';

    // Remove old event listeners and add new one
    const newButton = button.cloneNode(true);
    button.parentNode.replaceChild(newButton, button);
    
    newButton.addEventListener('click', () => {
        if (ticketsAvailable > 0) {
            buyTicket(movie);
        }
    });
}

// Fetch and display the list of movies
function fetchMovies() {
    fetch("http://localhost:3000/films")
        .then(response => response.json())
        .then(movies => {
            filmsList.innerHTML = ''; // Clear existing list
            movies.forEach(addMovieToList);
        })
        .catch(error => console.error('Error fetching movies:', error));
}

// Add a movie to the menu list
function addMovieToList(movie) {
    const li = document.createElement('li');
    li.textContent = movie.title;
    li.className = 'film item';

    li.addEventListener('click', () => {
        fetch(`${"http://localhost:3000/films"}/${movie.id}`)
            .then(response => response.json())
            .then(displayMovieDetails)
            .catch(error => console.error('Error fetching movie details:', error));
    });

    filmsList.appendChild(li);
}

// Buy a ticket for the current movie
function buyTicket(movie) {
    // Calculate current available tickets
    const ticketsAvailable = movie.capacity - movie.tickets_sold;
    
    if (ticketsAvailable > 0) {
        const newTicketsSold = movie.tickets_sold + 1;
        
        // Update the server
        fetch(`${"http://localhost:3000/films"}/${movie.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tickets_sold: newTicketsSold })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update tickets');
            }
            return response.json();
        })
        .then(updatedMovie => {
            // Refresh movie details with updated data
            displayMovieDetails(updatedMovie);
        })
        .catch(error => {
            console.error('Error updating tickets:', error);
            // Refresh the movie data in case of error
            fetch(`${"http://localhost:3000/films"}/${movie.id}`)
                .then(response => response.json())
                .then(displayMovieDetails);
        });
    }
}

// Initial setup
fetchFirstMovie();
fetchMovies();