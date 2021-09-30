import getTendencias from "../utils/getTendencias";

const Tendencias = async() => {
    const infoTendencias = await getTendencias();
    const view = `
        <div class="movies">
            <article class="article-movies">
                <section class="section-title">
                    <h2>Tendencias</h2>
                </section>
                <section class="section-movie">
                    ${infoTendencias.results.map(movie => `
                    <a href="#/${movie.id}">
                        <div class="movie-item">
                                <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt=${movie.original_title}>
                                <h3 class="card-title">${movie.original_title}</h3>
                                <p class="card-parrafo">Promedios de votos: ${movie.vote_average}</p>
                        </div>
                    </a>
                       `
                    ).join('')}
                </section>
            </article>
        </div>
   `;

   return view;
}

export default Tendencias;