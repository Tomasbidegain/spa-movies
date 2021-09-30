const urlTendencias = 'https://api.themoviedb.org/3/trending/movie/week';
const apiKey = 'd025ca23bd46fd7c294522ff8c43c05c';

const getTendencias = async () => {
    const apiURL = `${urlTendencias}?api_key=${apiKey}&sort_by=vote_count.desc`;
    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data
    }catch(error){
        console.log('Fetch Error: ', error);
    };
};

export default getTendencias;
