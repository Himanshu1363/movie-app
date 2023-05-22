let api = "https://www.omdbapi.com/?apikey=8c8f3622&t=";
let loadingStatus=false;
let img = document.getElementById('img')
let title = document.getElementById('title')
let desc = document.getElementById('description')
let year = document.getElementById('year')
let genre = document.getElementById('genre')
let ratings = document.getElementById('ratings')
let actors = document.getElementById('actors')
let directior = document.getElementById('director')
let awards = document.getElementById('awards')
let collection = document.getElementById('collection')
let movieContainer = document.getElementById('movie-container')
let errorContainer = document.getElementById('error-container')
movieContainer.classList.add('d-none')
errorContainer.classList.add('d-none')





function checkLoaderStatus(){
    let intro = document.getElementById("intro");
    intro.style.display = 'none'
    let loader = document.getElementById("loader")
    if (loadingStatus == true){
        loader.classList.add('loader')
    }
    else{
        loader.classList.remove('loader')
    }
}

    







function fetchMovieDetails(){
    loadingStatus = true;
    checkLoaderStatus();

    let movieName = document.getElementById("movieName")
    let apiQuery = api+movieName.value
    console.log(apiQuery) 
    fetch (apiQuery).then((response)=>{
        console.log(response)
        return response.json();
    }).then((data)=>{
        if(data.Error != ('Movie not found!')){
        loadingStatus = false;
        checkLoaderStatus();

        img.src = data.Poster;
        title.innerText = data.Title;
        desc.innerText = data.Plot;
        year.innerText = data.Year;
        genre.innerText = data.Genre;
        actors.innerText = data.Actors;
        directior.innerText = data.Director;
        awards.innerText = data.Awards;
        collection.innerText = data.BoxOffice;
        year.innerText = data.Year;
        ratings.innerText = data.imdbRating;
        console.log(data)
        movieContainer.classList.remove('d-none')
        errorContainer.classList.add('d-none')
        }
        else{
            movieContainer.classList.add('d-none')
            errorContainer.classList.remove('d-none')
            loadingStatus=false;
            checkLoaderStatus()

        }
    })
}

