import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

import {MoviesInfo} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

const MovieDetailsPage = () => {
    const {state:id} = useLocation();
    const {details, images,trailerPath} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(moviesActions.getById({id}));
        dispatch(moviesActions.getImages({id}));
        dispatch(moviesActions.getTrailer({id}));
    }, [dispatch,id]);
    return (
        details && <MoviesInfo details={details} images={images} trailer={trailerPath}/>
    );
};

export {MovieDetailsPage};