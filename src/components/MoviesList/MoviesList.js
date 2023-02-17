import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {MovieCard} from "../MovieCard/MovieCard";
import {carActions} from "../../redux";

const MoviesList = () => {
    let {movies} = useSelector(state => state.movies);
    let dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    let page = query.get('page');
    useEffect(()=>{
        dispatch(carActions.getAll({page}));
    },[dispatch,page]);
    return (
        <div>
            {!!movies.length && movies.slice(0,1).map(film => <MovieCard key={film.id} film={film}/>)}
        </div>
    );
};

export {MoviesList};