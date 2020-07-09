import React from 'react';
import Characters from "./entities/Characters";
import Planets from "./entities/Planets";
import Starships from "./entities/Starhips";
import Vehicles from "./entities/Vehicles";
import Species from "./entities/Species";


const EpisodeItem = ({film}) => {

    return (
        <div className={"film-list__info"}>
            <div><b>Description: </b>{film.opening_crawl}</div>
            <div><b>Director: </b>{film.director}</div>
            <div><b>Producer: </b>{film.producer}</div>
            <div><b>Release date: </b>{film.release_date}</div>
            <Characters film={film}/>
            <Planets film={film}/>
            <Starships film={film}/>
            <Vehicles film={film}/>
            <Species film={film}/>
        </div>
    );
}

export default EpisodeItem;











