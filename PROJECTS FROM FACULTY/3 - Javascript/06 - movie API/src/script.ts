interface MovieResponse {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Genre: string;
    Poster: string;
    Ratings: {
      Source: string;
      Value: string;
    }[];
    imdbID: string;
}

async function fetchData (title:string):Promise<void>{
    try {
        const API_KEY = 'f6ab01ff';
        let response: Response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`);
        let data : MovieResponse = await response.json()
        console.log(data);
        showData(data)
    } catch (error) {
        throw new Error("error");
    }
}
  
fetchData("Baahubali");

const input = document.getElementsByClassName("input")[0];
const movieResults = document.querySelector(".movie-results");

function showData(dataInput : MovieResponse){
    console.log("showdata");

    const createElement = document.createElement('div');

    movieResults!.innerHTML = "saljjc"
    movieResults!.appendChild(createElement);
}

console.log("object");
console.log("2object");