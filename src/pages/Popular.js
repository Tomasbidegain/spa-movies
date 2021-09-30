import getPopulares from "../utils/getPopulares";

const Popular = async() => {
    const infoPopulares = await getPopulares();
    const view = `
        <div class="movies">
            <article class="article-movies">
                <section class="section-title">
                    <h2>Más populares</h2>
                </section>
                <section class="section-movie">
                    ${infoPopulares.results.map(movie => `
                        <div class="movie-item">
                            <a href="#/${movie.id}">
                                <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" class="card-img-top" alt=${movie.original_title}>
                                <h3 class = "card-title">${movie.original_title}</h3>
                                <p class = "card-parrafo" >Promedio de votos: ${movie.vote_average}</p>
                            </a>
                        </div>
                        `
                    ).join('')}
                </section>
            </article>
        </div>
   `;

   return view;
}

export default Popular;