const apiPersonajes = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'd025ca23bd46fd7c294522ff8c43c05c';

const getPersonajes = async (id) => {
    const apiURL = `${apiPersonajes}${id}/credits?api_key=${apiKey}`;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getPersonajes;
