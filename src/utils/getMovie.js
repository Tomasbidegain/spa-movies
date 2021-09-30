import Error404 from "../pages/Error404";

const urlMovies = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'd025ca23bd46fd7c294522ff8c43c05c';

const getMovie = async (id) => {
    const apiURL = id ? `${urlMovies}${id}?api_key=${apiKey}&language=es` : Error404;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getMovie;