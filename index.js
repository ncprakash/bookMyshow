
document.querySelector('.sign-in-btn').addEventListener('click', () => {  
   
    console.log('Sign-in button clicked!');  
  });  
    
 
  document.querySelector('.location-dropdown select').addEventListener('change', (e) => {  
    
    console.log(`Location changed to ${e.target.value}`);  
  });

  document.getElementById("moreMovieBtn").addEventListener("click", () => {
    fetchRecentMovies();


function fetchRecentMovies() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayMovies(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayMovies(movie) {
    const movieDiv = document.createElement('div');
    movieDiv.innerHTML = `
        <h3>${movie.title}</h3>
        <p>Release Date: ${movie.release_date}</p>
        <p>${movie.overview}</p>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
    `;
    movieContainer.appendChild(movieDiv);
}



    
    });
  

