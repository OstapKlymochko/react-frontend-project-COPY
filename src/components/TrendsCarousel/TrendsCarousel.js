import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";

import {moviesActions} from "../../redux";
import {postersURL} from "../../configs/urls";

const TrendsCarousel = () => {
    const {trends} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(moviesActions.getTrends())
    }, [dispatch]);

    return (
        !!trends.length &&

        <Carousel>
            {trends.map(trend => {
                const {id, title, release_date, poster_path} = trend;
                return (
                    <Carousel.Item key={id}>
                        <img
                            className="d-block w-100"
                            style={{height: '800px'}}
                            src={`${postersURL}${poster_path}`}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3><Link to={{pathname: `/movies/${id}`,}}
                                      state={id}>{title} {release_date.split('-')[0]}</Link></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export {TrendsCarousel};