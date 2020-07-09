import React from 'react';
import Characters from "./entities/Characters";
import Planets from "./entities/Planets";
import Starships from "./entities/Starhips";
import Vehicles from "./entities/Vehicles";
import Species from "./entities/Species";


const EpisodeItem = ({film}) => {

    return (
        <div className={"film-list__info"}>
            <div>Description: {film.opening_crawl}</div>
            <div>Director: {film.director}</div>
            <div>Producer: {film.producer}</div>
            <div>Release date: {film.release_date}</div>
            <Characters film={film}/>
            <Planets film={film}/>
            <Starships film={film}/>
            <Vehicles film={film}/>
            <Species film={film}/>
        </div>
    );
}

export default EpisodeItem;











