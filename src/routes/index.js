import Popular from '../pages/Popular';
import Tendencias from '../pages/Tendencias';
import Movie from '../pages/Movie';
import Error404 from '../pages/Error404';
import Header from '../templates/Header';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Popular,
    '/:id': Movie,
    '/tendencias': Tendencias
};

const routesMap = async() => {
    const header = null || document.getElementById('header');
    const movie_grid = null || document.getElementById('grid-movies');

    header.innerHTML = Header(); //await

    let hash = getHash();
    console.log('Hash: ', hash);
    let route = await resolveRoutes(hash);
    console.log('Ruta: ', route);

    let render = routes[route] ? routes[route] : Error404;
    movie_grid.innerHTML = await render();
}

export default routesMap;
