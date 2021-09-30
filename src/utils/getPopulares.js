const urlPopulares = 'https://api.themoviedb.org/3/discover/movie';
const apiKey = 'd025ca23bd46fd7c294522ff8c43c05c';

const getPopulares = async () => {
    const apiURL = `${urlPopulares}?api_key=${apiKey}&sort_by=vote_count.desc`;
    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data
    }catch(error){
        console.log('Fetch Error: ', error);
    };
};

export default getPopulares;
