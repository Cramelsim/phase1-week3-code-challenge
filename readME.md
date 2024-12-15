# Flatdango Movie Booking Application

## Description
Flatdango is a web application that allows users to browse movies, view their details, and purchase tickets. The application features a responsive design with a sidebar listing all available movies and a main content area displaying detailed information about the selected movie.

## Features
- View list of all available movies
- See detailed information about each movie including:
  - Movie poster
  - Title
  - Runtime
  - Showtime
  - Available tickets
- Real-time ticket purchase functionality
- Automatic UI updates when tickets are purchased
- Sold-out status indication
- Error handling and data persistence

## Technical Requirements
- Modern web browser with JavaScript enabled
- Local JSON server running on port 3000
- Node.js and npm installed

## Installation
1. Clone the repository:
```bash
git clone <git@github.com:Cramelsim/phase1-week3-code-challenge.git >
cd phase1-week3-code-challenge
```

2. Install JSON Server:
```bash
npm install -g json-server
```

3. Start the JSON Server:
```bash
json-server --watch db.json
```

4. Open `index.html` in your web browser.

## Project Structure
```
phase1-week3-code-challenge/
├── index.html          # Main HTML file
├── style.css          # Stylesheet
├── script.js          # Main JavaScript file
└── db.json           # Movie data
```

## API Endpoints
The application uses the following endpoints:
- GET `/films` - Returns all movies
- GET `/films/:id` - Returns a specific movie by ID
- PATCH `/films/:id` - Updates a movie's information (used for ticket purchases)

## Usage
1. Upon loading, the application displays the first movie's details and a list of all available movies.
2. Click on any movie in the sidebar to view its details.
3. If tickets are available, click the "Buy Ticket" button to purchase a ticket.
4. The button will show "Sold Out" when no tickets are available.


## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Improvements
- Add user authentication
- Implement shopping cart functionality
- Add payment processing
- Include movie ratings and reviews
- Add search and filter functionality
- Implement ticket quantity selection
- Add email confirmation for tickets

## License
This project is licensed under the MIT License 

## Contact Me
If you have any questions, feedback, or suggestions, feel free to reach out:
Email: [simwamelody@gmail.com]