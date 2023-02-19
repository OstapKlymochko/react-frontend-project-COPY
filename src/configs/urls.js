const baseURL = 'https://api.themoviedb.org/3';
const postersURL = 'https://image.tmdb.org/t/p/original';

const discover = '/discover/movie';
const movie = '/movie';
const genres = '/genre/movie/list';
const trending = '/trending/movie/day';
const images = '/images';
const urls = {
    discover:{
        discover
    },
    trending:{
        trending
    },
    genres:{
        genres
    },
    movie:{
        movie
    },
    images:{
        images
    }
}

export {
    baseURL,
    postersURL,
    urls
}